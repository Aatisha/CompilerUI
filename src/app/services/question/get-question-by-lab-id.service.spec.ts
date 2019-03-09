import { TestBed } from '@angular/core/testing';

import { GetQuestionByLabIdService } from './get-question-by-lab-id.service';

describe('GetQuestionByLabIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetQuestionByLabIdService = TestBed.get(GetQuestionByLabIdService);
    expect(service).toBeTruthy();
  });
});
