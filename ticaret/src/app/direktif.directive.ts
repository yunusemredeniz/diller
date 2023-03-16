import { HttpErrorResponse } from '@angular/common/http';
import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { async } from 'rxjs';
import { Spinnertype } from './base/base';
import { DeletedilogComponent, Deletestate } from './dialog/deletedilog/deletedilog.component';
import { AlertifyService, Mesajtipi, Position } from './servis/admin/alertify.service';
import { HttpclientService } from './servis/common/httpclient.service';
declare var $: any;
@Directive({
  selector: '[appDirektif]'
})
export class DirektifDirective implements OnInit {
  @Input() id: string;
  @Input() controller: string;
  @Output() callback: EventEmitter<any> = new EventEmitter();
  dialogservis: any;
  constructor(   private element: ElementRef, /* html nesnesi elde etme */
  private _renderer: Renderer2, /* html nesnesine0 müdahele etmek için */
  private httpclient:HttpclientService,
  private alertymesaj:AlertifyService,
  public dialog: MatDialog,
  private spinner:NgxSpinnerService) {
    const img = _renderer.createElement("img");
    img.setAttribute("src", "../../../../../assets/delete.png");
    img.setAttribute("style", "cursor:pointer;");
    img.width = 25;
    img.height = 25;
    _renderer.appendChild(element.nativeElement, img); /* nerden çağrılsıysa oraya resim koyar */
   }
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor=this.color;
    $(this.element.nativeElement).fadeOut(2000).fadeIn();
  }
  @HostListener("click") /* tıklanıldığında */
  onclick2(){
    alert("html nesnesi click edildi")
  }
  @Input() color:String; 
   async onclick() {

   /*  this.spinner.show(Spinnertype.ballcliprotatemultiple);
    this.dialogservis.openDialog(async()=>{ */
    this.openDialog(async()=>{
      this.spinner.show(Spinnertype.ballcliprotatemultiple);
                        const td = HTMLTableCellElement = this.element.nativeElement;
        await this.httpclient.delete({
          controller:this.controller
        },this.id).subscribe(
          {
          next: (res) => {
          $(td.parentElement).animate({
            opacity: 0,
            left: "+=50",
            height: "toogle"
          }, 700, () => {
            this.callback.emit();
            this.alertymesaj.message("ürün silindi", {
              dismissother: true,
              mesajtipi: Mesajtipi.Success,
              position: Position.bottomleft
            })
          });
         (errormessage: HttpErrorResponse) => {
     
          this.alertymesaj.message("hata oldu", {
            dismissother: true,
            mesajtipi: Mesajtipi.Error,
            position: Position.bottomleft
          });
          
        };
        this.spinner.hide(Spinnertype.ballcliprotatemultiple);
          }})
        })
}
openDialog(afterclose: any): void {
  const dialogRef = this.dialog.open(DeletedilogComponent, {
    width: '250px',
    data: Deletestate.Yes,
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result == Deletestate.Yes) {
      afterclose();
    }
  });
}
}
