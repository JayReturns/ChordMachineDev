import {Component} from '@angular/core';
import {Location} from "@angular/common";
import {ChordService} from "../../services/chord.service";

@Component({
  selector: 'manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss']
})
export class ManualComponent {

  constructor(private location: Location, private chordService: ChordService) { }

  back() {
    this.location.back();
  }

  playChord(chord: string) {
    this.chordService.sendChord(chord, 1, 120).subscribe((res) => {
      console.log(res);
    });
  }

}
