import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ManualRoutingModule} from "./manual-routing.module";
import {ManualComponent} from "./manual.component";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    ManualComponent
  ],
  imports: [
    CommonModule,
    ManualRoutingModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    ManualComponent
  ]
})
export class ManualModule { }
