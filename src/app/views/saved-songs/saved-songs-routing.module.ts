import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SavedSongsComponent} from "./saved-songs.component";
import {SongDetailComponent} from "./song-detail/song-detail.component";

const routes: Routes = [
  { path: '', component: SavedSongsComponent },
  { path: 'song/:id', component: SongDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavedSongsRoutingModule {
}
