import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header-employees',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  templateUrl: './header-employees.html',
  styleUrl: './header-employees.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderEmployeesComponent { }
