import { NgModule } from '@angular/core';

import { CardComponent } from './card/card.component';
import { CompanionsBoardComponent } from './companions-board/companions-board.component';
import { SharedModule } from '../shared/shared.module';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    CardComponent,
    CompanionsBoardComponent,
  ],
  imports: [
    SharedModule,
    MatChipsModule
  ],
  exports: [CompanionsBoardComponent]
})
export class CompanionModule { }
