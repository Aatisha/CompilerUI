import { TestBed } from '@angular/core/testing';

import { GetTeacherByDeptService } from './get-teacher-by-dept.service';

describe('GetTeacherByDeptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetTeacherByDeptService = TestBed.get(GetTeacherByDeptService);
    expect(service).toBeTruthy();
  });
});
