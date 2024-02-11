export class SongUpgradeStatement {
  songUpgrades =[
    {
      toVersion: 1,
      statements: [
        `CREATE TABLE IF NOT EXISTS songs (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          artist TEXT NOT NULL,
          bpm INTEGER NOT NULL,
          chords JSON NOT NULL
        );`
      ]
    }
  ]

}
