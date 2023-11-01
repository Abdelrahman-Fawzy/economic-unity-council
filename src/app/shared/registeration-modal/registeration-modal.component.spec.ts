import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterationModalComponent } from './registeration-modal.component';

describe('RegisterationModalComponent', () => {
  let component: RegisterationModalComponent;
  let fixture: ComponentFixture<RegisterationModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterationModalComponent]
    });
    fixture = TestBed.createComponent(RegisterationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
