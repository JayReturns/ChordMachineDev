import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ManualRoutingModule} from "./manual-routing.module";
import {ManualComponent} from "./manual.component";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {NumberInputComponent} from "../../components/number-input/number-input.component";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTabsModule} from "@angular/material/tabs";
import {ExpertModeComponent} from "./expert-mode/expert-mode.component";
import { NormalModeComponent } from './normal-mode/normal-mode.component';



@NgModule({
  declarations: [
    ManualComponent,
    NumberInputComponent,
    ExpertModeComponent,
    NormalModeComponent
  ],
  imports: [
    CommonModule,
    ManualRoutingModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule
  ],
  exports: [
    ManualComponent,
  ]
})
export class ManualModule { }
