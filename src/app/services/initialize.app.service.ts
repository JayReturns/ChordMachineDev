import { Injectable } from '@angular/core';
import {SqliteService} from "./sqlite.service";
import {StorageService} from "./storage.service";
import {SplashScreen} from "@capacitor/splash-screen";

@Injectable({
  providedIn: 'root'
})
export class InitializeAppService {

  isAppInit: boolean = false;
  platform!: string;

  constructor(
    private sqliteService: SqliteService,
    private storageService: StorageService
  ) { }

  async initializeApp() {
    await this.sqliteService.initializePlugin().then (async (ret) => {
      this.platform = this.sqliteService.platform;
      try {
        if (this.sqliteService.platform === 'web') {
          await this.sqliteService.initWebStore();
        }

        const DB_SONGS = 'songs';
        await this.storageService.initializeDatabase(DB_SONGS);

        if (this.sqliteService.platform === 'web') {
          await this.sqliteService.saveToStore(DB_SONGS);
        }

        this.isAppInit = true;
        await SplashScreen.hide()
      } catch (err) {
        console.log('initializeApp Error', err);
      }
    })
  }

}
