import { NgxSpinnerService } from "ngx-spinner";

export class BaseComponent {

    constructor(private spiner:NgxSpinnerService) { }
  
  showspinner(spinernametpye:Spinnertype){
    this.spiner.show(spinernametpye);
  setTimeout(()=>this.hidespinner(spinernametpye),3000);
  } 
  hidespinner(spinernametpye:Spinnertype){
    this.spiner.hide(spinernametpye);
  } 
  }
  export enum Spinnertype{
    ballscalemultiple="s1",
    ballcliprotatemultiple="s2"
  }
