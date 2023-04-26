import { AfterViewChecked, Component, ElementRef, NgZone } from '@angular/core';
import { toggleClass } from '../toggle-class.service';

@Component({
  selector: 'app-card4',
  templateUrl: './card4.component.html',
  styleUrls: ['./card4.component.scss']
})
export class Card4Component implements AfterViewChecked {

  constructor(private zone: NgZone, private el: ElementRef) {
  }

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }

}
