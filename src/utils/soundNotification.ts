export class SoundNotification {
  private context: AudioContext | null = null;
  private isEnabled = true;

  constructor() {
    this.initializeAudio();
  }

  private initializeAudio() {
    try {
      this.context = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch (error) {
      console.log('Web Audio API not supported');
    }
  }

  private createNotificationSound() {
    if (!this.context) return;

    const oscillator = this.context.createOscillator();
    const gainNode = this.context.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.context.destination);

    oscillator.frequency.setValueAtTime(523.25, this.context.currentTime);
    oscillator.frequency.setValueAtTime(659.25, this.context.currentTime + 0.1);
    oscillator.frequency.setValueAtTime(783.99, this.context.currentTime + 0.2);

    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0, this.context.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, this.context.currentTime + 0.1);
    gainNode.gain.linearRampToValueAtTime(0, this.context.currentTime + 0.4);

    oscillator.start(this.context.currentTime);
    oscillator.stop(this.context.currentTime + 0.4);
  }

  private createTypingSound() {
    if (!this.context) return;

    const oscillator = this.context.createOscillator();
    const gainNode = this.context.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.context.destination);

    oscillator.frequency.setValueAtTime(800, this.context.currentTime);
    oscillator.type = 'square';
    
    gainNode.gain.setValueAtTime(0, this.context.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, this.context.currentTime + 0.01);
    gainNode.gain.linearRampToValueAtTime(0, this.context.currentTime + 0.05);

    oscillator.start(this.context.currentTime);
    oscillator.stop(this.context.currentTime + 0.05);
  }

  playMessageReceived() {
    if (!this.isEnabled) return;
    
    if (this.context?.state === 'suspended') {
      this.context.resume();
    }

    this.createNotificationSound();
  }

  playTyping() {
    if (!this.isEnabled) return;
    
    if (this.context?.state === 'suspended') {
      this.context.resume();
    }

    this.createTypingSound();
  }

  toggleSound() {
    this.isEnabled = !this.isEnabled;
    return this.isEnabled;
  }

  getSoundEnabled() {
    return this.isEnabled;
  }
}

export const soundNotification = new SoundNotification();