import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, map, Observable } from 'rxjs';
import { Dbproduct } from 'src/app/contracts/dbproduct';
import { Product } from 'src/app/contracts/product';
import { Responsemodel } from 'src/app/contracts/responsemodel';
import { HttpclientService } from '../httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiroot="https://localhost:7116";
  adres:string="http://localhost:3000"
  constructor(private httpclientservis:HttpclientService, private http:HttpClient) { }

    getdbproduct(){
    return  this.http.get<any>(this.adres+"/productlist");
    }
    
    
    dbpostproduct(product:Product):Observable<Responsemodel>{
    return  this.http.post<Responsemodel>(this.apiroot+"/Products",product);
    }

    dbpost(data:Dbproduct){
      return this.http.post<Dbproduct>(this.adres+"/productlist",data)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
    create(product: Product ,successcallback?:()=>void,errorcallback?:(errormessage:string)=>void ){
      this.httpclientservis.post({
            controller:"products"  
            },product) 
               .subscribe  ({     next:(res)=>{       alert("kaydoldu");     successcallback(); 
                 },  error: () => {
                  alert('boş');
                    },
                           }); 
        }
     
  updateproduct(product:Product):Observable<Responsemodel>{
  return this.http.put<Responsemodel>(this.adres+"/productlist",product);
  }
  
   
  dbupdate(data:any,id:number){
    return this.http.put<any>(this.adres+"/productlist"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  dbdelete(id:string):Observable<Responsemodel>{
    return this.http.delete<Responsemodel>(this.adres+"/productlist"+id);
  
    /* .pipe(map((res:any)=>{
      return res;
    })) */
  }
      
     
  


async delete(id:string){
const deleteobservable:Observable<any>=this.httpclientservis.delete<any>({
controller:"products"
},id);
await firstValueFrom(deleteobservable);
   

}
/* async readImages(id: string, successCallBack?: () => void): Promise<List_Product_Image[]> {
  const getObservable: Observable<List_Product_Image[]> = this.httpClientService.get<List_Product_Image[]>({
    action: "getproductimages",
    controller: "products"
  }, id);

  const images: List_Product_Image[] = await firstValueFrom(getObservable);
  successCallBack();
  return images;
}

async deleteImage(id: string, imageId: string, successCallBack?: () => void) {
  const deleteObservable = this.httpClientService.delete({
    action: "deleteproductimage",
    controller: "products",
    queryString: `imageId=${imageId}`
  }, id)
  await firstValueFrom(deleteObservable);
  successCallBack();
}

async changeShowcaseImage(imageId: string, productId: string, successCallBack?: () => void): Promise<void> {
  const changeShowcaseImageObservable = this.httpClientService.get({
    controller: "products",
    action: "ChangeShowcaseImage",
    queryString: `imageId=${imageId}&productId=${productId}`
  });
  await firstValueFrom(changeShowcaseImageObservable);
  successCallBack();
}
} */
 

}
