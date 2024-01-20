import { Injectable } from '@angular/core';
import {Song} from "../models/song.model";
import {Chord} from "../models/chord.model";

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  private songs: Song[] = [
  {
    title: 'Imagine',
    artist: 'John Lennon',
    bpm: 75,
    id: 1,
    chords: [
      { chord: Chord.C, length: 4 },
      { chord: Chord.Cmaj7, length: 4 },
      { chord: Chord.F, length: 4 },
      { chord: Chord.Am, length: 4 },
      // ... Weitere Akkorde hier ...
    ],
  },
  {
    title: 'Hey Jude',
    artist: 'The Beatles',
    bpm: 80,
    id: 2,
    chords: [
      { chord: Chord.G, length: 4 },
      { chord: Chord.D, length: 4 },
      { chord: Chord.C, length: 4 },
      { chord: Chord.Am, length: 4 },
      // ... Weitere Akkorde hier ...
    ],
  },
  // ... Füge hier weitere Songs hinzu ...
  {
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    bpm: 72,
    id: 30,
    chords: [
      { chord: Chord.Bb, length: 4 },
      { chord: Chord.C, length: 4 },
      { chord: Chord.G, length: 4 },
      { chord: Chord.F, length: 4 },
      // ... Weitere Akkorde hier ...
    ],
  },
  // Füge hier weitere Songs hinzu
  {
    title: 'Stairway to Heaven',
    artist: 'Led Zeppelin',
    bpm: 76,
    id: 11,
    chords: [
      { chord: Chord.Am, length: 4 },
      { chord: Chord.C, length: 4 },
      { chord: Chord.G, length: 4 },
      { chord: Chord.D, length: 4 },
      // ... Weitere Akkorde hier ...
    ],
  },
  {
    title: 'Piano Man',
    artist: 'Billy Joel',
    bpm: 78,
    id: 12,
    chords: [
      { chord: Chord.C, length: 4 },
      { chord: Chord.G, length: 4 },
      { chord: Chord.F, length: 4 },
      { chord: Chord.C, length: 4 },
      // ... Weitere Akkorde hier ...
    ],
  },
    // Add 10 more songs
    {
      title: 'Let it be',
      artist: 'The Beatles',
      bpm: 72,
      id: 13,
      chords: [
        { chord: Chord.C, length: 4 },
        { chord: Chord.G, length: 4 },
        { chord: Chord.Am, length: 4 },
        { chord: Chord.F, length: 4 },
        // ... Weitere Akkorde hier ...
      ],
    },
    {
      title: 'Hotel California',
      artist: 'Eagles',
      bpm: 72,
      id: 14,
      chords: [
        { chord: Chord.Am, length: 4 },
        { chord: Chord.E, length: 4 },
        { chord: Chord.G, length: 4 },
        { chord: Chord.D, length: 4 },
        // ... Weitere Akkorde hier ...
      ],
    },
    {
      title: 'Yesterday',
      artist: 'The Beatles',
      bpm: 72,
      id: 15,
      chords: [
        { chord: Chord.F, length: 4 },
        { chord: Chord.G, length: 4 },
        { chord: Chord.C, length: 4 },
        { chord: Chord.Am, length: 4 },
        // ... Weitere Akkorde hier ...
      ],
    },
    {
      title: 'Let it be',
      artist: 'The Beatles',
      bpm: 72,
      id: 16,
      chords: [
        { chord: Chord.C, length: 4 },
        { chord: Chord.G, length: 4 },
        { chord: Chord.Am, length: 4 },
        { chord: Chord.F, length: 4 },
        // ... Weitere Akkorde hier ...
      ],
    },
    {
      title: 'Hotel California',
      artist: 'Eagles',
      bpm: 72,
      id: 17,
      chords: [
        { chord: Chord.Am, length: 4 },
        { chord: Chord.E, length: 4 },
        { chord: Chord.G, length: 4 },
        { chord: Chord.D, length: 4 },
        // ... Weitere Akkorde hier ...
      ],
    },
    // 10 more
    {
      title: 'Yesterday',
      artist: 'The Beatles',
      bpm: 72,
      id: 18,
      chords: [
        { chord: Chord.F, length: 4 },
        { chord: Chord.G, length: 4 },
        { chord: Chord.C, length: 4 },
        { chord: Chord.Am, length: 4 },
        // ... Weitere Akkorde hier ...
      ],
    },
    {
      title: 'Let it be',
      artist: 'The Beatles',
      bpm: 72,
      id: 19,
      chords: [
        { chord: Chord.C, length: 4 },
        { chord: Chord.G, length: 4 },
        { chord: Chord.Am, length: 4 },
        { chord: Chord.F, length: 4 },
        // ... Weitere Akkorde hier ...
      ],
    },
    {
      title: 'Hotel California',
      artist: 'Eagles',
      bpm: 72,
      id: 20,
      chords: [
        { chord: Chord.Am, length: 4 },
        { chord: Chord.E, length: 4 },
        { chord: Chord.G, length: 4 },
        { chord: Chord.D, length: 4 },
        // ... Weitere Akkorde hier ...
      ],
    },
    {
      title: 'Yesterday',
      artist: 'The Beatles',
      bpm: 72,
      id: 21,
      chords: [
        { chord: Chord.F, length: 4 },
        { chord: Chord.G, length: 4 },
        { chord: Chord.C, length: 4 },
        { chord: Chord.Am, length: 4 },
        // ... Weitere Akkorde hier ...
      ],
    },
    {
      title: 'Let it be',
      artist: 'The Beatles',
      bpm: 72,
      id: 22,
      chords: [
        { chord: Chord.C, length: 4 },
        { chord: Chord.G, length: 4 },
        { chord: Chord.Am, length: 4 },
        { chord: Chord.F, length: 4 },
        // ... Weitere Akkorde hier ...
      ],
    }, // 10 more with DIFFERENT titles but they have to exist!
    {
      title: 'Hotel California',
      artist: 'Eagles',
      bpm: 72,
      id: 23,
      chords: [
        { chord: Chord.Am, length: 4 },
        { chord: Chord.E, length: 4 },
        { chord: Chord.G, length: 4 },
        { chord: Chord.D, length: 4 },
        // ... Weitere Akkorde hier ...
      ],
    },
    {
      title: 'Yesterday',
      artist: 'The Beatles',
      bpm: 72,
      id: 24,
      chords: [
        { chord: Chord.F, length: 4 },
        { chord: Chord.G, length: 4 },
        { chord: Chord.C, length: 4 },
        { chord: Chord.Am, length: 4 },
        // ... Weitere Akkorde hier ...
      ],
    },
    {
      title: 'Let it be',
      artist: 'The Beatles',
      bpm: 72,
      id: 25,
      chords: [
        { chord: Chord.C, length: 4 },
        { chord: Chord.G, length: 4 },
        { chord: Chord.Am, length: 4 },
        { chord: Chord.F, length: 4 },
        // ... Weitere Akkorde hier ...
      ],
    },
    {
      title: 'Hotel California',
      artist: 'Eagles',
      bpm: 72,
      id: 26,
      chords: [
        { chord: Chord.Am, length: 4 },
        { chord: Chord.E, length: 4 },
        { chord: Chord.G, length: 4 },
        { chord: Chord.D, length: 4 },
        // ... Weitere Akkorde hier ...
      ],
    },
    {
      title: 'Yesterday',
      artist: 'The Beatles',
      bpm: 72,
      id: 27,
      chords: [
        { chord: Chord.F, length: 4 },
        { chord: Chord.G, length: 4 },
        { chord: Chord.C, length: 4 },
        { chord: Chord.Am, length: 4 },
        // ... Weitere Akkorde hier ...
      ],
    },

];

  constructor() { }

  async getSongs(): Promise<Song[]> {
    return this.songs;
  }

  async getArtists(): Promise<string[]> {
    return this.songs.map(song => song.artist).filter(this.onlyUnique);
  }

  private onlyUnique(value: any, index: any, array: any) {
    return array.indexOf(value) === index;
  }

}
