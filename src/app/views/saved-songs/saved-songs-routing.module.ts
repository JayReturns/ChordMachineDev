import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SavedSongsComponent} from "./saved-songs.component";

const routes: Routes = [
  { path: '', component: SavedSongsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavedSongsRoutingModule { }
