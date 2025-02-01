import { Routes } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { NominasComponent } from './nominas/nominas.component';

export const routes: Routes = [
    {path:'empleados', component:EmpleadosComponent},
    {path:'nominas', component:NominasComponent}
];
