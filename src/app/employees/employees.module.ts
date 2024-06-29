import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EmployeesRoutingModule } from './employees-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    HttpClientModule
  ]
})
export class EmployeesModule { }
