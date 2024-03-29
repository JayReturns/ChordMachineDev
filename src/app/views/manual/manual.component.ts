import {AfterViewInit, Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss']
})
export class ManualComponent implements AfterViewInit{

  modeButton: string = '';
  editMode: boolean = false;

  constructor(protected router: Router, private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(params => {
      if (!params.get('edit')) {
        this.editMode = false;
        return;
      }
      this.editMode = params.get('edit') === '1';
    });
  }

  ngAfterViewInit() {
    this.router.events.subscribe((event) => {
      if (this.isExpertMode()) {
        this.modeButton = 'Einfacher Modus';
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
