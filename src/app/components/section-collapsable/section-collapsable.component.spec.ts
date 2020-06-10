import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCollapsableComponent } from './section-collapsable.component';

describe('SectionCollapsableComponent', () => {
  let component: SectionCollapsableComponent;
  let fixture: ComponentFixture<SectionCollapsableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionCollapsableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCollapsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
