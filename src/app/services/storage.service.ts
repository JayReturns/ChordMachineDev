import {Injectable, signal, WritableSignal} from '@angular/core';
import {Song} from "../models/song.model";
import {SongUpgradeStatement} from "../upgrades/song.upgrade.statement";
import {SQLiteDBConnection} from "@capacitor-community/sqlite";
import {SqliteService} from "./sqlite.service";
import {DbnameVersionService} from "./dbname-version.service";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public songList: WritableSignal<Song[]> = signal<Song[]>([]);
  private databaseName: string = "";
  private songUpdateStmts: SongUpgradeStatement = new SongUpgradeStatement();
  private versionUpgrades;
  private loadToVersion;
  private db!: SQLiteDBConnection;
  private isSongReady: WritableSignal<boolean> = signal<boolean>(false);
  constructor(private sqliteService: SqliteService, private dbVerService: DbnameVersionService) {
    this.versionUpgrades = this.songUpdateStmts.songUpgrades;
    this.loadToVersion = this.versionUpgrades[this.versionUpgrades.length - 1].toVersion;
  }

  async initializeDatabase(dbName: string) {
    this.databaseName = dbName;

    await this.sqliteService
      .addUpgradeStatement({ database: this.databaseName, upgrade: this.versionUpgrades })

    this.db = await this.sqliteService.openDatabase(this.databaseName, false, "no-encryption", 1, false);

    this.dbVerService.set(this.databaseName, this.loadToVersion);

    await this.getSongs();
  }

  getSongList() {
    return this.songList();
  }

  async loadSongs() {
    const songs: Song[] = (await this.db.query(`SELECT * FROM songs;`)).values as Song[];
    this.songList.set(songs);
  }

  async getSongs() {
    await this.loadSongs();
    this.isSongReady.set(true);
  }

  async addSong(song: Song) {
    const result = await this.db.run(
      "INSERT INTO songs (title, artist, bpm, chords) VALUES (?, ?, ?, ?);",
      [song.title, song.artist, song.bpm, JSON.stringify(song.chords)]
    );
    await this.loadSongs();
  }

  async clearSongs() {
    await this.db.run("DELETE FROM songs;");
    this.songList.set([]);
  }
}
