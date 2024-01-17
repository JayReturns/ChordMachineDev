import {Component} from '@angular/core';
import {Location} from "@angular/common";
import {ChordService} from "../../services/chord.service";
import {Chord} from "../../models/Chord";
import {MatDialog} from "@angular/material/dialog";
import {ChordSelectorComponent} from "../../components/chord-selector/chord-selector.component";
import {Router} from "@angular/router";

@Component({
  selector: 'manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss']
})
export class ManualComponent {

  chords: Chord[] = [];
  bpm: number = 120;

  constructor(private location: Location, private chordService: ChordService,
              public dialog: MatDialog, private router: Router) {
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

  editChord(index: number) {
    const dialogRef = this.dialog.open(ChordSelectorComponent, {
      data: {
        chord: this.chords[index],
        currentChords: this.chords
      },
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      this.chords[index] = result.chord;
    });
  }
}
