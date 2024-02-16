import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Song} from "../../../models/song.model";
import {ChordService} from "../../../services/chord.service";
import {DummyService} from "../../../services/dummy.service";

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss']
})
export class SongDetailComponent {

  protected song: Song | undefined;

  constructor(private route: ActivatedRoute,
              private chordService: ChordService,
              private dummyService: DummyService) {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.dummyService.getSong(id).then((song) => {
          this.song = song
          if (!song) return;
          this.chordService.sendSong(song).subscribe(() => {
            console.log('Song sent');
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
