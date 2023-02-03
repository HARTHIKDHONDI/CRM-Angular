import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConComponent } from './create-con.component';

describe('CreateConComponent', () => {
  let component: CreateConComponent;
  let fixture: ComponentFixture<CreateConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateConComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
