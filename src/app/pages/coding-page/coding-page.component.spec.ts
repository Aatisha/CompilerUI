import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingPageComponent } from './coding-page.component';

describe('CodingPageComponent', () => {
  let component: CodingPageComponent;
  let fixture: ComponentFixture<CodingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
