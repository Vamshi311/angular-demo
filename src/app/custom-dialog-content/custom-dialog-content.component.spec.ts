import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDialogContentComponent } from './custom-dialog-content.component';

describe('CustomDialogContentComponent', () => {
  let component: CustomDialogContentComponent;
  let fixture: ComponentFixture<CustomDialogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDialogContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
