import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedilogComponent } from './deletedilog/deletedilog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogComponent } from './dialog/dialog.component';
import { DosyayukleModule } from '../servis/common/dosyayukle/dosyayukle.module';






@NgModule({
  declarations: [
    DeletedilogComponent,
    DialogComponent,
    
    
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
   DosyayukleModule
  ]
})
export class DialogModule { }
