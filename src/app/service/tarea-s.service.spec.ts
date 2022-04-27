import { TestBed } from '@angular/core/testing';

import { TareaSService } from './tarea-s.service';

describe('TareaSService', () => {
  let service: TareaSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareaSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
