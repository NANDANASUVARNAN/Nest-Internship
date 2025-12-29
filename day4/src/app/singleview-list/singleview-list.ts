import { ChangeDetectorRef, Component } from '@angular/core';
import { Apiservice } from '../apiservice';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singleview-list',
  imports: [],
  templateUrl: './singleview-list.html',
  styleUrl: './singleview-list.css',
})
export class SingleviewList {                          
  
  singleproduct:any;      //declare an array
                           
  constructor(private route:ActivatedRoute,private apiservice:Apiservice,private cdr:ChangeDetectorRef){}
  //create constructor and initialize api service.id routing koode nadakunnath komd 2 parametervnm,
  ngOnInit(){
    //parameter mapping,id ye extract chyunu,id vech dataye extract chyunu
     const
     productid=this.route.snapshot.paramMap.get('titleid');
     if(productid){
      this.apiservice.getsingleproducts(productid).subscribe((data:any)=>{
        this.singleproduct=data;
        this.cdr.detectChanges()
      });
     }
  }
}
