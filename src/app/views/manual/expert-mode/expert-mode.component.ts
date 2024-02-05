import { Component } from '@angular/core';
import {Chord} from "../../../models/chord.model";
import {Router} from "@angular/router";
import {ChordService} from "../../../services/chord.service";

@Component({
  selector: 'expert-mode',
  templateUrl: './expert-mode.component.html',
  styleUrls: ['./expert-mode.component.scss']
})
export class ExpertModeComponent {

  chords: (Chord | null)[][] = [
    [Chord.C,     Chord.D,  Chord.E,    Chord.F,      Chord.G,    Chord.A,    Chord.Bb],
    [Chord.C7,    Chord.D7, Chord.E7,   Chord.Fmaj7,  Chord.G7,   Chord.A7,   Chord.B7],
    [Chord.Cmaj7, Chord.Dm, Chord.Em,   null,         null,       Chord.Am,   null    ],
    [null,        null,     Chord.Em7,  null,         null,       Chord.Am7,  null    ]
  ]
  bpm: number = 120;


  constructor(private chordService: ChordService, private router: Router) {
  }

  back() {
    this.router.navigate(['/']);
  }

  playChord(chord: Chord) {
    this.chordService.sendChord(chord, this.bpm).subscribe((res) => {
      console.log(res);
    });
  }

  bpmChanged($event: number) {
    this.bpm = $event;
  }
}
