import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBookContainerComponent } from './register-book-container.component';

describe('RegisterBookContainerComponent', () => {
  let component: RegisterBookContainerComponent;
  let fixture: ComponentFixture<RegisterBookContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterBookContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBookContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
