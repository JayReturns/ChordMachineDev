import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import { ChordSelectorComponent } from './components/chord-selector/chord-selector.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatListModule} from "@angular/material/list";
import { MatBadgeIconDirective } from './directives/mat-badge-icon.directive';
@NgModule({
  declarations: [
    AppComponent,
    ChordSelectorComponent,
    MatBadgeIconDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    MatListModule
  ],
  providers: [],
  exports: [
    MatBadgeIconDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
