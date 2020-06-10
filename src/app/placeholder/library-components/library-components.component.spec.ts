import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryComponentsComponent } from './library-components.component';

describe('LibraryComponentsComponent', () => {
  let component: LibraryComponentsComponent;
  let fixture: ComponentFixture<LibraryComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
