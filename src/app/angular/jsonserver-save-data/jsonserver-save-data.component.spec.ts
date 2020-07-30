import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonserverSaveDataComponent } from './jsonserver-save-data.component';

describe('JsonserverSaveDataComponent', () => {
  let component: JsonserverSaveDataComponent;
  let fixture: ComponentFixture<JsonserverSaveDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonserverSaveDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonserverSaveDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
