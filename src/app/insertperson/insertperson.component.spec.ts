import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertpersonComponent } from './insertperson.component';

describe('InsertpersonComponent', () => {
  let component: InsertpersonComponent;
  let fixture: ComponentFixture<InsertpersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertpersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
