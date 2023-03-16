import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, Spinnertype } from 'src/app/base/base';
import { Dbproduct } from 'src/app/contracts/dbproduct';
import { HttpclientService } from 'src/app/servis/common/httpclient.service';
import { ListComponent } from './liste/liste.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends BaseComponent implements OnInit {

  constructor(spiner:NgxSpinnerService,
    private httpclient:HttpclientService) {
    super(spiner);
   }

  ngOnInit(): void {
   /*  this.showspinner(Spinnertype.ballcliprotatemultiple);
    this.httpclient.get({
      controller:"products"
    }).subscribe(data=>console.log(data));
    this.httpclient.post({
      controller:"products"
    },{
      name:"kalem",
      stock:150,
      price:15
    }).subscribe();
    this.httpclient.get({
      fullendpoint:"https://jsonplaceholder.typicode.com/posts"
    }).subscribe(data=>console.log(data)); */
    }
  

 


 /*  suankicategory(product:Product){
console.log(product.name)
  }
  
  suankicategoryclass(product :Product){
    if(product==this.suanki){
      return "list-group-ltem active"
    }else{
return "list-group-ltem"
    }
  } */
  @ViewChild(ListComponent) listcomponent:ListComponent;
  createdproduct(createdproduct:Dbproduct){
this.listcomponent.getalldbproduct();
  }
}