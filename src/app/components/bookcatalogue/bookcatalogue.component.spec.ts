import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookcatalogueComponent } from './bookcatalogue.component';

describe('BookcatalogueComponent', () => {
  let component: BookcatalogueComponent;
  let fixture: ComponentFixture<BookcatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookcatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookcatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
