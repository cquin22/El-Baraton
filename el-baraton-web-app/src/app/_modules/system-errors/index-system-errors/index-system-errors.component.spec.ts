import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSystemErrorsComponent } from './index-system-errors.component';

describe('IndexSystemErrorsComponent', () => {
  let component: IndexSystemErrorsComponent;
  let fixture: ComponentFixture<IndexSystemErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexSystemErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexSystemErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
