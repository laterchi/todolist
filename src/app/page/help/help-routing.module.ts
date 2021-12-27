/*
Copyright 2021 Kingland Systems Corporation. All Rights Reserved.
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from 'src/app/page/help/help.component';


const routes: Routes = [
  {
    path: '',
    component: HelpComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule {
}
