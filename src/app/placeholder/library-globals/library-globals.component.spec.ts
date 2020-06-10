import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryGlobalsComponent } from './library-globals.component';

describe('LibraryGlobalsComponent', () => {
  let component: LibraryGlobalsComponent;
  let fixture: ComponentFixture<LibraryGlobalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryGlobalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryGlobalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
