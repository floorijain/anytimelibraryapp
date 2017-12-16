import { BookcatalogueService } from './services/bookcatalogue.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { AccordionModule } from 'ngx-accordion';
import { routes } from './app.router';
import { AlertModule } from 'ngx-bootstrap';
// used to create fake backend
import { fakeBackendProvider } from './helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { AuthGuard } from './guard/index';
import { AlertService, AuthenticationService, UserService } from './services/index';
import { LoginComponent } from './login/index';
import { AdminComponent } from './admin/index';
import { AddNewBook } from './addnewbook/index';
import { RegisterComponent } from './register/index';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationbarComponent } from './components/header/navigationbar.component';
import { AdminNavigationComponent } from './Admin/adminnavigation.component';
import { BookcatalogueComponent } from './components/bookcatalogue/bookcatalogue.component';
import { CartComponent } from './mycart/index';
import{BookDetailsComponent} from './components/bookdetails/index';
import { QueryPipe } from './pipes/query.pipe';
import { UniquePipe } from './pipes/unique.pipe';
import { AlertComponent } from './directives/index';
import { HttpClientModule } from '@angular/common/http';
import {ViewIssuedBookComponent} from './viewissuedbook/index';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationbarComponent,
    AdminNavigationComponent,
    BookcatalogueComponent,
    QueryPipe,
    UniquePipe,
    LoginComponent,
    AdminComponent,
    AddNewBook,
    RegisterComponent,
    ViewIssuedBookComponent,
    CartComponent,
    BookDetailsComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    routes,
    FormsModule
  ],

  providers: [BookcatalogueService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
