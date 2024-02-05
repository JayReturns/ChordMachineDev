import {Component} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private icons: string[] = [
    "music",
    "guitar-acoustic",
    "pencil-box-multiple-outline",
    "playlist-music"
  ];

  private iconPath: string = "../assets/icons/";

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {

    this.icons
      .map(iconName => {return {name: iconName, path: this.iconPath + iconName + ".svg"}})
      .forEach(icon => {
        this.matIconRegistry.addSvgIcon(
          icon.name,
          this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path))
      })
  }

}
