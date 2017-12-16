import { TestBed, inject } from '@angular/core/testing';

import { BookcatalogueService } from './bookcatalogue.service';

describe('BookcatalogueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookcatalogueService]
    });
  });

  it('should be created', inject([BookcatalogueService], (service: BookcatalogueService) => {
    expect(service).toBeTruthy();
  }));
});
