import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityPackageComponent } from './quality-package.component';

describe('QualityPackageComponent', () => {
  let component: QualityPackageComponent;
  let fixture: ComponentFixture<QualityPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityPackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualityPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
