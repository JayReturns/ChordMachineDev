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



@NgModule({
  declarations: [
    ManualComponent,
    NumberInputComponent
  ],
  imports: [
    CommonModule,
    ManualRoutingModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [
    ManualComponent,
  ]
})
export class ManualModule { }
