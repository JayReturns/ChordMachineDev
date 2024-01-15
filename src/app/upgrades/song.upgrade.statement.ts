
export class SongUpgradeStatement {
  songUpgrades = [
    {
      toVersion: 1,
      statements: [
        `CREATE TABLE IF NOT EXISTS songs (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          bpm INTEGER NOT NULL,
          chords JSON NOT NULL
          );`,
      ]
    }
  ]
}
