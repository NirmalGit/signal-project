import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component {

  qty = signal(5);


   



  onDecreaseQty(){
    this.qty.update(qty => qty-1);
  }

  onIncreaseQty(){
    this.qty.update(qty => qty+1);
  }

}
