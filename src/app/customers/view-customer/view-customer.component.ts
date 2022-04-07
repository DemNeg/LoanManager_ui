import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  customerId: string = '';
  resultData: any;
  customerDetails:any;

  constructor(private activatedRoute: ActivatedRoute,private customerService:CustomerService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.customerId = data.id
      if (this.customerId) {
        this.getCustomer();
      }
    })
  }
  getCustomer() {
    this.customerService.viewCustomer(this.customerId).subscribe(data =>{
      this.resultData = data
      this.customerDetails = this.resultData.results;
    });
  }



}
