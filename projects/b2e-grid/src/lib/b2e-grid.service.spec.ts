import { TestBed } from '@angular/core/testing';

import { B2eGridService } from './b2e-grid.service';

describe('B2eGridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: B2eGridService = TestBed.get(B2eGridService);
    expect(service).toBeTruthy();
  });
});
