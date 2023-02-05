import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanionsCardsComponent } from './companions-cards/companions-cards.component';

const routes: Routes = [


  {
    path: 'companions',
    component: CompanionsCardsComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
