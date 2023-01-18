import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAccComponent } from './contact-acc.component';

describe('ContactAccComponent', () => {
  let component: ContactAccComponent;
  let fixture: ComponentFixture<ContactAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactAccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
