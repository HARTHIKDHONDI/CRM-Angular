import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsAccComponent } from './leads-acc.component';

describe('LeadsAccComponent', () => {
  let component: LeadsAccComponent;
  let fixture: ComponentFixture<LeadsAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadsAccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadsAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
