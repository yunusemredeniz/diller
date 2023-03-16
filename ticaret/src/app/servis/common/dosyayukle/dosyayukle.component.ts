import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { NgxSpinnerService } from 'ngx-spinner';
import { Spinnertype } from 'src/app/base/base';
import { AlertifyService, Mesajtipi, Position } from '../../admin/alertify.service';
import { CustomerService, ToastrMessageType, ToastrPosition } from '../../ui/customer.service';
import { DialogService } from '../dialog.service';
import { HttpclientService } from '../httpclient.service';

@Component({
  selector: 'app-dosyayukle',
  templateUrl: './dosyayukle.component.html',
  styleUrls: ['./dosyayukle.component.css']
})
export class DosyayukleComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(
    private httpClientService: HttpclientService,
    private alertifyService: AlertifyService,
    private customToastrService: CustomerService,
    private dialogService: DialogService,
    private spinner: NgxSpinnerService) { }

  public files: NgxFileDropEntry[];

  @Input() options: Partial<FileUploadOptions>;
  public selectedFiles(files: NgxFileDropEntry[]) {
    this.files = files;
    const fileData: FormData = new FormData();
    for (const file of files) {
      (file.fileEntry as FileSystemFileEntry).file((_file: File) => {
        fileData.append(_file.name, _file, file.relativePath);
      });
    }
    this.dialogService.openDialog({
      afterClosed: () => {
        this.spinner.show(Spinnertype.ballcliprotatemultiple)
        this.httpClientService.post({
          controller: this.options.controller,
          action: this.options.action,
        querystring: this.options.queryString,
        header: new HttpHeaders({ "responseType": "blob" })
        }, fileData).subscribe({
          next: (res) => {
            
          const message: string = "Dosyalar başarıyla yüklenmiştir.";
          this.spinner.hide(Spinnertype.ballcliprotatemultiple);
          if (this.options.isAdminPage) {
            this.alertifyService.message(message,
              {
              dismissother: true,
              mesajtipi: Mesajtipi.Success,
                position: Position.topright
              })
          } else {
            this.customToastrService.message(message, "Başarılı.", {
              messageType: ToastrMessageType.Success,
              position: ToastrPosition.TopRight
            })
          }


        }/* , */
         /* (errorResponse: HttpErrorResponse) => { */

         /*  const message: string = "Dosyalar yüklenirken beklenmeyen bir hatayla karşılaşılmıştır."; */
         /*  this.spinner.hide(Spinnertype.ballcliprotatemultiple) */
         /*  if (this.options.isAdminPage) { */
         /*    this.alertifyService.message(message, */
         /*      { */
         /*      dismissother: true, */
         /*       mesajtipi: Mesajtipi.Error, */
         /*        position: Position.topright */
         /*      }) */
         /*  } else { */
         /*    this.customToastrService.message(message, "Başarsız.", { */
         /*      messageType: ToastrMessageType.Error, */
         /*      position: ToastrPosition.TopRight */
         /*    }) */
         /*  } */
        }/*  */
        );
      }
    });
}
}
export class FileUploadOptions {
  controller?: string;
  action?: string;
  queryString?: string;
  explanation?: string;
  accept?: string;
  isAdminPage?: boolean = false;
}