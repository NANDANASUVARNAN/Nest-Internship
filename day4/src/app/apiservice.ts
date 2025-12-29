import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  constructor(private http:HttpClient) {}
  getproduct(){
    return this.http.get("https://fakestoreapi.com/products")
  }

  getsingleproducts(id:string)
  {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
  
}
