import { TestBed } from '@angular/core/testing';

import { AvaliacoesResolverService } from './avaliacoes.resolver.service';

describe('Avaliacoes.ResolverService', () => {
  let service: AvaliacoesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvaliacoesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
