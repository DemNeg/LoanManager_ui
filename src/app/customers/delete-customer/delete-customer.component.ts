import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent {
  /*customerId: string = '';
  resultData: any;
  deleteCustomerDialogue:boolean=false;
  

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Hello");
    
    this.activatedRoute.params.subscribe(data =>{
      this.customerId = data.id
      if (this.customerId) {
        this.deleteCustomerPop();
      }
    })
  }

  deleteCustomerPop(){
    this.deleteCustomerDialogue= true
  }

  deleteCustomerConfirm(){
    console.log("sucess ...");
    
  }*/
}
