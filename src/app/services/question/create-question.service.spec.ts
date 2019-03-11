import { TestBed } from '@angular/core/testing';

import { CreateQuestionService } from './create-question.service';

describe('CreateQuestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateQuestionService = TestBed.get(CreateQuestionService);
    expect(service).toBeTruthy();
  });
});
