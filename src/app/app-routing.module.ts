import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RFormComponent } from './r-form/r-form.component';

const routes: Routes = [
  {path:'abc',component:RFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
