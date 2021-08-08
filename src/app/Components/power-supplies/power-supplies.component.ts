import { Component, ComponentFactoryResolver, EventEmitter, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PartRequestDTO } from '../../Classes/PartRequestDTO';
import { Parts } from '../../Classes/Parts';
import { PartService } from '../../Services/part.service';
import { AddPowerSupplyComponent } from './add-power-supply/add-power-supply.component';
import { DeletePowerSupplyComponent } from './delete-power-supply/delete-power-supply.component';
import { EditPowerSupplyComponent } from './edit-power-supply/edit-power-supply.component';
import { ViewPowerSupplyComponent } from './view-power-supply/view-power-supply.component';

@Component({
  selector: 'app-power-supplies',
  templateUrl: './power-supplies.component.html',
  styleUrls: ['./power-supplies.component.css']
})
export class PowerSuppliesComponent implements OnInit {
  
  @ViewChild('addPowerSupply', {read: ViewContainerRef}) addPowerSupply: ViewContainerRef;
  @ViewChild('editPowerSupply', {read: ViewContainerRef}) editPowerSupply: ViewContainerRef;
  @ViewChild('deletePowerSupply', {read: ViewContainerRef}) deletePowerSupply: ViewContainerRef;
  @ViewChild('viewPowerSupply', {read: ViewContainerRef}) viewPowerSupply: ViewContainerRef;
  @Output() closeEmitier = new EventEmitter();
  PowerSupplyList:Parts[];

  constructor(private rcf: ComponentFactoryResolver,private partService:PartService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getPowerSupplyList();
  }
  
  getPowerSupplyList(){
    let partRequest:PartRequestDTO=new PartRequestDTO();
    partRequest.RequestedPart="PowerSupply";
    this.partService.GetPartsList("Part","GetPartList",partRequest).subscribe(
      (data:any) => {
        if(data){
          this.PowerSupplyList = data;
        }else
        this.toastr.error('PowerSupply', 'Error occured while fetching data.');
    });
  }

  async loadAddPowerSupplyComponent() {
    this.addPowerSupply.clear();
    const componentRef = this.addPowerSupply.createComponent(this.rcf.resolveComponentFactory(AddPowerSupplyComponent))
    componentRef.instance.showAddPowerSupplyPopup=true;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
      }
      this.getPowerSupplyList();
      this.addPowerSupply.clear();
    });
  }

  async loadEditPowerSupplyComponent(PowerSupplyID:number) {
    this.editPowerSupply.clear();
    const componentRef = this.editPowerSupply.createComponent(this.rcf.resolveComponentFactory(EditPowerSupplyComponent))
    componentRef.instance.showEditPowerSupplyPopup=true;
    componentRef.instance.selectedPowerSupplyID=PowerSupplyID;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
      }
      this.getPowerSupplyList();
      this.editPowerSupply.clear();
    });
  }

  async loadDeletePowerSupplyComponent(PowerSupplyID:number) {
    this.deletePowerSupply.clear();
    const componentRef = this.deletePowerSupply.createComponent(this.rcf.resolveComponentFactory(DeletePowerSupplyComponent))
    componentRef.instance.showDeletePowerSupplyPopup=true;
    componentRef.instance.partID=PowerSupplyID;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
      }
      this.getPowerSupplyList();
      this.deletePowerSupply.clear();
    });
  }
  async loadViewPowerSupplyComponent(PowerSupply:Parts) {
    this.viewPowerSupply.clear();
    const componentRef = this.viewPowerSupply.createComponent(this.rcf.resolveComponentFactory(ViewPowerSupplyComponent))
    componentRef.instance.showViewPowerSupplyPopup=true;
    componentRef.instance.viewPart=PowerSupply;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
      }
      this.getPowerSupplyList();
      this.viewPowerSupply.clear();
    });
  }

}
