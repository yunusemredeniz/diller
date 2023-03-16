import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DosyayukleModule } from './servis/common/dosyayukle/dosyayukle.module';
import { DirektifDirective } from './direktif.directive';




@NgModule({
  declarations: [
    AppComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    UiModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    HttpClientModule,
   ReactiveFormsModule,
   FormsModule
  ],
  providers: [{provide:"baseurl",useValue:"http://localhost:3000",multi:true}],
  /* adres:string="http://localhost:7116/api" */
  bootstrap: [AppComponent]
})
export class AppModule { }
