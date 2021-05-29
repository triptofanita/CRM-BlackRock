import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { CustomerRoutingModule } from './';
import { CustomersComponent } from './customers.component';
import { MaterialModule } from '../../material/material.module';
import { TableComponent } from '../../shared/table/table.component';

@NgModule({
  declarations: [
    CustomersComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    // ListPostRoutingModule,
    MaterialModule,

  ]
})
export class CustomersModule { }
