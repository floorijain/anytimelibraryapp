import { QueryPipe } from './../../pipes/query.pipe';
import { BookcatalogueService } from './../../services/bookcatalogue.service';
import { Component, OnInit } from '@angular/core';
import { AlertService, UserService } from './../../services/index';
import { AuthenticationService } from './../../services/index';
@Component({
  selector: 'app-bookcatalogue',
  templateUrl: './bookcatalogue.component.html',
  styleUrls: ['./bookcatalogue.component.css']
})

export class BookcatalogueComponent implements OnInit {
  bookCatalogue: any[];
  options =['---Select---','Fiction', 'Technology', 'History', 'Psychological thriller', 'Non-Fiction', 'Biography','Comedy'];
  issuedBookArray: any[] = [];
  selected;
  selectedData;
  x;
  constructor(
    private bookcatalogueService: BookcatalogueService,
    private userService: UserService,
    private alertService: AlertService,
    private authenticationService: AuthenticationService,
  ) {
     this.bookCatalogue = bookcatalogueService.getBooks()['bookDetails'];
     this.selectedData = this.bookCatalogue;
   }
    bookIssued;
    wasClicked = false;
    issueBook(bookTitle, message: string){  
    this.bookIssued = this.bookcatalogueService.getIssued(bookTitle);
    this.alertService.success(message);
    return this.bookIssued;
  }
  
   onSelect(categoryid) {
     this.selectedData = this.bookCatalogue.filter(x => x.category == categoryid);
     if(categoryid === this.options[0]){
      this.selectedData = this.bookCatalogue;
     }
  }

  ngOnInit() {
    this.selected = this.options[0];
  }

}
