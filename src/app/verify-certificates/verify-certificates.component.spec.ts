import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyCertificatesComponent } from './verify-certificates.component';

describe('VerifyCertificatesComponent', () => {
  let component: VerifyCertificatesComponent;
  let fixture: ComponentFixture<VerifyCertificatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyCertificatesComponent]
    });
    fixture = TestBed.createComponent(VerifyCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
