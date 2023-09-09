import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component {

  firstName = signal('Nirmal');
  lastName = signal('Bage');


  fullName = computed(() => {
    return this.firstName() + ' '+ this.lastName();
  });


  changeFirstName(fname:any){
    // this.firstName = fname;
    this.firstName.set(fname);
  }
  changeLastName(lname:any){
    //this.lastName = lname;
    this.lastName.set(lname);
  }

}
