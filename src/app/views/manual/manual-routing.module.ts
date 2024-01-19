import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ManualComponent} from "./manual.component";
import {ExpertModeComponent} from "./expert-mode/expert-mode.component";
import {NormalModeComponent} from "./normal-mode/normal-mode.component";

const routes: Routes = [
  { path: '', redirectTo: '/manual/normal', pathMatch:'full'},
  { path: '', component: ManualComponent,
    children: [
      { path: 'expert', component: ExpertModeComponent },
      { path: 'normal', component: NormalModeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManualRoutingModule { }
