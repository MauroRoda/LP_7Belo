import { TestBed } from '@angular/core/testing';

import { TestemunhoService } from './testemunho.service';

describe('TestemunhoService', () => {
  let service: TestemunhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestemunhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
