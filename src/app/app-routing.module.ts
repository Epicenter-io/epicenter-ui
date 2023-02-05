import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanionsBoardComponent } from './companion/companions-board/companions-board.component';

const routes: Routes = [

  { path: 'companions', component: CompanionsBoardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
