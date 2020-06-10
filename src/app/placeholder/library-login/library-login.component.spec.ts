import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryLoginComponent } from './library-login.component';

describe('LibraryLoginComponent', () => {
  let component: LibraryLoginComponent;
  let fixture: ComponentFixture<LibraryLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
