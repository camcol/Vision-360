import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesvirementspageComponent } from './mesvirementspage.component';

describe('MesvirementspageComponent', () => {
  let component: MesvirementspageComponent;
  let fixture: ComponentFixture<MesvirementspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesvirementspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesvirementspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
