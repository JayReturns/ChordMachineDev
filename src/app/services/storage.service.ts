import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {SqliteService} from "./sqlite.service";
import {SQLiteDBConnection} from "@capacitor-community/sqlite";
import {SongUpgradeStatement} from "../upgrades/song.upgrade.statement";
import {DbnameVersionService} from "./dbname-version.service";
import {Song} from "../models/song.model";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public songList: BehaviorSubject<Song[]> =
  new BehaviorSubject<Song[]>([]);
  private databaseName: string = "";
  private sUpdStmts: SongUpgradeStatement = new SongUpgradeStatement();
  private versionUpgrades;
  private loadToVersion;
  private db!: SQLiteDBConnection;
  private isSongReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqliteService: SqliteService,
  private dbVerService: DbnameVersionService) {
    this.versionUpgrades = this.sUpdStmts.songUpgrades;
    this.loadToVersion = this.versionUpgrades[this.versionUpgrades.length-1].toVersion;
  }
  async initializeDatabase(dbName: string) {
    this.databaseName = dbName;
    // create upgrade statements
    await this.sqliteService
      .addUpgradeStatement({  database: this.databaseName,
                              upgrade: this.versionUpgrades});
    // create and/or open the database
    this.db = await this.sqliteService.openDatabase(this.databaseName,
                                          false,
                                          'no-encryption',
                                          this.loadToVersion,
                                          false
    );
    this.dbVerService.set(this.databaseName,this.loadToVersion);

    await this.getSongs();
  }
  fetchSongs(): Observable<Song[]> {
    return this.songList.asObservable();
  }

  async loadSongs() {
    const users: Song[]= (await this.db.query('SELECT * FROM songs;')).values as Song[];
    this.songList.next(users);
  }
  async getSongs() {
    await this.loadSongs();
    this.isSongReady.next(true);
  }

  // TODO: Convert
  async addSong(song: Song) {
    // const sql = `INSERT INTO users (name) VALUES (?);`;
    const sql = `INSERT INTO songs (id, title, bpm, chords) VALUES (?,?,?,?);`;
    const id = Math.floor(Math.random() * 1000);
    await this.db.run(sql,[id, song.title, song.bpm, song.chords]);
    await this.getSongs();
  }

  // TODO Convert
  async updateUserById(id: string, active: number) {
    const sql = `UPDATE users SET active=${active} WHERE id=${id}`;
    await this.db.run(sql);
    await this.getSongs();
  }

  // TODO: Convert
  async deleteUserById(id: string) {
    const sql = `DELETE FROM users WHERE id=${id}`;
    await this.db.run(sql);
    await this.getSongs();
  }
}
