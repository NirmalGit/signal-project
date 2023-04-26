import { AfterViewChecked, Component, ElementRef, NgZone } from '@angular/core';
import { toggleClass } from '../toggle-class.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss']
})
export class Card1Component implements AfterViewChecked {

  constructor(private zone: NgZone, private el: ElementRef) {
  }

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }

}
