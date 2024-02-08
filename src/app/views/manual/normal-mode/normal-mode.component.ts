import {Component} from '@angular/core';
import {Chord} from "../../../models/chord.model";
import {ChordSelectorComponent} from "../../../components/chord-selector/chord-selector.component";
import {ChordService} from "../../../services/chord.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-normal-mode',
  templateUrl: './normal-mode.component.html',
  styleUrls: ['./normal-mode.component.scss']
})
export class NormalModeComponent {

  chords: Chord[] = [];
  bpm: number = 120;
  editMode: boolean = false;

  constructor(private chordService: ChordService, public dialog: MatDialog) {
    this.chords = [
      Chord.C,
      Chord.D,
      Chord.F,
      Chord.G,
      Chord.Dm,
      Chord.Em,
      Chord.Am
    ]
  }

  handleChordClick(chord: Chord, index: number) {
    if (this.editMode) {
     this.editChord(index);
     return;
    }
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
