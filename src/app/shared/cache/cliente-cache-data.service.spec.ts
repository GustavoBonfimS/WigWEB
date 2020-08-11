import { TestBed } from '@angular/core/testing';

import { ClienteCacheDataService } from './cliente-cache-data.service';

describe('ClienteCacheDataService', () => {
  let service: ClienteCacheDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteCacheDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
