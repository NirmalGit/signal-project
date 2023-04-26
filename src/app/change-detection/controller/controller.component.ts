import { AfterViewChecked, Component, ElementRef, NgZone } from '@angular/core';
import { toggleClass } from '../toggle-class.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements AfterViewChecked {

  constructor(private zone: NgZone, private el: ElementRef) {
  }

  profit:any;

  changeProfit(value:any){
    this.profit = value;
  }

  
  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }

}
