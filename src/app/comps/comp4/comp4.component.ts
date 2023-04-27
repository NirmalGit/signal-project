import { Component, effect, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.scss']
})
export class Comp4Component {

  constructor(private fb: FormBuilder) { }
  employeeForm!: FormGroup;
  
  employees = signal([
    { name: 'John Smith', position: 'Manager', department: 'Sales' },
    { name: 'Jane Doe', position: 'Engineer', department: 'Engineering' },
    { name: 'Bob Johnson', position: 'Marketing Specialist', department: 'Marketing' },
    { name: 'Sarah Lee', position: 'HR Manager', department: 'Human Resources' },
    { name: 'Michael Brown', position: 'IT Support', department: 'IT' }
  ]);

  empAdding= signal<boolean>(false);

  toggleAddBlock(){
    this.empAdding.update(status => !status);
  }
  
  
  ngOnInit() {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      department: ['', Validators.required]
    });
  }

  onSubmit() {
    this.employees.mutate(emplist=>{
      emplist.push(this.employeeForm.value);
    });
  }

  product = signal({
    name: 'Laptop',
    category: 'Electronics',
    price: 2000,
    rating: 4.5,
  });

  changeProductName(){
    this.product.mutate(product => product.name = 'Mobile');
  }
  
  sideEffect = effect(()=> this.saveProductDatatoAPI(this.product()))

  saveProductDatatoAPI(product:any){
    console.log('Call Api with product Data: '+ JSON.stringify(product));
  }


}
