import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StorageService} from "../../../services/storage.service";
import {Song} from "../../../models/song.model";
import {InitializeAppService} from "../../../services/initialize.app.service";

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss']
})
export class SongDetailComponent implements OnInit {

  protected song: Song | undefined;

  constructor(private route: ActivatedRoute,
              private storageService: StorageService,
              private initializeApp: InitializeAppService) {
  }

  ngOnInit(): void {
    this.initializeApp.isAppInit ? Promise.resolve() : this.initializeApp.initializeApp().then(() => {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.storageService.getSong(id).then((song) => this.song = song);
      });
    });
  }
}
