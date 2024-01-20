import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full'},
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'manual',
    loadChildren: () => import('./views/manual/manual.module').then(m => m.ManualModule)
  },
  {
    path: 'saved',
    loadChildren: () => import('./views/saved-songs/saved-songs.module').then(m => m.SavedSongsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
