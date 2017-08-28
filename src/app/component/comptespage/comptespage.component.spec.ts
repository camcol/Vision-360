import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptespageComponent } from './comptespage.component';

describe('ComptespageComponent', () => {
  let component: ComptespageComponent;
  let fixture: ComponentFixture<ComptespageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptespageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
