import {Component} from '@angular/core';
import {Chord} from "../../../models/chord.model";
import {ChordSelectorComponent} from "../../../components/chord-selector/chord-selector.component";
import {ChordService} from "../../../services/chord.service";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-normal-mode',
  templateUrl: './normal-mode.component.html',
  styleUrls: ['./normal-mode.component.scss']
})
export class NormalModeComponent {

  chords: Chord[] = [];
  bpm: number = 120;
  editMode: boolean = false;

  constructor(private chordService: ChordService, private dialog: MatDialog,
              private snackBar: MatSnackBar) {
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

  changeEditMode() {
    this.editMode = !this.editMode;
    this.snackBar.open("Die Akkorde können jetzt bearbeitet werden", undefined, {
      duration: 10_000,
    })
  }

}
