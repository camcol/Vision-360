import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesservicesmobilespageComponent } from './messervicesmobilespage.component';

describe('MesservicesmobilespageComponent', () => {
  let component: MesservicesmobilespageComponent;
  let fixture: ComponentFixture<MesservicesmobilespageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesservicesmobilespageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesservicesmobilespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
