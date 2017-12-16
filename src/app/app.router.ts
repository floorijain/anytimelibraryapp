import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BookcatalogueComponent } from './components/bookcatalogue/bookcatalogue.component';

import { LoginComponent } from './login/index'
import { RegisterComponent } from './register/index';
import { AuthGuard } from './guard/index';
import{CartComponent} from './mycart/index';
import { AdminComponent } from './admin/index';
import{BookDetailsComponent} from './components/bookdetails/index';
import{AddNewBook} from './addnewbook/index';
import { ViewIssuedBookComponent } from './viewissuedbook/viewissuedbook.component';

export const router: Routes = [
    { path: 'login', component: LoginComponent },
    { path:'admin', component: AdminComponent},
    { path:'addnewbook', component: AddNewBook},
    { path:'viewissuedbooks', component: ViewIssuedBookComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'MyCart',component: CartComponent},
    { path: '', redirectTo: 'BookCatalogue', pathMatch: 'full' },
    { path: 'bookDetails', component: BookDetailsComponent},
    { path: 'BookCatalogue', component: BookcatalogueComponent, canActivate: [AuthGuard] },
     // otherwise redirect to home
     { path: '**', redirectTo: '' }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);