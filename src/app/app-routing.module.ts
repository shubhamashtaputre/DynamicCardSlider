import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardSliderComponent } from './card-slider/card-slider.component';

const routes: Routes = [
  {path:'',component:CardSliderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
