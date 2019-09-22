import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAccentsComponent } from './card-accents.component';

describe('CardAccentsComponent', () => {
  let component: CardAccentsComponent;
  let fixture: ComponentFixture<CardAccentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAccentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAccentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
