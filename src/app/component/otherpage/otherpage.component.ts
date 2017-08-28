import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-otherpage',
  templateUrl: './otherpage.component.html',
  styleUrls: ['./otherpage.component.css'],
  animations: [
      trigger('slideInOut', [
      state('in', style({
          transform: 'translate(100%, 0)'
      })),
      state('out', style({
          transform: 'translate(0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
      ]),
  ]
})

export class OtherpageComponent {
    http: any;
    menuState:string = 'out';

    toggleMenuOpen(e) {
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
        e.stopPropagation();
    }
    toggleMenuClosed(e) {
        this.menuState = this.menuState === 'in' ? 'out' : 'out';
        e.stopPropagation();
    }
}