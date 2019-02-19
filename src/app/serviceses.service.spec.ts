import { TestBed } from '@angular/core/testing';

import { ServicesesService } from './serviceses.service';

describe('ServicesesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicesesService = TestBed.get(ServicesesService);
    expect(service).toBeTruthy();
  });
});
