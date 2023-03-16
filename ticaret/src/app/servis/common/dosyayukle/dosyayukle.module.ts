import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DosyayukleComponent } from './dosyayukle.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    DosyayukleComponent
  ],
  imports: [
    CommonModule,
    NgxFileDropModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports:[
    DosyayukleComponent
  ]
})
export class DosyayukleModule { }
