import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MescreditspageComponent } from './mescreditspage.component';

describe('MescreditspageComponent', () => {
  let component: MescreditspageComponent;
  let fixture: ComponentFixture<MescreditspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MescreditspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MescreditspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
