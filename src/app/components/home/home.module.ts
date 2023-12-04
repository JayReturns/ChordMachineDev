import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {MatButtonModule} from "@angular/material/button";
import {HomeTileComponent} from "../home-tile/home-tile.component";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    HomeComponent,
    HomeTileComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    HomeComponent,
    HomeTileComponent
  ]
})
export class HomeModule {
}
