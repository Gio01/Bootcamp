import { TestBed } from '@angular/core/testing';

import { DatetimeService } from './datetime.service';

describe('DatetimeService', () => {
  let service: DatetimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatetimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
/**
 * All we do here is test to see if this service gets created or not!
 * if it is then we are good to go! 
 */