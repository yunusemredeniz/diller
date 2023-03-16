import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, Spinnertype } from 'src/app/base/base';
import { AlertifyService, Mesajtipi, Position } from 'src/app/servis/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BaseComponent implements OnInit {
  alerty: any;

  constructor(spiner:NgxSpinnerService) {
    super(spiner);
   }

  ngOnInit(): void {
    this.showspinner(Spinnertype.ballcliprotatemultiple);
  }


m(){
  this.alerty.message("merhaba",{
    mesajtipi:Mesajtipi.Success,
    delay:5,
    position:Position.bottomleft
  })
}
d(){
  this.alerty.dismiss();
}
}
