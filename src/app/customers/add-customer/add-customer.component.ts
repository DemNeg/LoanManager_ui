import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';
import { CustomerGuardGuard } from '../customer-guard.guard';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  addCustomerForm!: FormGroup
  newCustomer?:Customer;

  constructor(private fb:FormBuilder, private customerGuardGuard:CustomerGuardGuard,
    private router:Router,private customerService:CustomerService) { }

  ngOnInit(): void {
   this.customerGuardGuard.success = false;
    this.createForm();
  }

  createForm(){
   this.addCustomerForm = this.fb.group({
      firstName: ['',Validators.required],  
      lastName: [''],  
      phoneNumber: ['',Validators.required],  
      emailAddress: [''],  
      dob: [''],  
      department: [''] 
    })
  }

  onSaveCustomer(){
    this.customerService.saveCustomer(this.addCustomerForm.value).subscribe(data=>{
      this.customerGuardGuard.success = true;
      this.router.navigateByUrl('/customers/add/success');
    },err=>{
      console.log(err);
    });
    
    
  }

}
