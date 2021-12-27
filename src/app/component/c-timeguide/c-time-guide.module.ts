import { NgModule } from '@angular/core';
import { CTimeGuideComponent } from 'src/app/component/c-timeguide/c-time-guide.component';
import { TimelineModule } from 'primeng/timeline';

@NgModule({
  declarations: [
    CTimeGuideComponent,
  ],
  exports: [
    CTimeGuideComponent
  ],
  imports: [
    TimelineModule
  ]
})
export class CTimeGuideModule {
}
