import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadOppComponent } from './upload-opp.component';

describe('UploadOppComponent', () => {
  let component: UploadOppComponent;
  let fixture: ComponentFixture<UploadOppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadOppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadOppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
