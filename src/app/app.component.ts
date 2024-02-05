import {Component} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {DatabaseService, User} from "./services/database.service";
import {SplashScreen} from "@capacitor/splash-screen";



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

  users = this.database.getUsers();
  newUserName = '';

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer,
              private database: DatabaseService) {

    this.icons
      .map(iconName => {return {name: iconName, path: this.iconPath + iconName + ".svg"}})
      .forEach(icon => {
        this.matIconRegistry.addSvgIcon(
          icon.name,
          this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path))
      })
    this.initApp();
  }

  async createUser() {
    await this.database.addUser(this.newUserName);
    this.newUserName = '';
  }

  updateUser(user: User) {
    const active = user.active ? 1 : 0;
    this.database.updateUserById(user.id, active);
  }

  deleteUser(user: User) {
    this.database.deleteUserById(user.id);
  }

  async initApp() {
    await this.database.initializePlugin();
    SplashScreen.hide()
    this.database.addUser('Max');
    this.database.addUser('Moritz');
    this.database.addUser('Hans');
  }

  save() {
    alert("Save");
  }

  load() {
    alert("Load");
  }

}
