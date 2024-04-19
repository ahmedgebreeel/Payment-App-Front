import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { SuccessComponent } from './components/success/success.component';
import { CancelComponent } from './components/cancel/cancel.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    // {path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)}
    {path:"home", component: HomeComponent},
    {path:"form", component: FormComponent},
    {path:"success", component: SuccessComponent},
    {path:"cancel", component: CancelComponent}
];
