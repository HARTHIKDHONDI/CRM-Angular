import { TestBed } from '@angular/core/testing';

import { APImainService } from './apimain.service';

describe('APImainService', () => {
  let service: APImainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APImainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
