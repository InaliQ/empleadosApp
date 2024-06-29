import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employees } from '../interfaces/employee.intefaces';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private apiUrl = 'http://localhost:3000/employees'; // Ajusta la URL según corresponda

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employees[]> {
    return this.http.get<Employees[]>(this.apiUrl);
  }

  saveEmployee(employee: Employees): Observable<Employees> {
    return this.http.post<Employees>(this.apiUrl, employee);
  }

  updateEmployee(employee: Employees): Observable<Employees> {
    const url = `${this.apiUrl}/${employee.numEmpleado}`;
    return this.http.put<Employees>(url, employee);
  }

  deleteEmployee(id: string): Observable<boolean> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<boolean>(url);
  }
}
