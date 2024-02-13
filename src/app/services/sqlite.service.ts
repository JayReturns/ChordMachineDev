import { Injectable } from '@angular/core';
import {
  CapacitorSQLite,
  CapacitorSQLitePlugin, capSQLiteUpgradeOptions,
  SQLiteConnection,
  SQLiteDBConnection
} from "@capacitor-community/sqlite";
import {Capacitor} from "@capacitor/core";

@Injectable({
  providedIn: 'root'
})
export class SqliteService {

  sqliteConnection!: SQLiteConnection;
  isService: boolean = false;
  platform!: string ;
  sqlitePlugin!: CapacitorSQLitePlugin;
  native: boolean = false;

  async initializePlugin(): Promise<boolean> {
    this.platform = Capacitor.getPlatform();
    if (this.platform === 'android') this.native = true;
    this.sqlitePlugin = CapacitorSQLite;
    this.sqliteConnection = new SQLiteConnection(this.sqlitePlugin);
    this.isService = true;
    return true;
  }

  async initWebStore(): Promise<void> {
    try {
      await this.sqlitePlugin.initWebStore();
    } catch (err: any) {
      const msg = err.message ? err.message : err;
      return Promise.reject(`initWebStore: ${msg}`);
    }
  }

  async openDatabase(dbName: string, encrypted: boolean, mode: string, version: number, readonly: boolean): Promise<SQLiteDBConnection> {
    let db: SQLiteDBConnection;
    const retCC = (await this.sqliteConnection.checkConnectionsConsistency()).result;
    let isCon = (await this.sqliteConnection.isConnection(dbName, readonly)).result;
    if (retCC && isCon) {
      db = await this.sqliteConnection.retrieveConnection(dbName, readonly);
    } else {
      db = await this.sqliteConnection.createConnection(dbName, encrypted, mode, version, readonly);
    }
    await db.open();
    return db;
  }

  async retrieveConnection(dbName: string, readonly: boolean): Promise<SQLiteDBConnection> {
    return await this.sqliteConnection.retrieveConnection(dbName, readonly);
  }

  async closeConnection(dbName: string, readonly?: boolean): Promise<void> {
    await this.sqliteConnection.closeConnection(dbName, readonly || false);
  }

  async addUpgradeStatement(options: capSQLiteUpgradeOptions): Promise<void> {
    await this.sqlitePlugin.addUpgradeStatement(options);
  }

  async saveToStore(database: string): Promise<void> {
    return await this.sqliteConnection.saveToStore(database);
  }

}