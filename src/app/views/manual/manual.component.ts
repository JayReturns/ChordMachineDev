import {AfterViewInit, Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss']
})
export class ManualComponent implements AfterViewInit{

  modeButton: string = '';

  constructor(private router: Router) { }

  ngAfterViewInit() {
    this.router.events.subscribe((event) => {
      if (this.router.url.toLowerCase().includes('/normal')) {
        this.modeButton = 'Expert Mode';
      } else {
        this.modeButton = 'Normal Mode';
      }
    });
  }

  back() {
    this.router.navigate(['/']);
  }

  changeMode() {
    if (this.router.url.toLowerCase().includes('/normal')) {
      this.router.navigate(['/manual/expert']);
    } else {
      this.router.navigate(['/manual/normal']);
    }
  }

}
