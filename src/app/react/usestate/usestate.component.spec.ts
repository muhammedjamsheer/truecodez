import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsestateComponent } from './usestate.component';

describe('UsestateComponent', () => {
  let component: UsestateComponent;
  let fixture: ComponentFixture<UsestateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsestateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsestateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
