import { TestBed } from '@angular/core/testing';

import { AlldetailsService } from './alldetails.service';

describe('AlldetailsService', () => {
  let service: AlldetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlldetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
