import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonargentpageComponent } from './monargent.component';

describe('MonargentComponent', () => {
  let component: MonargentpageComponent;
  let fixture: ComponentFixture<MonargentpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonargentpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonargentpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
