export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface WeatherAgentMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface WeatherAgentRequest {
  messages: WeatherAgentMessage[];
  runId: string;
  maxRetries: number;
  maxSteps: number;
  temperature: number;
  topP: number;
  runtimeContext: Record<string, unknown>;
  threadId: string;
  resourceId: string;
}

const WEATHER_AGENT_URL = 'https://millions-screeching-vultur.mastra.cloud/api/agents/weatherAgent/stream';
const THREAD_ID = 'BE-ITC-57';

export const sendMessageToWeatherAgent = async (
  messages: ChatMessage[],
  onChunk: (chunk: string) => void,
  onError: (error: string) => void
): Promise<void> => {
  try {
    const apiMessages: WeatherAgentMessage[] = messages.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'assistant',
      content: msg.text
    }));

    const requestBody: WeatherAgentRequest = {
      messages: apiMessages,
      runId: 'weatherAgent',
      maxRetries: 2,
      maxSteps: 5,
      temperature: 0.5,
      topP: 1,
      runtimeContext: {},
      threadId: THREAD_ID,
      resourceId: 'weatherAgent'
    };

    const response = await fetch(WEATHER_AGENT_URL, {
      method: 'POST',
      headers: {
        'Accept': '*/*',
        'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        'x-mastra-dev-playground': 'true'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const reader = response.body?.getReader();
    if (!reader) {
      throw new Error('No response body reader available');
    }

    const decoder = new TextDecoder();
    let buffer = '';

    try {
      while (true) {
        const { done, value } = await reader.read();
        
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        buffer += chunk;

        let processedLength = 0;
        
        for (let i = 0; i < buffer.length; i++) {
          const char = buffer[i];
          
          if (char === '0' && i + 2 < buffer.length && buffer[i + 1] === ':' && buffer[i + 2] === '"') {
            let j = i + 3;
            let textContent = '';
            let escaped = false;
            
            while (j < buffer.length) {
              if (buffer[j] === '\\' && !escaped) {
                escaped = true;
                j++;
                continue;
              }
              
              if (buffer[j] === '"' && !escaped) {
                if (textContent) {
                  onChunk(textContent);
                }
                processedLength = j + 1;
                break;
              }
              
              textContent += buffer[j];
              escaped = false;
              j++;
            }
          }
          
          else if (char === 'f' && buffer.substring(i).startsWith('f:{"messageId"')) {
            let j = i;
            while (j < buffer.length && buffer[j] !== '}') j++;
            if (j < buffer.length) processedLength = j + 1;
          }
          
          else if ((char === '9' || char === 'a') && buffer[i + 1] === ':') {
            let braceCount = 0;
            let j = i + 2;
            while (j < buffer.length) {
              if (buffer[j] === '{') braceCount++;
              else if (buffer[j] === '}') {
                braceCount--;
                if (braceCount === 0) {
                  processedLength = j + 1;
                  break;
                }
              }
              j++;
            }
          }
          
          else if (char === 'e' && buffer.substring(i).startsWith('e:{"finishReason"')) {
            let j = i;
            while (j < buffer.length && buffer[j] !== '}') j++;
            if (j < buffer.length) processedLength = j + 1;
          }
          
          else if (char === 'd' && buffer.substring(i).startsWith('d:{"finishReason"')) {
            let j = i;
            while (j < buffer.length && buffer[j] !== '}') j++;
            if (j < buffer.length) processedLength = j + 1;
          }
        }
        
        if (processedLength > 0) {
          buffer = buffer.substring(processedLength);
        }
      }
    } finally {
      reader.releaseLock();
    }

  } catch (error) {
    console.error('Weather agent API error:', error);
    onError(error instanceof Error ? error.message : 'Failed to get weather information');
  }
};

export const generateMessageId = (): string => {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
};