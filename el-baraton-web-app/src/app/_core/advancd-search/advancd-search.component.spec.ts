import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancdSearchComponent } from './advancd-search.component';

describe('AdvancdSearchComponent', () => {
  let component: AdvancdSearchComponent;
  let fixture: ComponentFixture<AdvancdSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancdSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancdSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
