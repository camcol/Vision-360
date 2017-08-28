import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonbudgetpageComponent } from './monbudgetpage.component';

describe('MonbudgetpageComponent', () => {
  let component: MonbudgetpageComponent;
  let fixture: ComponentFixture<MonbudgetpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonbudgetpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonbudgetpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
