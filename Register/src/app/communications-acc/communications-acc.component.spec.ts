import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationsAccComponent } from './communications-acc.component';

describe('CommunicationsAccComponent', () => {
  let component: CommunicationsAccComponent;
  let fixture: ComponentFixture<CommunicationsAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationsAccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunicationsAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
