import { Component, OnInit } from '@angular/core';
import { BookcatalogueService } from './../../services/bookcatalogue.service';
import { AlertService, UserService } from './../../services/index';
@Component({
    selector: 'bookdetails',
    templateUrl: 'bookdetails.component.html'
})


export class BookDetailsComponent {
    bookIssued;
    feedback: string;
    constructor(private bookcatalogueService: BookcatalogueService,
        private alertService: AlertService
        ) {
             
     }
     issueBook(bookTitle, message: string){  
        this.bookIssued = this.bookcatalogueService.getIssued(bookTitle);
        this.alertService.success(message);
        return this.bookIssued;
      }
      submitBookReview(message: string){
        this.feedback ='';
        this.alertService.success(message);
      }
    ngOnInit() {

    }
}