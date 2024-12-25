import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavuComponent } from './navu.component';

describe('NavuComponent', () => {
  let component: NavuComponent;
  let fixture: ComponentFixture<NavuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavuComponent]
    });
    fixture = TestBed.createComponent(NavuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
