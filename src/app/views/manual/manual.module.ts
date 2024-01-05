import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ManualRoutingModule} from "./manual-routing.module";
import {ManualComponent} from "./manual.component";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ManualComponent
  ],
    imports: [
        CommonModule,
        ManualRoutingModule,
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule
    ],
  exports: [
    ManualComponent
  ]
})
export class ManualModule { }
