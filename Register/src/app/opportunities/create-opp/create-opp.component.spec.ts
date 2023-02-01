import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOppComponent } from './create-opp.component';

describe('CreateOppComponent', () => {
  let component: CreateOppComponent;
  let fixture: ComponentFixture<CreateOppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
