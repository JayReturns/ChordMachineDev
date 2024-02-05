import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavedSongsRoutingModule } from './saved-songs-routing.module';
import { SavedSongsComponent } from './saved-songs.component';
import {BackButtonComponent} from "../../components/back-button/back-button.component";
import {MatButtonModule} from "@angular/material/button";
import {MatTreeModule} from "@angular/material/tree";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {CdkFixedSizeVirtualScroll, CdkVirtualScrollViewport} from "@angular/cdk/scrolling";


@NgModule({
  declarations: [
    SavedSongsComponent,
    BackButtonComponent
  ],
  exports: [
    BackButtonComponent
  ],
  imports: [
    CommonModule,
    SavedSongsRoutingModule,
    MatButtonModule,
    MatTreeModule,
    MatIconModule,
    MatListModule,
    CdkVirtualScrollViewport,
    CdkFixedSizeVirtualScroll
  ]
})
export class SavedSongsModule { }
