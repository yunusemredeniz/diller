import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BComponent } from './b.component';
import { NgxFileDropModule } from 'ngx-file-drop';



@NgModule({
  declarations: [
    BComponent
  ],
  imports: [
    CommonModule,
    NgxFileDropModule,
  ],
  exports:[
    BComponent
  ]
})
export class BModule { }
