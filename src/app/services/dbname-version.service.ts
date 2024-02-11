import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbnameVersionService {
  private _dbNameVersionDict: Map<string, number> = new Map();

  set(dbName: string, version: number) {
    this._dbNameVersionDict.set(dbName, version);
  }

  getVersion(dbName: string): number {
    if (this._dbNameVersionDict.has(dbName)) {
      return this._dbNameVersionDict.get(dbName)!;
    } else {
      return -1;
    }
  }

}
