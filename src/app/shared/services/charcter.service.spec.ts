import { TestBed } from '@angular/core/testing';

import { CharcterService } from './charcter.service';

describe('CharcterService', () => {
  let service: CharcterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharcterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
