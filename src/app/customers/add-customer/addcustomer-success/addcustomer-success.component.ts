import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcustomer-success',
  template: ` 
  <div class="alert alert-success col-md-6 col-sm-12 col-xl-12" role="alert">
    Customer added successfully
  </div>
  <button type="button" class="btn btn-secondary btn-sm m-2" (click)="onAddAgain()">Add New Customer</button>
  <button type="button" class="btn btn-secondary btn-sm" (click)="onDashboard()">Dashboard</button>
  `
})
export class AddcustomerSuccessComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onAddAgain(){
    this.router.navigateByUrl('/customers/add');
  }

  onDashboard(){
    this.router.navigateByUrl('/dashboard');
  }

}
