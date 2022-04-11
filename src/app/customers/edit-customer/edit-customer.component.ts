import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerId!: string;
  dataResult: any;
  customerDetails: any;
  editForm!: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService,
  private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.customerId = data.id;
      this.getCustomer();
      
    })
  }

  getCustomer() {
    this.customerService.viewCustomer(this.customerId).subscribe(data => {
      this.dataResult = data;
      this.customerDetails = this.dataResult.results;
      //console.log(this.customerDetails);
      this.createEditForm();
    })
  }

  createEditForm() {
    if (this.customerDetails) {
      this.editForm = this.fb.group({
        firstName: [this.customerDetails.firstName, Validators.required],
        lastName: [this.customerDetails.lastName],
        phoneNumber: [this.customerDetails.phoneNumber, Validators.required],
        emailAddress: [this.customerDetails.emailAddress],
        dob: [this.customerDetails.dob],
        department: [this.customerDetails.department, Validators.required]
      })
    }
  }

  onUpdateCustomer() {
    this.customerService.editCustomer(this.customerId, this.editForm.value).subscribe(data => {
      this.router.navigateByUrl("/customers");
    });
  }
}
