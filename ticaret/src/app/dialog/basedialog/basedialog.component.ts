import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-basedialog',
  templateUrl: './basedialog.component.html',
  styleUrls: ['./basedialog.component.css']
})
export class BaseDialog<DialogComponent> {
  constructor(public dialogRef: MatDialogRef<DialogComponent>) {

  }

  close() {
    this.dialogRef.close();
  }
}