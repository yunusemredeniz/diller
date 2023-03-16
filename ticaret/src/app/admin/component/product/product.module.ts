import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ListComponent } from './liste/liste.component';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import{Ng2SearchPipeModule}from'ng2-search-filter';
import{Ng2OrderModule}from'ng2-order-pipe';
import{NgxPaginationModule}from'ngx-pagination';
import { DirektifDirective } from 'src/app/direktif.directive';
import {MatDialogModule} from '@angular/material/dialog';
import { DeletedilogComponent } from 'src/app/dialog/deletedilog/deletedilog.component';
import { BModule } from 'src/app/servis/b/b.module';
import { DosyayukleModule } from 'src/app/servis/common/dosyayukle/dosyayukle.module';


@NgModule({
  declarations: [
    ProductComponent,
    CreateComponent,
    ListComponent,
    DirektifDirective,
    DeletedilogComponent,
  
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:ProductComponent}
    ]),
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule,
    MatIconModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    MatDialogModule,
BModule,
DosyayukleModule
  ]
})
export class ProductModule { }
