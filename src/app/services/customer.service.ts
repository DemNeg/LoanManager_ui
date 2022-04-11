import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import {environment} from '../../environments/environment.dev'
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  getCustomers(){
    let url = environment.CUSTOMER_BASE_URL+environment.CUSTOMER.GET_ALL_CUSTOMERS;
    return this.httpClient.get(url);
  }

  saveCustomer(newCustomer:Customer){
    let url = environment.CUSTOMER_BASE_URL+environment.CUSTOMER.POST_CUSTOMER;
    return this.httpClient.post(url,newCustomer);
  }

  viewCustomer(id:string){
    let url = environment.CUSTOMER_BASE_URL+environment.CUSTOMER.GET_CUSTOMER+"?id="+id;
    return this.httpClient.get(url);
    
  }

  editCustomer(id:string,customerObj:Customer){
    let url = environment.CUSTOMER_BASE_URL + environment.CUSTOMER.UPDATE_CUSTOMER+"?id="+id;
    console.log(customerObj);
    return this.httpClient.put(url, customerObj);
  }

  deleteCustomer(id:string){
    let url = environment.CUSTOMER_BASE_URL + environment.CUSTOMER.DELETE_CUSTOMER+'?id='+id;
    console.log(url);
    return this.httpClient.delete(url);
  }

  searchCustomer(keyword:string){
    
  }
}
