import { TestBed } from '@angular/core/testing';

import { PensionerplanService } from './pensionerplan.service';

describe('PensionerplanService', () => {
  let service: PensionerplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PensionerplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
