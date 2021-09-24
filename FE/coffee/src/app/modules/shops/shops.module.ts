import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopsRoutingModule } from './shops-routing.module';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [HomeComponent, TableComponent],
  imports: [
    CommonModule,
    ShopsRoutingModule
  ]
})
export class ShopsModule { }
