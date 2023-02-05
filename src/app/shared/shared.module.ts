import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: SharedModule.MODULE_LIST,
  exports: SharedModule.MODULE_LIST
})
export class SharedModule {

  static readonly MODULE_LIST = [
      CommonModule,
      RouterModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
  ];

}