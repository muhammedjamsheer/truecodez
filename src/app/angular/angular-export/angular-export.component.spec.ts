import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularExportComponent } from './angular-export.component';

describe('AngularExportComponent', () => {
  let component: AngularExportComponent;
  let fixture: ComponentFixture<AngularExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
