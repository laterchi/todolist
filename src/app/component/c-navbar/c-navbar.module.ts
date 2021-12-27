import { NgModule } from '@angular/core';
import { CNavbarComponent } from 'src/app/component/c-navbar/c-navbar.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    CNavbarComponent,
  ],
  exports: [
    CNavbarComponent,
  ],
  imports: [
    ButtonModule
  ]
})
export class CNavbarModule {
}
