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
      if (this.isExpertMode()) {
        this.modeButton = 'Normaler Modus';
      } else {
        this.modeButton = 'Experten Modus';
      }
    });
  }

  back() {
    this.router.navigate(['/']);
  }

  changeMode() {
    if (this.isExpertMode()) {
      this.router.navigate(['/manual/normal']);
    } else {
      this.router.navigate(['/manual/expert']);
    }
  }

  isExpertMode(){
    if (this.router.url.toLowerCase().includes('/expert')) {
      return true
    } else {
      return false
    }
  }

}
