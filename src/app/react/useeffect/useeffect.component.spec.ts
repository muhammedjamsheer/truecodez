import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseeffectComponent } from './useeffect.component';

describe('UseeffectComponent', () => {
  let component: UseeffectComponent;
  let fixture: ComponentFixture<UseeffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseeffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseeffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
