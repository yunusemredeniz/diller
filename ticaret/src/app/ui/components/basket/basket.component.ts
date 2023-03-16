import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, Spinnertype } from 'src/app/base/base';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent extends BaseComponent implements OnInit {

  constructor(spiner:NgxSpinnerService) {
    super(spiner);
   }

  ngOnInit(): void {
    this.showspinner(Spinnertype.ballcliprotatemultiple);
  }

}