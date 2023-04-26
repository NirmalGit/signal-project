import { AfterViewChecked, Component, ElementRef, NgZone, OnInit, signal } from '@angular/core';
import { toggleClass } from '../toggle-class.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card3',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello</h1>
  `
})
export class Card3Component implements AfterViewChecked, OnInit {

  constructor(private zone: NgZone, private el: ElementRef) {
  }



  profit:any='sdf';

  quantity = signal(1);

  changeProfit(value:any){
    // this.profit = value;
  }

  ngOnInit(): void {
    
    setTimeout(() => {
      this.quantity.set(2)
    }, 5000);
  }
  
  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }


}
