import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, Spinnertype } from 'src/app/base/base';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent extends BaseComponent implements OnInit {

  constructor(spiner:NgxSpinnerService) {
    super(spiner);
   }

  ngOnInit(): void {
    this.showspinner(Spinnertype.ballcliprotatemultiple);
  }

}
