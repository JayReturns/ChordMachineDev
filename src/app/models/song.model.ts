import {Chord} from "./chord.model";

export interface Song {
  id: number;
  title: string;
  bpm: number;
  chords: [
    {
      chord: Chord;
      length: number;
    }
  ]
}
