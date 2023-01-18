import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitiesAccComponent } from './opportunities-acc.component';

describe('OpportunitiesAccComponent', () => {
  let component: OpportunitiesAccComponent;
  let fixture: ComponentFixture<OpportunitiesAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunitiesAccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpportunitiesAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
