import { MasterHeaderComponent } from './component/master-header/master-header.component';
import { ReadMoreComponent } from './component/read-more/read-more.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MasterHeaderComponent,
    ReadMoreComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MasterHeaderComponent,
    ReadMoreComponent
  ]
})

export class SharedModule { }
