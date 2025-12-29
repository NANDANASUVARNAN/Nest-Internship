import { Component } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  products:any[]=[]; //creating array,here any is used to acess any type of data and[] used beause we dont know the size of data

  constructor(private apiservice:Apiservice){}//creating the object of api
  ngOnInit(){//page reload
    this.apiservice.getproduct().subscribe((data:any)=>{ //apiservice le getproduct enna function call chythit data ilek kodukunu
      this.products=data;//nnit ath productilek kodukunu
    });
  }


}
