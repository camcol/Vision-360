import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesalertespageComponent } from './mesalertespage.component';

describe('MesalertespageComponent', () => {
  let component: MesalertespageComponent;
  let fixture: ComponentFixture<MesalertespageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesalertespageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesalertespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
