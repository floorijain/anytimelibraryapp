import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookcatalogueService } from './../services/bookcatalogue.service';
import { UniquePipe } from '../pipes/unique.pipe';
import { AlertService } from '../services/index';
import { NgModule } from '@angular/core';

@Component({
    selector: 'cart-bookcatalogue',
    templateUrl: 'mycart.component.html'
})
export class CartComponent {
    constructor(
         private service: BookcatalogueService,
         private alertService: AlertService) {
       }
       renewBook(message: string){
            this.alertService.success(message);  
    }
    returnBook (book,message: string) {
        this.service.issuebook = this.service.issuebook.filter(item => item !== book);
        this.alertService.success(message);
      }
       ngOnInit() {
      }
    

}