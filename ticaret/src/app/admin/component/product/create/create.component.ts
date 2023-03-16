import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BaseComponent, Spinnertype } from 'src/app/base/base';
import {
  AlertifyService,
  Mesajtipi,
  Position,
} from 'src/app/servis/admin/alertify.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { HttpclientService } from 'src/app/servis/common/httpclient.service';

import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/contracts/product';
import { ProductService } from 'src/app/servis/common/model/product.service';
import { Dbproduct } from 'src/app/contracts/dbproduct';
import { saveAs } from 'file-saver';
import { FileUploadOptions } from 'src/app/servis/common/dosyayukle/dosyayukle.component';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})



export class CreateComponent extends BaseComponent implements OnInit {
  listproduct: undefined | Product[];
  productform!: FormGroup;
  dbproductmodel: Dbproduct;
  users: any;
  toastrService: any;
  filenames:string[]=[];
  @Output() createdproduct: EventEmitter<Dbproduct> = new EventEmitter();
@Output() fileuploadoptions:Partial<FileUploadOptions>={
  action: 'upload',
  controller: 'products',
  explanation: 'resimleri seçin',
  isAdminPage: true,
  accept: '.png,.jpg,.jpeg,.json',
};
  constructor(
    private alertify: AlertifyService,
    spiner: NgxSpinnerService,
    private toastr: ToastrService,
    private http: HttpclientService,
    private formbuilder: FormBuilder,
    private productservis: ProductService
  ) {
    super(spiner);
    /*  this.productservis.getproduct().subscribe((data) => {
      this.users = data;
    }); */
  }
  title='yunus';
  btnclick(){
    
  }
  onuploadfile(files:File[]):void{
  const formdata=new FormData();
  for(const file of files){
    formdata.append('files',file,file.name);
  }
  this.http.upload(formdata).subscribe({
    next: (res) => {
      console.log(res);
         },
    error: () => {
    alert('boş');
    },
    },
    )
  }
  ondownloadfile(filename:string):void{
    this.http.download(filename).subscribe({
      next: (res) => {
        console.log(res);
           },
      error: () => {
      alert('boş');
      },
      },
      )
    }
    
  ngOnInit(): void {
    this.createproductForm();
  }

  createproductForm() {
    this.productform = this.formbuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
    });
  }
  postdbproduct() {
    let productmodel = Object.assign({}, this.productform.value);
    this.productservis.dbpostproduct(productmodel).subscribe({
      next: (res) => {
        console.log(res);
        this.productform.reset();
        this.toastr.success('eklendi');
      },
      
      error: () => {
        alert('boş');
      },
    });
  }

  

  /* (product :{txtname:string,txtStock:number,txtPrice:number}) */
  /* create2(name: HTMLInputElement, stock: HTMLInputElement, price: HTMLInputElement) {
      this.showspinner(Spinnertype.ballcliprotatemultiple);
      const create_product: Product = new Product();
      create_product.name = name.value;
      create_product.stock = parseInt(stock.value);
      create_product.price = parseFloat(price.value);
      this.http.create(create_product, () => {
      this.hidespinner(Spinnertype.ballcliprotatemultiple);
      this.alertify.message("Ürün başarıyla eklenmiştir.", {
      dismissother: true,
      mesajtipi: Mesajtipi.Success,
      position: Position.bottomleft
      });
      this.createdproduct.emit(create_product);
      }, errorMessage => {
      this.alertify.message(errorMessage,
      {
      dismissother: true,
      mesajtipi: Mesajtipi.Error,
      position: Position.bottomleft
      });
      });
      } */
}
