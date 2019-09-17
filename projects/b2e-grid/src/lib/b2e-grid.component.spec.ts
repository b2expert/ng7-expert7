import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2eGridComponent } from './b2e-grid.component';

describe('B2eGridComponent', () => {
  let component: B2eGridComponent;
  let fixture: ComponentFixture<B2eGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2eGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2eGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
