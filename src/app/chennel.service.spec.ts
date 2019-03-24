import { TestBed } from '@angular/core/testing';

import { ChennelService } from './chennel.service';

describe('ChennelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChennelService = TestBed.get(ChennelService);
    expect(service).toBeTruthy();
  });
});
