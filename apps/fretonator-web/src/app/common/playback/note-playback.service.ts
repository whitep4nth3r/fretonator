import { Injectable } from '@angular/core';
import { StringFrequencies } from '../../util/constants';

const SYNTH_BUFFER_SIZE = 4096;
const SYNTH_PLAY_DURATION = 2000;

@Injectable({
  providedIn: 'root'
})
export class NotePlaybackService {
  private context: AudioContext;

  constructor() {
  }

  playNote(stringFrequencyMarker, fret) {
    if (!this.context) {
      try {
        // Feature sniff for web audio API
        this.context = new (window.AudioContext || window['webkitAudioContext']);
      } catch (e) {
        // No browser support :(
      }
    }
    if (this.context) {
      const noteFrequency = this.getFrequency(stringFrequencyMarker, fret);
      this.pluckString(noteFrequency);
    }
  }

  private getFrequency(stringFrequencyMarker, fret) {
    // We're using stringFrequencyMarker here, the case sensitive alt to string, to differentiate E/e strings.
    const stringFrequency = StringFrequencies[stringFrequencyMarker];
    const fretCents = fret * 100;
    return stringFrequency * Math.pow(2, (fretCents / 1200));
  }

  private pluckString(frequency: number) {
    // Use Karplus-Strong algo to simply synth guitar-like sounds.
    // https://ccrma.stanford.edu/~jos/pasp/Karplus_Strong_Algorithm.html
    const processor = this.context.createScriptProcessor(SYNTH_BUFFER_SIZE, 0, 1);
    const signalPeriod = Math.round(this.context.sampleRate / frequency);
    const currentSample = new Float32Array(signalPeriod);
    // Fill sample with random noise -1 through +1
    this.fillWithNoise(currentSample, signalPeriod);
    let n = 0;
    processor.addEventListener('audioprocess', (e) => {
      // Populate output buffer with signal
      const outputBuffer = e.outputBuffer.getChannelData(0);
      for (let i = 0; i < outputBuffer.length; i++) {
        // Lowpass the signal by averaging it with the next point
        currentSample[n] = (currentSample[n] + currentSample[(n + 1) % signalPeriod]) / 2;
        // Copy output to the buffer, repeat
        outputBuffer[i] = currentSample[n];
        n = (n + 1) % signalPeriod;
      }
    });
    // Filter the output
    const bandpass = this.createBandpassFilter(frequency);
    processor.connect(bandpass);
    // Kill the processor after 2 seconds
    setTimeout(() => {
      bandpass.disconnect();
      processor.disconnect();
    }, SYNTH_PLAY_DURATION);
  }

  private fillWithNoise(sample, signalPeriod) {
    for (let i = 0; i < signalPeriod; i++) {
      sample[i] = (2 * Math.random()) - 1;
    }
  }

  private createBandpassFilter(frequency) {
    const bandpass = this.context.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.value = Math.round(frequency);
    bandpass.Q.value = 1 / 6;
    bandpass.connect(this.context.destination);
    return bandpass;
  }
}
