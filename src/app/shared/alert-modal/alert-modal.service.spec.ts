import { TestBed } from '@angular/core/testing';

import { AlertModalService } from './alert-modal.service';

describe('AlertModalServiceService', () => {
  let service: AlertModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
