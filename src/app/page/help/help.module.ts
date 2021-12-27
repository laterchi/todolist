import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from 'src/app/page/help/help.component';
import { HelpRoutingModule } from 'src/app/page/help/help-routing.module';
import { CHelpModule } from 'src/app/component/c-help/c-help.module';



@NgModule({
  declarations: [
    HelpComponent,
  ],
  imports: [
    CommonModule,
    HelpRoutingModule,
    CHelpModule,
  ]
})
export class HelpModule { }
