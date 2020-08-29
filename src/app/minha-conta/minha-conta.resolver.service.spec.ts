import { TestBed } from '@angular/core/testing';

import { MinhaContaResolverService } from './minha-conta.resolver.service';

describe('MinhaConta.ResolverService', () => {
  let service: MinhaContaResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinhaContaResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
