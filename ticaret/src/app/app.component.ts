import { Component } from '@angular/core';
import { CustomerService, ToastrMessageType, ToastrPosition } from './servis/ui/customer.service';
declare var $: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ticaret';
  constructor(private toastr: CustomerService)
  {
    toastr.message("merhaba"," yunus",{
      messageType:ToastrMessageType.Info,
      position:ToastrPosition.BottomLeft
    });
  }
}
/* $(document).ready(()=>{
  alert("asd");
}) */
/* $.get("https://localhost:7116/api/products",data=>{
  console.log(data) cors kontrol
}) */