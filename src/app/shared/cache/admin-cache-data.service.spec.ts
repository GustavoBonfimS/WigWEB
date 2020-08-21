import { TestBed } from '@angular/core/testing';

import { AdminCacheDataService } from './admin-cache-data.service';

describe('AdminCacheDataService', () => {
  let service: AdminCacheDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminCacheDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
