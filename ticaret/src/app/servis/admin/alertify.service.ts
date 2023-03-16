import { Injectable } from '@angular/core';
declare var alertify: any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
 /*  message(message: string,mesajtipi:Mesajtipi ,position:Position ,delay:number=5,dismissother:boolean=false){ */
 message(message: string, options:Partial<Alertifyoptions>){
  alertify.set('notifier','position',options.position);
  alertify.set('notifier','delay',options.delay);
  /* alertify[mesajtipi](message); */
  const msj= alertify[options.mesajtipi](message);
  if  (options.dismissother)
  alertify.message("silindi",{
    mesajtipi:Mesajtipi.Success,
    delay:5,
    position:Position.bottomleft
  })
}
dismiss(){
  alertify.dismissAll();

}
}
export class Alertifyoptions{
  mesajtipi:Mesajtipi=Mesajtipi.Warning;
  position:Position=Position.bottomleft;
  delay:number=5;
  dismissother:boolean=false;
}
export enum Mesajtipi{
  Error="error",
  Message="message",
  Notify="notify",
  Success="success",
  Warning="warning"
}
export enum Position{
  TopCenter="top-center",
  topright="top-right",
  topleft="top-left",
  bottomcenter="bottom-center",
  bottomright="bottom-right",
  bottomleft="bottom-left"
}
