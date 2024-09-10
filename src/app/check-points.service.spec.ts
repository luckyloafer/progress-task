import { TestBed } from '@angular/core/testing';

import { CheckPointsService } from './check-points.service';

describe('CheckPointsService', () => {
  let service: CheckPointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckPointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
