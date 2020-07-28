import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenttochildComponent } from './parenttochild.component';

describe('ParenttochildComponent', () => {
  let component: ParenttochildComponent;
  let fixture: ComponentFixture<ParenttochildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParenttochildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParenttochildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
