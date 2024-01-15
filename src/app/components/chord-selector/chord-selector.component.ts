import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Chord} from "../../models/chord.model";
import {MatSelectionList} from "@angular/material/list";

@Component({
  selector: 'app-chord-selector',
  templateUrl: './chord-selector.component.html',
  styleUrls: ['./chord-selector.component.scss']
})
export class ChordSelectorComponent {

  currentChord: Chord;
  usedChords: Chord[];
  availableChords: Chord[];
  selectedChord: Chord | undefined;

  constructor(public dialogRef: MatDialogRef<ChordSelectorComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) {
    if (!data.chord || !data.currentChords) {
      // TODO Handle error
    }
    this.currentChord = data.chord;
    this.usedChords = data.currentChords
    this.availableChords = Object.values(Chord)
      // .filter((chord) => !usedChords.includes(chord));
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close({
      chord: this.selectedChord
    })
  }

  onChordListChanged(chordList: MatSelectionList) {
    if (chordList.selectedOptions.hasValue()) {
      this.selectedChord = chordList.selectedOptions.selected[0].value;
    }
  }
}
