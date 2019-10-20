import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBookForTDFComponent } from './register-book-for-tdf.component';

describe('RegisterBookForTDFComponent', () => {
  let component: RegisterBookForTDFComponent;
  let fixture: ComponentFixture<RegisterBookForTDFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterBookForTDFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBookForTDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
