import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { DetailComponent } from './detail/detail.component';

import { NzGridModule } from 'ng-zorro-antd/grid';
@NgModule({
  imports: [WelcomeRoutingModule,NzGridModule],
  declarations: [WelcomeComponent, DetailComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
