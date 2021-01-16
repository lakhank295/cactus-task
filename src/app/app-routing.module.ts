import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'assignment1',
    pathMatch: 'full'
  },
  {
    path: 'assignment1',
    loadChildren: () => import('./modules/assignment1/assignment1.module').then((m) => m.Assignment1Module),
  },
  {
    path: 'assignment2',
    loadChildren: () => import('./modules/assignment2/assignment2.module').then((m) => m.Assignment2Module),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
