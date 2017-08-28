import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MescommandespageComponent } from './mescommandespage.component';

describe('MescommandespageComponent', () => {
  let component: MescommandespageComponent;
  let fixture: ComponentFixture<MescommandespageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MescommandespageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MescommandespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
