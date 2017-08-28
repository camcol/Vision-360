import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesassurancespageComponent } from './mesassurancespage.component';

describe('MesassurancespageComponent', () => {
  let component: MesassurancespageComponent;
  let fixture: ComponentFixture<MesassurancespageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesassurancespageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesassurancespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
