import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, Spinnertype } from 'src/app/base/base';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent extends BaseComponent implements OnInit {

  constructor(spiner:NgxSpinnerService) {
    super(spiner);
   }

  ngOnInit(): void {
    this.showspinner(Spinnertype.ballcliprotatemultiple);
  }

}
