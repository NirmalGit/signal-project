import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component {

  firstName = 'anup';
  lastName = 'sharma';


  fullName = this.firstName + ' ' + this.lastName;


  changeFirstName(fname:any){
    this.firstName = fname;
  }
  changeLastName(lname:any){
    this.lastName = lname;
  }

}
