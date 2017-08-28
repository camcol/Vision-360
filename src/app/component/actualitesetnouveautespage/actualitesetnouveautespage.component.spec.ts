import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualitesetnouveautespageComponent } from './actualitesetnouveautespage.component';

describe('ActualitesetnouveautespageComponent', () => {
  let component: ActualitesetnouveautespageComponent;
  let fixture: ComponentFixture<ActualitesetnouveautespageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualitesetnouveautespageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualitesetnouveautespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
