import { Routes } from '@angular/router';



export const routes: Routes = [
    {
        path:'employees',
        loadChildren:() => import('./employees/employees.module').then(e => e.EmployeesModule)
    },
    {
        path:'',
        redirectTo:'employees',
        pathMatch:'full'
    }
];
