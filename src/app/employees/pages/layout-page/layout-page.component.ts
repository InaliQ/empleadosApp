import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EmployeesPageComponent } from '../employees-page/employees-page.component';
import { HeaderEmployeesComponent } from '../header-employees/header-employees.component';
import { FormsEmployeesComponent } from '../forms-employees/forms-employees.component';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [
    CommonModule,
    EmployeesPageComponent,
    HeaderEmployeesComponent,
    FormsEmployeesComponent
  ],
  templateUrl:'./layout-page.component.html',
  styleUrl: './layout-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutPageComponent { }
