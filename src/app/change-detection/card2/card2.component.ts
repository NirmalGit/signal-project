import { AfterViewChecked, Component, ElementRef, NgZone } from '@angular/core';
import { toggleClass } from '../toggle-class.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss']
})
export class Card2Component implements AfterViewChecked {

  constructor(private zone: NgZone, private el: ElementRef) {
  }

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}
