import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';
import { Employees } from '../../interfaces/employee.intefaces';

@Component({
  selector: 'app-forms-employees',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './forms-employees.html',
  styleUrls: ['./forms-employees.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsEmployeesComponent implements OnInit {
  employeesForms: FormGroup;

  constructor(private fb: FormBuilder, private employeesService: EmployeesService) {
    this.employeesForms = this.fb.group({
      numEmpleado: ['', Validators.required],
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      fechaNacimineto: ['', Validators.required],
      sexo: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.employeesForms.valid) {
      const newEmployee: Employees = this.employeesForms.value;
      this.employeesService.saveEmployee(newEmployee).subscribe(
        response => {
          console.log('Empleado guardado exitosamente', response);
          this.employeesForms.reset();
        },
        error => {
          console.error('Error al guardar el empleado', error);
        }
      );
    }
  }
}
