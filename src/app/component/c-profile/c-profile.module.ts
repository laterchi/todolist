import { NgModule } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CProfileComponent } from 'src/app/component/c-profile/c-profile.component';

@NgModule({
  declarations: [
    CProfileComponent,
  ],
  exports: [
    CProfileComponent,
  ],
  imports: [
    TimelineModule
  ]
})
export class CProfileModule {
}
