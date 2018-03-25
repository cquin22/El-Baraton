import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingCartHeaderComponent } from './shoping-cart-header.component';

describe('ShopingCartHeaderComponent', () => {
  let component: ShopingCartHeaderComponent;
  let fixture: ComponentFixture<ShopingCartHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingCartHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingCartHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
