import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadConComponent } from './upload-con.component';

describe('UploadConComponent', () => {
  let component: UploadConComponent;
  let fixture: ComponentFixture<UploadConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadConComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
