import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccNameComponent } from './acc-name.component';

describe('AccNameComponent', () => {
  let component: AccNameComponent;
  let fixture: ComponentFixture<AccNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
