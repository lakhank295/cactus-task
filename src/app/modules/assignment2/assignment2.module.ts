import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Assignment2Component } from './assignment2/assignment2.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

const routes: Routes = [
  {
    path: '',
    component: Assignment2Component,
  },
];

@NgModule({
  declarations: [
    Assignment2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgxJsonViewerModule
  ]
})

export class Assignment2Module { }
