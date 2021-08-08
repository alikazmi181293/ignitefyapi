import { AfterViewInit, Component, ComponentFactoryResolver, EventEmitter, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../Services/account.service';
import { CasingsComponent } from '../casings/casings.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { GraphicCardComponent } from '../graphic-card/graphic-card.component';
import { MotherboardsComponent } from '../motherboards/motherboards.component';
import { PcManagementComponent } from '../pc-management/pc-management.component';
import { PowerSuppliesComponent } from '../power-supplies/power-supplies.component';
import { ProcessorsComponent } from '../processors/processors.component';
import { RamComponent } from '../ram/ram.component';
import { StorageComponent } from '../storage/storage.component';
import { UserManagementComponent } from '../user-management/user-management.component';
import { OrdersComponent } from '../orders/orders.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {

  @ViewChild('dashboard', {read: ViewContainerRef}) dashboard: ViewContainerRef;
  @ViewChild('processors', {read: ViewContainerRef}) processors: ViewContainerRef;
  @ViewChild('motherborads', {read: ViewContainerRef}) motherboards: ViewContainerRef;
  @ViewChild('rams', {read: ViewContainerRef}) rams: ViewContainerRef;
  @ViewChild('storages', {read: ViewContainerRef}) storages: ViewContainerRef;
  @ViewChild('graphicCards', {read: ViewContainerRef}) graphicCards: ViewContainerRef;
  @ViewChild('powerSupplies', {read: ViewContainerRef}) powerSupplies: ViewContainerRef;
  @ViewChild('casings', { read: ViewContainerRef }) casings: ViewContainerRef;
  @ViewChild('pc', { read: ViewContainerRef }) pc: ViewContainerRef;
  @ViewChild('userManagement', { read: ViewContainerRef }) userManagement: ViewContainerRef;
  @ViewChild('Order', { read: ViewContainerRef }) Order: ViewContainerRef;

  constructor(private rcf: ComponentFactoryResolver,
    private accountService:AccountService
    ,private router: Router
    ) 
  { 
    
  }
  ngAfterViewInit(): void {
    this.loadDashboardComponent();
  }

  ngOnInit(): void {
    
  }

  redirectToHome(){
    this.router.navigate(['/home'])
  }

  async loadDashboardComponent() {
    this.CloseAllOpenedComponents();
    
    const componentRef = this.dashboard.createComponent(this.rcf.resolveComponentFactory(DashboardComponent))
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
        
      }
      
    });
  }

  async loadProcessorComponent(){
    this.CloseAllOpenedComponents();
    const componentRef = this.processors.createComponent(this.rcf.resolveComponentFactory(ProcessorsComponent))
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
        
      }
      
    });
  }

  async loadMotherboardComponent(){
    this.CloseAllOpenedComponents();
    const componentRef = this.motherboards.createComponent(this.rcf.resolveComponentFactory(MotherboardsComponent))
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
        
      }
      
    });
  }

  async loadRamComponent(){
    this.CloseAllOpenedComponents();
    const componentRef = this.rams.createComponent(this.rcf.resolveComponentFactory(RamComponent))
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
        
      }
      
    });
  }

  async loadStorageComponent(){
    this.CloseAllOpenedComponents();
    const componentRef = this.rams.createComponent(this.rcf.resolveComponentFactory(StorageComponent))
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
        
      }
      
    });
  }

  async loadGraphicCardsComponent(){
    this.CloseAllOpenedComponents();
    const componentRef = this.rams.createComponent(this.rcf.resolveComponentFactory(GraphicCardComponent))
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
        
      }
      
    });
  }

  async loadPowerSuppliesComponent(){
    this.CloseAllOpenedComponents();
    const componentRef = this.rams.createComponent(this.rcf.resolveComponentFactory(PowerSuppliesComponent))
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
        
      }
      
    });
  }

  async loadCasingsComponent(){
    this.CloseAllOpenedComponents();
    const componentRef = this.rams.createComponent(this.rcf.resolveComponentFactory(CasingsComponent))
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
        
      }
      
    });
  }

  async loadPCComponent() {
    this.CloseAllOpenedComponents();
  
    const componentRef = this.pc.createComponent(this.rcf.resolveComponentFactory(PcManagementComponent))
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if (closeEvent) {

      }

    });
  }

  async loadOrderComponent() {
    this.CloseAllOpenedComponents();
    

    const componentRef = this.Order.createComponent(this.rcf.resolveComponentFactory(OrdersComponent))
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
        
      }
      
    });
  }

  async loadUserManagementComponent() {
    this.CloseAllOpenedComponents();
    const componentRef = this.pc.createComponent(this.rcf.resolveComponentFactory(UserManagementComponent))
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if (closeEvent) {

      }
    });
  }

  logoutUser(){
    this.accountService.LogOutUser("Account","Logout").subscribe(
      (data:any) => {
          localStorage.removeItem('AdminToken');
          this.router.navigate(['/login'])
    },(error:any)=>{
      localStorage.removeItem('AdminToken');
      this.router.navigate(['/login'])
    }
    );
  }
CloseAllOpenedComponents(){
  this.rams.clear();
  this.motherboards.clear();
  this.dashboard.clear();
  this.processors.clear();
  this.storages.clear();
  this.graphicCards.clear();
  this.pc.clear();
  this.userManagement.clear();
  this.Order.clear();
}

}
