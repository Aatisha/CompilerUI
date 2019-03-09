import { TestBed } from '@angular/core/testing';

import { AddLabService } from './add-lab.service';

describe('AddLabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddLabService = TestBed.get(AddLabService);
    expect(service).toBeTruthy();
  });
});
