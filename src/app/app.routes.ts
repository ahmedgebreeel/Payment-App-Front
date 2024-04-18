import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    // {path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)}
    {path:"home", component: HomeComponent},
    {path:"form", component: FormComponent},
    {path:"checkout", component: CheckoutComponent}
];
