import { TestBed } from '@angular/core/testing';

import { LibrosservicioService } from './librosservicio.service';

describe('LibrosservicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibrosservicioService = TestBed.get(LibrosservicioService);
    expect(service).toBeTruthy();
  });
});
