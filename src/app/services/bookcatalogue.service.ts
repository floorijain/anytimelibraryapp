import { Injectable } from '@angular/core';
@Injectable()
export class BookcatalogueService {

  constructor() { }
  bookcataloguejson: object = {
    "bookDetails": [
      {
        "id": 1,
        "author": "Dr. Seuss",
        "description": "The Cat in the Hat is a children's book written and illustrated by Theodor Geisel under the pen name Dr. Seuss and first published in 1957...",
        "title": "CAT IN THE HAT",
        "ISBN": "Serial No 1",
        "category": "Fiction",
        "thumbnailurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORaJU4QZbQqY8XQ6Z95C34L4QOdSBrAvtRYX-FPpB60W0cM6J",
        "location" : "Bangalore"
      },
      {
        "id": 2,
        "author": "Philip K.",
        "description": "Do Androids Dream of Electric Sheep? in some later printings) is a science fiction novel by American writer Philip K. Dick, first published in 1968...",
        "title": "DO ANDROIDS DREAM OF ELECTRIC SHEEP?",
        "ISBN": "Serial No 2",
        "category": "Technology",
        "thumbnailurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQqjn_-5f-G9Q3b6RhmBRwz5puZEaHiqAFfIfp5J2lh5lPHZ-8",
        "location" : "Bangalore"
      },
      {
        "id": 3,
        "author": "Douglas Adams",
        "description": "The Hitchhiker's Guide to the Galaxy is a comedy science fiction series created by Douglas Adams. Originally a radio comedy broadcast on BBC Radio 4 in 1978 ...",
        "title": "THE HITCHHIKER'S GUIDE TO THE GALAXY",
        "ISBN": "Serial No 3",
        "category": "Fiction",
        "thumbnailurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShWteJDnOJ3CJ0UcFMg1ZYUPu33W2MCsO9dzIhhEjZbOvq744usA",
        "location" : "Bangalore"
      },
      {
        "id": 4,
        "author": "Erich Maria Remarque",
        "description": "All Quiet on the Western Front is a novel by Erich Maria Remarque, a German veteran of World War I...",
        "title": "ALL QUIET ON THE WESTERN FRONT",
        "ISBN": "Serial No 4",
        "category": "History",
        "thumbnailurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPZYiv_S1nue9lKorbQWLz3_2FyDGsN4i36gb0GnbyH1mBMJfy",
        "location" : "Bangalore"
      },
      {
        "id": 5,
        "author": "Stieg Larsson",
        "description": "The Girl with the Dragon Tattoo is a psychological thriller novel by the late Swedish author and journalist Stieg Larsson (1954–2004), which was published ..",
        "title": "THE GIRL WITH THE DRAGON TATOO",
        "ISBN": "Serial No 5",
        "category": "Psychological thriller",
        "thumbnailurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwCjUUpUT0YNcXC6ooTaTBxhSdcqIQQ-Ci8hYOUOWqnx49F7AxtQ",
        "location" : "Bangalore"
      },
      {
        "id": 6,
        "author": "M.L. Stedman",
        "description": "The Light Between Oceans is a 2012 Australian historical fiction novel by M. L. Stedman, her debut novel, published by Random House Australia on 20 March ...",
        "title": "LIGHT BETWEEN OCEANS",
        "ISBN": "Serial No 6",
        "category": "Fiction",
        "thumbnailurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNr8_QX6FkB8yGlfmd3hJbfGU9Oj9guaDxbi6BTI86FVRiX1nffQ",
        "location" : "Bangalore"
      },
      {
        "id": 7,
        "author": "Richard Louv",
        "description": "Last Child in the Woods: Saving Our Children From Nature-Deficit Disorder is a 2005 book by author Richard Louv that documents decreased exposure of ...",
        "title": "LAST CHILD IN THE WOODS",
        "ISBN": "Serial No 7",
        "category": "Non-Fiction",
        "thumbnailurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0tsVBHmRQb2YmFMrqW6IOQnAigll63aZnBXDm21aDKDL7YW1IXg",
        "location" : "Bangalore"
      },
      {
        "id": 8,
        "author": "Nathaniel Philbrick",
        "description": "A surprising account of the middle years of the American Revolution, and the tragic relationship between George Washington and Benedict Arnold. ..",
        "title": "VALIANT AMBITION",
        "ISBN": "Serial No 8",
        "category": "Biography",
        "thumbnailurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoZrwwcKdn3GukGJZmpOnQRudKhmnQt2-TxMiW74PP0-1V4oKc",
        "location" : "Bangalore"
      },
      {
        "id": 9,
        "author": "George R. R. Martin",
        "description": "The Book of Mormon is a musical comedy about two young Mormon missionaries who travel to Africa to preach the Mormon religion. First staged in 2011, the ...",
        "title": "THE BOOK OF MORMON",
        "ISBN": "Serial No 9",
        "category": "Comedy",
        "thumbnailurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXUPjYHhyl0HJqz8NHm9Tw7mTkm2aPQi1Mk_I1xDayG9IdjVsC",
        "location" : "Bangalore"
      },
      {
        "id": 10,
        "author": "Mercer Mayer",
        "description": "All the many things a young child can do independently are demonstrated, (tying shoes, riding bike, kicking ball), but there is one thing one cannot do alone..",
        "title": "ALL BY MYSELF",
        "ISBN": "Serial No 10",
        "category": "Fiction",
        "thumbnailurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQFOKZapx9lR2EH3xAkc9Oh1S3SPT_vsJ_28zp8TGIeItlXvRj",
        "location" : "Bangalore"
      }
    ]
  }
  getBooks() {
    return this.bookcataloguejson;
  }
  data ;
  viewbook;
  details;
  issuebook=[];
  getIssued(title) {
    this.data = this.getBooks()['bookDetails'];
    for(var i=0;i<this.data.length;i++){
      if(this.data[i].title===title){
        this.issuebook.push(this.data[i]);
      }
      this.viewbook = this.issuebook;
    }
    return this.issuebook;
  }
  bookdata;
  getBookDetails(bookId){
    this.details = this.getBooks()['bookDetails'];
    for(var i=0;i<this.details.length;i++){
      if(this.details[i].id===bookId){
        this.bookdata = this.details[i]
        return this.bookdata;
      }
    }
  }

  getIssuedByUser(book){
    this.viewbook = this.viewbook.filter(item => item == book);
    console.log("HIIIIIIIIIIII", this.viewbook);
  }
 }
