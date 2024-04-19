import { Routes } from '@angular/router';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:"home", loadComponent: ()=> import('./components/home/home.component').then(c=>c.HomeComponent)},
    {path:"form", loadComponent: ()=> import('./components/form/form.component').then(c=>c.FormComponent)},
    {path:"success", loadComponent: ()=> import('./components/success/success.component').then(c=>c.SuccessComponent)},
    {path:"cancel", loadComponent: ()=> import('./components/cancel/cancel.component').then(c=>c.CancelComponent)}
];
