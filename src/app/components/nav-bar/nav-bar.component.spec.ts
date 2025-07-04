import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('Add 2 Values', () => {
    expect(component.add(2,4)).toBe(6);
  });
    it('Add 2 Values', () => {
    expect(component.subtract(10,4)).toBe(6);
  });
    it('Add 2 Values', () => {
    expect(component.multiply(2,3)).toBe(6);
  });
    it('Add 2 Values', () => {
    expect(component.divide(12,2)).toBe(6);
  });
});
