import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AccountService } from './Services/account.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AuthInterceptor } from './Auth/auth.interceptor';
import { PartService } from './Services/part.service';
import { PCService } from './Services/pc.service';
import { UserService } from './Services/user.service';
import { CasingsModule } from './Components/casings/casings.module';
import { MotherboardsModule } from './Components/motherboards/motherboards.module';
import { PcManagementModule } from './Components/pc-management/pc-management.module';
import { PowerSuppliesModule } from './Components/power-supplies/power-supplies.module';
import { ProcessorsModule } from './Components/processors/processors.module';
import { RamModule } from './Components/ram/ram.module';
import { StorageModule } from './Components/storage/storage.module';
import { UserManagementModule } from './Components/user-management/user-management.module';
import { GraphicCardModule } from './Components/graphic-card/graphic-card.module';
import { OrdersComponent } from './Components/orders/orders.component';
import { ProductService } from '../../../Client/src/app/Services/product.service';
import { ViewOrdersComponent } from './Components/orders/view-orders/view-orders.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    OrdersComponent,
    ViewOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    CasingsModule,
    MotherboardsModule,
    PcManagementModule,
    PowerSuppliesModule,
    ProcessorsModule,
    GraphicCardModule,
    RamModule,
    StorageModule,
    UserManagementModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    AccountService,
    PartService,
    PCService,
    ProductService,
    UserService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
