import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadaccComponent } from './uploadacc.component';

describe('UploadaccComponent', () => {
  let component: UploadaccComponent;
  let fixture: ComponentFixture<UploadaccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadaccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
