import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBigIconComponent } from './button-big-icon.component';

describe('ButtonBigIconComponent', () => {
  let component: ButtonBigIconComponent;
  let fixture: ComponentFixture<ButtonBigIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonBigIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBigIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
