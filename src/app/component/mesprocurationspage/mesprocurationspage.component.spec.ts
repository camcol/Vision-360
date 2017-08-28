import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesprocurationspageComponent } from './mesprocurationspage.component';

describe('MesprocurationspageComponent', () => {
  let component: MesprocurationspageComponent;
  let fixture: ComponentFixture<MesprocurationspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesprocurationspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesprocurationspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
