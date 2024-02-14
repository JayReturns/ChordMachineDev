import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StorageService} from "../../../services/storage.service";
import {Song} from "../../../models/song.model";
import {InitializeAppService} from "../../../services/initialize.app.service";
import {ChordService} from "../../../services/chord.service";

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss']
})
export class SongDetailComponent {

  protected song: Song | undefined;

  constructor(private route: ActivatedRoute,
              private storageService: StorageService,
              private initializeApp: InitializeAppService,
              private chordService: ChordService) {
    this.initializeApp.isAppInit ? Promise.resolve() : this.initializeApp.initializeApp().then(() => {
      console.log("1")
      this.route.params.subscribe(params => {
        console.log("2")
        const id = params['id'];
        this.storageService.getSong(id).then((song) => {
          console.log("3")
          this.song = song
          if (!song) return;
          this.chordService.sendSong(song).subscribe(() => {
            console.log('Song sent');
          });
        });
      });
    });
  }

  playSong() {
    this.chordService.playSong().subscribe(() => {
      console.log('Song played');
    });
  }
}
