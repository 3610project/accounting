import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransasctionComponent } from './add-transasction.component';

describe('AddTransasctionComponent', () => {
  let component: AddTransasctionComponent;
  let fixture: ComponentFixture<AddTransasctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTransasctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTransasctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
