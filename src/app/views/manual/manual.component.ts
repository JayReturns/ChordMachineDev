import {Component} from '@angular/core';
import {Location} from "@angular/common";
import {ChordService} from "../../services/chord.service";
import {Chord} from "../../models/Chord";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss']
})
export class ManualComponent {

  chords: Chord[] = [];
  bpmControl = new FormControl<number>(120);
  lengthControl = new FormControl<number>(4);

  constructor(private location: Location, private chordService: ChordService) {
    this.chords = [
      Chord.C,
      Chord.D,
      Chord.E,
      Chord.F,
      Chord.G,
      Chord.A,
      Chord.Em
    ]
  }

  back() {
    this.location.back();
  }

  playChord(chord: Chord) {
    this.chordService.sendChord(chord, 1, 120).subscribe((res) => {
      console.log(res);
    });
  }

}
