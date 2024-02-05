import {Injectable, signal, WritableSignal} from '@angular/core';
import {CapacitorSQLite, SQLiteConnection, SQLiteDBConnection} from "@capacitor-community/sqlite";

const DB_USERS = 'myuserdB';

export interface User {
  id: number;
  name: string;
  active: number;
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;
  private users: WritableSignal<User[]> = signal<User[]>([])

  constructor() {
  }

  getUsers() {
    return this.users;
  }

  async initializeWebStore() {
    try {
      await this.sqlite.initWebStore();
    } catch (err: any) {
      const msg = err.message ? err.message : err;
      Promise.reject(`initializeWebStore: ${msg}`);
    }
  }

  async initializePlugin() {
    this.initializeWebStore();
    this.db = await this.sqlite.createConnection(
      DB_USERS,
      false,
      "no-encryption",
      1,
      false
    )

    await this.db.open();

    const schema = `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      active INTEGER DEFAULT 1
    );`;

    await this.db.execute(schema);
    this.loadUsers();
    return true;
  }


   // CRUD
  async loadUsers() {
    const users = await this.db.query("SELECT * FROM users;");
    this.users.set(users.values || []);
  }

  async addUser(name: string) {
    const query = `INSERT INTO users (name) VALUES ('${name}');`;
    const result = await this.db.query(query);

    this.loadUsers();

    return result;
  }

  async updateUserById(id: number, active: number) {
    const query = `UPDATE users SET active = ${active} WHERE id = ${id};`;
    const result = await this.db.query(query);

    this.loadUsers();

    return result;
  }

  async deleteUserById(id: number) {
    const query = `DELETE FROM users WHERE id = ${id};`;
    const result = await this.db.query(query);

    this.loadUsers();

    return result;
  }

}
