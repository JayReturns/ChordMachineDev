import {Component} from '@angular/core';
import {Location} from "@angular/common";
import {ChordService} from "../../services/chord.service";
import {Chord} from "../../models/Chord";

@Component({
  selector: 'manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss']
})
export class ManualComponent {

  chords: Chord[] = [];
  bpm: number = 120;

  constructor(private location: Location, private chordService: ChordService) {
    this.chords = [
      Chord.C,
      Chord.Dm,
      Chord.Em,
      Chord.F,
      Chord.G,
      Chord.Am,
      Chord.Bb
    ]
  }

  back() {
    this.location.back();
  }

  playChord(chord: Chord) {
    this.chordService.sendChord(chord, 120).subscribe((res) => {
      console.log(res);
    });
  }

  bpmChanged($event: number) {
    this.bpm = $event;
  }
}
