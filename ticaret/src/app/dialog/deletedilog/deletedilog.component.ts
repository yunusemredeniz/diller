import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseDialog } from '../basedialog/basedialog.component';

@Component({
  selector: 'app-deletedilog',
  templateUrl: './deletedilog.component.html',
  styleUrls: ['./deletedilog.component.css']
})
export class DeletedilogComponent extends BaseDialog<DeletedilogComponent>  {
  
  
  constructor(
    dialogRef: MatDialogRef<DeletedilogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Deletestate,
  ) {
    super(dialogRef);
  }

}
export enum Deletestate{
  Yes,
  No
}
