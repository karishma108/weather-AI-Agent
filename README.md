# 🌤️ Weather Agent Chat Interface

A modern, responsive chat interface that connects to a weather agent API, built with React, TypeScript, and Vite. This application allows users to interact with an AI weather assistant through a streaming API endpoint.

## 🚀 Features

### 🎯 Core Functionality
- ✅ **Interactive Chat Interface** - Real-time messaging with the weather agent
- ✅ **Streaming API Integration** - Live responses from the weather agent
- ✅ **Message History** - Persistent conversation tracking
- ✅ **Auto-scroll** - Automatically scrolls to latest messages
- ✅ **Smart Loading States** - Animated typing indicators and status updates
- ✅ **Robust Error Handling** - Comprehensive error handling with user feedback
- ✅ **Clear Chat** - Reset conversation functionality

### 🎨 Premium UI/UX Features
- ✅ **Fully Responsive Design** - Optimized for desktop, tablet, and mobile (320px+)
- ✅ **Modern Gradient Interface** - Beautiful purple-blue gradient design
- ✅ **Smart Weather Icons** - Automatic weather condition icons (☀️🌧️❄️⛈️)
- ✅ **Message Reactions** - Interactive emoji reactions for bot messages
- ✅ **Animated Typing Indicator** - Professional bot avatar with animated typing dots
- ✅ **Relative Timestamps** - Smart time formatting ("just now", "2m ago")
- ✅ **Welcome Animation** - Engaging welcome screen with suggestion chips
- ✅ **Smooth Animations** - Slide-in effects, hover states, and micro-interactions

### 🔊 Enhanced Experience
- ✅ **Sound Notifications** - Pleasant notification sounds for new messages
- ✅ **Sound Toggle** - Easy on/off control with visual feedback
- ✅ **Export Chat History** - Download conversation as text file
- ✅ **Keyboard Shortcuts** - Ctrl+K (clear), Ctrl+M (sound), Enter (send)
- ✅ **Real-time Status** - Live connection status indicator
- ✅ **Accessibility Features** - ARIA labels, keyboard navigation, screen reader support

### ⚡ Technical Excellence
- ✅ **Full TypeScript** - Complete type safety and IntelliSense
- ✅ **Advanced React Patterns** - Custom hooks, proper state management
- ✅ **CSS Modules** - Scoped styling with zero conflicts
- ✅ **Performance Optimized** - Efficient rendering and memory management
- ✅ **Web Audio API** - Custom sound generation
- ✅ **Progressive Enhancement** - Graceful feature degradation

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: CSS Modules with responsive design
- **API Integration**: Fetch API with streaming support
- **Development**: ESLint for code quality

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Update Thread ID
Before running the application, update the `THREAD_ID` in `src/services/api.ts` with your college roll number:

```typescript
const THREAD_ID = 'YOUR_COLLEGE_ROLL_NUMBER'; // Replace with your actual roll number
```

### Step 3: Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Step 4: Build for Production
```bash
npm run build
```

### Step 5: Preview Production Build
```bash
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ChatWindow.tsx          # Main chat container
│   ├── ChatWindow.module.css
│   ├── MessageBubble.tsx       # Individual message display
│   ├── MessageBubble.module.css
│   ├── MessageInput.tsx        # Message input with send functionality
│   ├── MessageInput.module.css
│   ├── MessageList.tsx         # Message list with auto-scroll
│   └── MessageList.module.css
├── services/
│   └── api.ts                  # Weather agent API integration
├── App.tsx                     # Main application component
├── App.css                     # Application-wide styles
├── index.css                   # Global styles
└── main.tsx                    # Application entry point
```

## 🔧 API Configuration

The application connects to the weather agent API with the following configuration:

- **Endpoint**: `https://millions-screeching-vultur.mastra.cloud/api/agents/weatherAgent/stream`
- **Method**: POST
- **Content-Type**: application/json
- **Streaming**: Server-Sent Events support

### Request Format
```json
{
  "messages": [
    {
      "role": "user",
      "content": "Your message here"
    }
  ],
  "runId": "weatherAgent",
  "maxRetries": 2,
  "maxSteps": 5,
  "temperature": 0.5,
  "topP": 1,
  "runtimeContext": {},
  "threadId": "YOUR_COLLEGE_ROLL_NUMBER",
  "resourceId": "weatherAgent"
}
```

## 🧪 Advanced Usage Examples

### Sample Weather Queries
- "What's the weather in London?" → Gets current conditions with weather icons
- "Will it rain tomorrow in New York?" → Provides precipitation forecast
- "Weather forecast for next week in Tokyo" → Extended forecast information
- "Is it sunny in California?" → Quick condition check with emoji feedback
- "What's the temperature in Mumbai?" → Specific temperature data

### Interactive Features
- **Click weather emojis** in bot messages for visual feedback
- **React to messages** using the 😊 button on bot responses
- **Export your chat** using the 📁 button in the header
- **Toggle sound** with the 🔊/🔇 button or Ctrl+M
- **Quick clear** with the 🗑️ button or Ctrl+K

### Keyboard Shortcuts
- `Enter` - Send message
- `Ctrl+K` (or `Cmd+K` on Mac) - Clear chat
- `Ctrl+M` (or `Cmd+M` on Mac) - Toggle sound notifications

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px  
- **Mobile**: 320px - 767px

## 🎨 Premium Design Features

- **🌈 Dynamic Gradients** - Modern purple-blue gradients throughout
- **⚡ Micro-animations** - Smooth slide-ins, hover effects, and state transitions  
- **🤖 Smart Bot Avatar** - Animated robot with pulsing effects during responses
- **👤 User Avatar** - Distinctive user identification with gradient styling
- **🌤️ Context-aware Icons** - Automatic weather emoji detection (sunny☀️, rainy🌧️, snowy❄️)
- **💬 Professional Chat Bubbles** - Distinct styling with subtle shadows and rounded corners
- **📱 Mobile-optimized** - Touch-friendly buttons and responsive typography
- **🎪 Welcome Experience** - Engaging onboarding with interactive suggestion chips
- **⌨️ Keyboard Navigation** - Full accessibility with visible focus states

## 🔊 Audio Experience

- **🎵 Pleasant Notifications** - C major chord progression for message alerts
- **⌨️ Typing Sounds** - Subtle click feedback when sending messages  
- **🔇 Smart Muting** - Persistent sound preferences with visual indicators
- **🎹 Web Audio API** - Custom sound generation without external files

## ⚡ Performance Optimizations

- **Efficient Re-rendering** - Proper React key usage and memo patterns
- **Streaming Support** - Real-time message display without blocking
- **Optimized Bundle** - Tree-shaking and code splitting with Vite
- **CSS Modules** - Scoped styles prevent global conflicts

## 🚨 Error Handling

The application handles various error scenarios:

- **Network Failures** - Connection timeout and offline states
- **API Errors** - Invalid responses and server errors  
- **Streaming Errors** - Broken connections and malformed data
- **User Input Validation** - Empty messages and special characters

## 🔍 Browser Support

- Chrome/Edge: 90+
- Firefox: 88+
- Safari: 14+
- Mobile browsers: iOS Safari 14+, Chrome Mobile 90+

## 📝 Development Notes

### Key Technical Decisions

1. **TypeScript**: Provides type safety and better development experience
2. **CSS Modules**: Prevents style conflicts and maintains component isolation
3. **Streaming API**: Enables real-time response display for better UX
4. **Component Architecture**: Modular design for maintainability and reusability
5. **Responsive Design**: Mobile-first approach for optimal cross-device experience

### Known Limitations

1. **API Response Format**: The streaming parser is designed for common formats but may need adjustment based on actual API responses
2. **Offline Support**: Currently requires internet connection for all functionality
3. **Message Persistence**: Messages are lost on page refresh (could be enhanced with localStorage)

### Future Enhancements

- [ ] Message search functionality
- [ ] Export chat history
- [ ] Dark/light theme toggle
- [ ] Message reactions
- [ ] Typing indicators
- [ ] Progressive Web App features
- [ ] Offline message queuing

## 👨‍💻 Author

Built as part of the Frontend Engineer Assignment for weather agent chat interface.

## 📄 License

This project is created for educational purposes as part of an assignment.
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
