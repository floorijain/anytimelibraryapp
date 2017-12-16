import { Component, OnInit } from '@angular/core';
import { BookcatalogueService } from '../../services/bookcatalogue.service';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
  //providers:[BookcatalogueService]
})
export class NavigationbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
