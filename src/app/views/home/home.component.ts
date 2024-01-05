import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    constructor(private router: Router) {

    }

    navigate(page: string) {
      if (page.toLowerCase().includes("manual")) {
        this.router.navigate(['/manual']);
      } else if (page.toLowerCase().includes("saved")) {
        this.router.navigate(['/saved']);
      } else {
        alert("Page not found");
      }
    }
}
