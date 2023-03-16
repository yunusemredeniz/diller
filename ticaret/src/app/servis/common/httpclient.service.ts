import { Inject, Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders}from"@angular/common/http";
import { catchError, firstValueFrom, map, Observable, throwError } from 'rxjs';
import { Product } from 'src/app/contracts/product';
import { Responsemodel } from 'src/app/contracts/responsemodel';
@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private httpclient:HttpClient, @Inject("baseurl")private baseurl:string) {}
  upload(formdata:FormData):Observable<HttpEvent<string[]>>{
    return this.httpclient.post<string[]>(`${this.baseurl2}/file/upload`,formdata,{
      reportProgress:true,
      observe:'events'
    });
  }
 download(filename:string):Observable<HttpEvent<Blob>>{
    return this.httpclient.get(`${this.baseurl2}/file/upload/${filename}`,{
      reportProgress:true,
      observe:'events',
      responseType:'blob'
    });
  }
  private baseurl2:string=`https://localhost:4000`;
  public getall(contactid:string):Observable<Product>{
    let dataurl:string=`${this.baseurl2}/contacts`;
    return this.httpclient.get<Product>(dataurl).pipe(catchError(this.handleerror)); 
    let dataurl2:string=`${this.baseurl2}/contacts/${contactid};`;
    return this.httpclient.get<Product>(dataurl2).pipe(catchError(this.handleerror));
  }      
public handleerror(error:HttpErrorResponse)
{return throwError(error.message);

}
  private url(reguestparametreler:Partial<Reguestparametreler>):string{
   return `${reguestparametreler.baseurl ? reguestparametreler.baseurl :this.baseurl}/${reguestparametreler.
   controller}${reguestparametreler.action ? `${reguestparametreler.action}`:"" }`;
  }

   get<T>(reguestparametreler:Partial<Reguestparametreler>,id?:string ):Observable<T>{
     let url:string=""; 
     if(reguestparametreler.fullendpoint)
     url=reguestparametreler.fullendpoint;
     else
     url=`${this.url(reguestparametreler)}${id ? `/${id}` :""}${reguestparametreler.querystring? `?
     ${reguestparametreler.querystring}`:""}`;
     return this.httpclient.get<T>(url,{headers:reguestparametreler.header});
     }

   post<T>(reguestparametreler:Partial<Reguestparametreler>,body:Partial<T> ): Observable<T>{
     let url:string="";
     if(reguestparametreler.fullendpoint)
     url=reguestparametreler.fullendpoint;
     else
     url=`${this.url(reguestparametreler)}${reguestparametreler.querystring? `?
     ${reguestparametreler.querystring}`:""}`;
     return this.httpclient.post<T>(url,body,{headers:reguestparametreler.header});
      }

   put<T>(reguestparametreler:Partial<Reguestparametreler>,body:Partial<T> ):Observable<T>{
     let url:string="";
     if(reguestparametreler.fullendpoint)
     url=reguestparametreler.fullendpoint;
     else
     url=`${this.url(reguestparametreler)}${reguestparametreler.querystring? `?
     ${reguestparametreler.querystring}`:""}`;
     return this.httpclient.put<T>(url,body,{headers:reguestparametreler.header});
     }

   delete<T>(reguestparametreler:Partial<Reguestparametreler>,id:string ):Observable<T>{
     let url:string="";
     if(reguestparametreler.fullendpoint)
     url=reguestparametreler.fullendpoint;
     else
     url=`${this.url(reguestparametreler)}/${id}${reguestparametreler.querystring? `?
     ${reguestparametreler.querystring}`:""}`;
     return this.httpclient.delete<T>(url,{headers:reguestparametreler.header});
     }
    

}
export class Reguestparametreler{
 controller?:string;
 action?:string;
 querystring?:string;
 header?:HttpHeaders;
 baseurl?:string;
 fullendpoint?:string;
}
