import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, Spinnertype } from 'src/app/base/base';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {

  constructor(spiner:NgxSpinnerService) {
    super(spiner);
   }

  ngOnInit(): void {
    this.showspinner(Spinnertype.ballcliprotatemultiple);
  }

}
