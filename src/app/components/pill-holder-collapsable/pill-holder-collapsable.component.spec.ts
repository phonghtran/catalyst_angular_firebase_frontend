import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillHolderCollapsableComponent } from './pill-holder-collapsable.component';

describe('PillHolderCollapsableComponent', () => {
  let component: PillHolderCollapsableComponent;
  let fixture: ComponentFixture<PillHolderCollapsableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillHolderCollapsableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillHolderCollapsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
