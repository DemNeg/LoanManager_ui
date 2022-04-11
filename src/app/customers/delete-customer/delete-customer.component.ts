import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent {
  customerId: string = '';
  resultData: any;
 
  

  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService,
  private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any) =>{
      this.customerId = data.id
      if (this.customerId) {
        this.deleteCustomer();
      }
    })
  }

  deleteCustomer() {
    confirm("are you sure to delete this customer?");
    this.customerService.deleteCustomer(this.customerId).subscribe(data => {
      this.resultData=data;
      this.router.navigateByUrl('/customers');
    }); 
  }
}
