import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingdataservicesComponent } from './sharingdataservices.component';

describe('SharingdataservicesComponent', () => {
  let component: SharingdataservicesComponent;
  let fixture: ComponentFixture<SharingdataservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharingdataservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharingdataservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
