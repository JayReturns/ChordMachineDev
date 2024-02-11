import {Injectable, signal, WritableSignal} from '@angular/core';
import {CapacitorSQLite, SQLiteConnection, SQLiteDBConnection} from "@capacitor-community/sqlite";
import {Song} from "../models/song.model";

const DB_NAME = "songs";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;
  private songs: WritableSignal<Song[]> = signal<Song[]>([]);

  constructor() {
    // TODO: REMOVE
  }

  async initializePlugin() {
    const ret = await this.sqlite.checkConnectionsConsistency();
    console.log("Connection:");
    console.log(ret);

    this.db = await this.sqlite.createConnection(
      DB_NAME,
      false,
      "no-encryption",
      1,
      false
    );


    await this.db.open();

    const schema = `CREATE TABLE IF NOT EXISTS songs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      artist TEXT NOT NULL,
      bpm INTEGER NOT NULL,
      chords JSON NOT NULL
    );`;

    await this.db.execute(schema);
    await this.loadSongs();
    return true;
  }

  async closeConnection() {
    await this.db.close();
  }

  async loadSongs() {
    const result = await this.db.query("SELECT * FROM songs;");
    const song = result.values![0];
    // Convert song.chords from string to JSON
    song.chords = JSON.parse(song.chords);
    console.log(song);
    // this.songs.set(result.values);
  }

  async addSong(song: Song) {
    const result = await this.db.run(
      "INSERT INTO songs (title, artist, bpm, chords) VALUES (?, ?, ?, ?);",
      [song.title, song.artist, song.bpm, JSON.stringify(song.chords)]
    );
    console.log(result);
    await this.loadSongs();
  }

  async clearSongs() {
    const result = await this.db.run("DELETE FROM songs;");
    console.log(result);
  }

}
