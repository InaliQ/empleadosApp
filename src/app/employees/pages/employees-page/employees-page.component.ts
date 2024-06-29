import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeesService } from '../../services/employees.service';
import { Employees } from '../../interfaces/employee.intefaces';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-employees-page',
  standalone: true,
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.css'],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class EmployeesPageComponent implements OnInit {
  public employees: Employees[] = [];
  public employeesForms = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    correo: new FormControl(''),
    telefono: new FormControl(''),
    fechaNacimineto: new FormControl(''),
    sexo: new FormControl(''),
  });
  

  constructor(
    private employeesService: EmployeesService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeesService.getEmployees().subscribe((employees) => {
      this.employees = employees;
    });
  }

  selectEmployee(employee: Employees): void {
    this.employeesForms.patchValue({
      id: employee.numEmpleado,
      name: employee.nombre,
      correo: employee.correo,
      telefono: employee.telefono,
      fechaNacimineto: employee.fechaNacimineto,
      sexo: employee.sexo,
      
    });
  }

  onDeleteEmployee(employee:Employees): void {

    const employeeId = employee.id;
    console.log(employeeId)
    if (!employeeId) {
      this.snackBar.open('Employee id is required', 'Close', { duration: 3000 });
      return;
    }

    this.employeesService.deleteEmployee(employeeId).subscribe(
      () => {
        this.snackBar.open('Employee deleted successfully', 'Close', { duration: 3000 });
        this.resetForm();
        this.loadEmployees();
      },
      (error) => {
        this.snackBar.open(`Error deleting employee: ${error.message}`, 'Close', { duration: 3000 });
      }
    );
  }

  resetForm(): void {
    this.employeesForms.reset();
  }
}
