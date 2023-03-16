import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/component/dashboard/dashboard.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
 
  {
    path:"admin",component:LayoutComponent,children:[
      {path:"",component:DashboardComponent},
      {path:"customer",loadChildren:()=>import("./admin/component/customer/customer.module").then
    (module=>module.CustomerModule)},
    {path:"product2",loadChildren:()=>import("./admin/component/product/product.module").then
    (module=>module.ProductModule)},
    {path:"order",loadChildren:()=>import("./admin/component/order/order.module").then
    (module=>module.OrderModule)},
    ]
  },
  {path:"",component:HomeComponent},
  {path:"basket",loadChildren:()=>import("./ui/components/basket/basket.module").then
    (module=>module.BasketModule)},
    {path:"products",loadChildren:()=>import("./ui/components/products/products.module").then
    (module=>module.ProductsModule)},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
