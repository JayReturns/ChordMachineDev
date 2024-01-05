import {Component} from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss']
})
export class ManualComponent {

  constructor(private location: Location) {
  }

  back() {
    this.location.back();
  }

}
