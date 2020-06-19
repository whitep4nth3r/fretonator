import { Injectable } from '@angular/core';
import { NoteToStringAndFretMap, StringFrequencies } from '../../util/constants';
import { ModeMap, NoteObject } from '../../util/types';
import { FretMapService } from '../fret-map/fret-map.service';

const SYNTH_BUFFER_SIZE = 4096;
const SYNTH_PLAY_DURATION = 2000;

@Injectable({
  providedIn: 'root'
})
export class NotePlaybackService {
  private context: AudioContext;

  constructor(private fretMapService: FretMapService) {
  }

  playNote(stringName, fret) {
    if (!this.context) {
      try {
        // Feature sniff for web audio API
        this.context = new (window.AudioContext || window['webkitAudioContext']);
      } catch (e) {
        // No browser support :(
      }
    }
    if (this.context) {
      const noteFrequency = this.getFrequency(stringName, fret);
      this.pluckString(noteFrequency);
    }
  }

  getSingleFretMapKey = (note: NoteObject, position: number) => {
    return NoteToStringAndFretMap[this.fretMapService.convertNoteToFretMapKey(note)][position];
  };

  getNextNoteInMode = (noteObject: NoteObject, position: number) => {
    const thisFretMapKey = this.getSingleFretMapKey(noteObject, position);
    const frequency = this.getFrequency(thisFretMapKey.string, thisFretMapKey.fret);

    return {
      ...thisFretMapKey,
      frequency
    };
  };

  playMode(modeMap: ModeMap) {

    const collection = [];

    for (let i = 0; i < modeMap.length; i++) {
      let positionInNoteMap = 0;

      let noteToTry = this.getNextNoteInMode(modeMap[i], positionInNoteMap);

      // this needs to be a proper recursive function
      if (collection[i - 1]) {
        if (noteToTry.frequency > collection[i - 1].frequency) {
          collection.push(noteToTry);
        } else {
          positionInNoteMap++;
          noteToTry = this.getNextNoteInMode(modeMap[i], positionInNoteMap);

          if (noteToTry.frequency > collection[i - 1].frequency) {
            collection.push(noteToTry);

          } else {
            positionInNoteMap++;
            noteToTry = this.getNextNoteInMode(modeMap[i], positionInNoteMap);

            if (noteToTry.frequency > collection[i - 1].frequency) {
              collection.push(noteToTry);
            } else {
              console.log('we have reached the end');
            }
          }
        }
      } else {
        collection.push(noteToTry);
      }
    }

    let j = 0;
    const playAllNotes = setInterval(() => {
      if (j === collection.length - 1) {
        clearInterval(playAllNotes);
      }
      console.log('Playing ', collection[j]);
      this.playNote(collection[j].string, collection[j].fret);
      j++;
    }, 1600);
  }

  private getFrequency(stringName, fret) {
    // We're using stringName here, the case sensitive alt to string, to differentiate E/e strings.
    const stringFrequency = StringFrequencies[stringName];
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
