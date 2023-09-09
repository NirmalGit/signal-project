import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component {

  firstName = signal('nirmal')
  lastName = signal('bage');


  fullName = computed(()=>{
    return this.firstName() + ' ' + this.lastName()
  });



  changeFirstName(fname:any){
    this.firstName.set(fname);
  }
  changeLastName(lname:any){
    this.lastName.set(lname);
  }

}
