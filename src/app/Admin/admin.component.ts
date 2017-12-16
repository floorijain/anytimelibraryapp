import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../services/index';
import { BookcatalogueService } from '../services/bookcatalogue.service';

@Component({
    templateUrl: 'admin.component.html'
})

export class AdminComponent {
    model: any = {};
    loading = false;
    returnUrl: string;
    bookCatalogue:any [];
    selectedAll: any;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service:BookcatalogueService,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {
            this.bookCatalogue = service.getBooks()['bookDetails'];
         }
    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    addNewBook () {
        this.router.navigate(['/addnewbook']);
    }

    deleteBook (message:string) {
        if(this.bookdelete){
            this.bookCatalogue = this.bookCatalogue.filter(item => item !== this.bookdelete);
        }else if(this.allbookdelete) { 
            this.bookCatalogue = this.bookCatalogue.filter(item => item == this.allbookdelete);
        }
        for(var j=0;j<this.multipleBook.length;j++){
                if(this.multipleBook){
                this.bookCatalogue = this.bookCatalogue.filter(item => item !== this.multipleBook[j]);
            }
        }
        
        this.alertService.success(message);
    }

    viewIssuedBooks(bookCatalogue){
        this.service.getIssuedByUser(bookCatalogue);
        this.router.navigate(['/viewissuedbooks']);
    }

    selectAll(bookCatalogue) {
        this.allbookdelete = bookCatalogue;
        for (var i = 0; i < this.bookCatalogue.length; i++) {
          this.bookCatalogue[i].selected = this.selectedAll;
        }
      }
      bookdelete;
      allbookdelete;
      multipleBook = [];
      checkIfAllSelected(book) {
          this.bookdelete = book;
          this.multipleBook.push(this.bookdelete);
          this.selectedAll = this.bookCatalogue.every(function(item:any) {
              return item.selected == true;
          })
      }

}
