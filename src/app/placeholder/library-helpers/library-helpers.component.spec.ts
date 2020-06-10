import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryHelpersComponent } from './library-helpers.component';

describe('LibraryHelpersComponent', () => {
  let component: LibraryHelpersComponent;
  let fixture: ComponentFixture<LibraryHelpersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryHelpersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryHelpersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
