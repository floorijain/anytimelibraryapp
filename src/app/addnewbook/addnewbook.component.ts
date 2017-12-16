import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookcatalogueService } from '../services/bookcatalogue.service';
import { AlertService, UserService } from '../services/index';
import { HttpClient } from '@angular/common/http';
@Component({
    templateUrl: 'addnewbook.component.html'
})

export class AddNewBook {
    bookCatalogue: any[];
    constructor(
        private router: Router,
        private userService: UserService,
        private http: HttpClient,
        private service: BookcatalogueService,
        private alertService: AlertService) {
        this.bookCatalogue = service.getBooks()['bookDetails'];
    }
    ngOnInit() {
    }
    posts: any;
    id: number;
    author: any;
    description: any;
    title: any;
    category: any;
    thumbnail: any;
    addbook = [];
    isbn: any;
    searchBook(isbn, message: string) {
        this.isbn = isbn;
        this.isbn = this.isbn || "9781451648546"; // Steve Jobs book 
        this.http.get('https://www.googleapis.com/books/v1/volumes?q=isbn:' + this.isbn).subscribe(res => {
            this.posts = res;
            if (this.posts && this.posts.items) {
                for (var i = 0; i < this.posts.items.length; i++) {
                    this.id = this.posts.items[i].id;
                    if (this.posts.items[i].volumeInfo && this.posts.items[i].volumeInfo.authors) {
                        this.author = this.posts.items[i].volumeInfo.authors[0];
                    }
                    if (this.posts.items[i].volumeInfo && this.posts.items[i].volumeInfo.description) {
                        this.description = this.posts.items[i].volumeInfo.description;
                    }
                    if (this.posts.items[i].volumeInfo && this.posts.items[i].volumeInfo.title) {
                        this.title = this.posts.items[i].volumeInfo.title;
                    }
                    if (this.posts.items[i].volumeInfo && this.posts.items[i].volumeInfo.category) {
                        this.category = this.posts.items[i].volumeInfo.categories[0];
                    }
                    if (this.posts.items[i].volumeInfo && this.posts.items[i].volumeInfo.imageLinks && this.posts.items[i].volumeInfo.imageLinks.thumbnail) {
                        this.thumbnail = this.posts.items[i].volumeInfo.imageLinks.thumbnail;
                    }
                    this.newbookobject = {
                            "id": this.id,
                            "author": this.author,
                            "description": this.description,
                            "title": this.title,
                            "ISBN": this.isbn,
                            "category": this.category,
                            "thumbnailurl": this.thumbnail,
                            "location" : "Bangalore"
                    }
                }
            } else {
                this.alertService.error(message);
            }

        },
            error => {
                this.alertService.error(error);
            });
    }
    newbookobject: object;


    addBook(newbookobject,message:string){
        this.bookCatalogue.push(newbookobject);
        this.alertService.success(message);
    }
}
