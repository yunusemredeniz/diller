import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, Spinnertype } from 'src/app/base/base';
import {
  AlertifyService,
  Mesajtipi,
  Position,
} from 'src/app/servis/admin/alertify.service';
import {  FormGroup,
  FormControl,
  Validators,
  FormBuilder,} from '@angular/forms';
import { ProductService } from 'src/app/servis/common/model/product.service';
import { Dbproduct } from 'src/app/contracts/dbproduct';

declare var $: any;
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListComponent extends BaseComponent implements OnInit {
  product: Dbproduct;
  productform!: FormGroup;
  dbproductmodel!: any;
  dbproduct: Dbproduct[] = [];
  name:  any;
  p: number = 1;
  reserve: boolean;
  displayedColumns: string[] = ['name', 'stock', 'price', 'edit', 'delete'];
  dataSource: MatTableDataSource<Dbproduct> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  

  constructor(
    spinner: NgxSpinnerService,
    private alertifyService: AlertifyService,
    private productsservis: ProductService,
  ) /*  private dialogService: DialogService */ {
    super(spinner);
  }
  async ngOnInit() {
   
    await this.getalldbproduct();
    
  }
  
  getalldbproduct() {
    this.productsservis.getdbproduct().subscribe({
      next: (res) => {
        this.dbproductmodel = res;
      },
    });
  }
 
    /* addProductImages(id: string) {
    this.dialogService.openDialog({
      componentType: SelectProductImageDialogComponent,
      data: id,
      options: {
        width: "1400px"
      }
    });
  } */

  async pageChanged() {
    await this.getalldbproduct();
  }

 

  key: string = 'name';
  reverse: boolean = false;
  sort2(key) {
    this.key = key;
    this.reserve = !this.reserve;
  }
}
/* export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
 */