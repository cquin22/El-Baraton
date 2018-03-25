import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavCategoriesComponent } from './left-nav-categories.component';

describe('LeftNavCategoriesComponent', () => {
  let component: LeftNavCategoriesComponent;
  let fixture: ComponentFixture<LeftNavCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftNavCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftNavCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
