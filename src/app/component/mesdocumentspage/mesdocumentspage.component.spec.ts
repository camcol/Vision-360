import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesdocumentspageComponent } from './mesdocumentspage.component';

describe('MesdocumentspageComponent', () => {
  let component: MesdocumentspageComponent;
  let fixture: ComponentFixture<MesdocumentspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesdocumentspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesdocumentspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
