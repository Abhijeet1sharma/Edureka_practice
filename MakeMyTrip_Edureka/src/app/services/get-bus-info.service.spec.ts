import { TestBed } from '@angular/core/testing';

import { GetBusInfoService } from './get-bus-info.service';

describe('GetBusInfoService', () => {
  let service: GetBusInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetBusInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
