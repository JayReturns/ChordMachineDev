import {Component, effect, OnDestroy} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {DatabaseService} from "./services/database.service";
import {SplashScreen} from "@capacitor/splash-screen";
import {DummyService} from "./services/dummy.service";
import {StorageService} from "./services/storage.service";
import {InitializeAppService} from "./services/initialize.app.service";



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
              private domSanitizer: DomSanitizer,
              private storageService: StorageService,
              private dummyService: DummyService,
              private initializeAppService: InitializeAppService) {

    this.icons
      .map(iconName => {return {name: iconName, path: this.iconPath + iconName + ".svg"}})
      .forEach(icon => {
        this.matIconRegistry.addSvgIcon(
          icon.name,
          this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path))
      })
    this.initializeAppService.initializeApp().then(_ => {});
  }

  test() {
    this.dummyService.getSongs().then(songs => {
      let song = songs[1];
      this.storageService.addSong(song).then(_ => {});
    })
  }

  test2() {
    this.storageService.clearSongs().then(_ => {})
  }

  loaD() {
    // this.databaseService.loadSongs()
    this.storageService.loadSongs().then(_ => {})
  }

  loadAll() {
    this.dummyService.getSongs().then(songs => {
      songs.forEach(song => {
        this.storageService.addSong(song).then(_ => {});
      })
    });
  }
}
