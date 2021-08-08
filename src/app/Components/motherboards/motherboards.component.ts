import { Component, ComponentFactoryResolver, EventEmitter, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PartRequestDTO } from '../../Classes/PartRequestDTO';
import { Parts } from '../../Classes/Parts';
import { PartService } from '../../Services/part.service';
import { AddMotherboardComponent } from './add-motherboard/add-motherboard.component';
import { DeleteMotherboardComponent } from './delete-motherboard/delete-motherboard.component';
import { EditMotherboardComponent } from './edit-motherboard/edit-motherboard.component';
import { ViewMotherboardComponent } from './view-motherboard/view-motherboard.component';

@Component({
  selector: 'app-motherboards',
  templateUrl: './motherboards.component.html',
  styleUrls: ['./motherboards.component.css']
})
export class MotherboardsComponent implements OnInit {
  @ViewChild('addMotherboard', {read: ViewContainerRef}) addMotherboard: ViewContainerRef;
  @ViewChild('editMotherboard', {read: ViewContainerRef}) editMotherboard: ViewContainerRef;
  @ViewChild('deleteMotherboard', {read: ViewContainerRef}) deleteMotherboard: ViewContainerRef;
  @ViewChild('viewMotherboard', {read: ViewContainerRef}) viewMotherboard: ViewContainerRef;
  @Output() closeEmitier = new EventEmitter();
  motherboardList:Parts[];
  
  constructor(private rcf: ComponentFactoryResolver,private partService:PartService,private toastr: ToastrService) { 
    this.motherboardList=[];
  }

  ngOnInit(): void {
    this.getMotherboardList();
  }
 
  getMotherboardList(){
    let partRequest:PartRequestDTO=new PartRequestDTO();
    partRequest.RequestedPart="Motherboard";
    this.partService.GetPartsList("Part","GetPartList",partRequest).subscribe(
      (data:any) => {
        if(data){
          this.motherboardList = data;
        }else
        this.toastr.error('Processors', 'Error occured while fetching data.');
    });
  }

  async loadAddMotherboardComponent() {
    this.addMotherboard.clear();
    const componentRef = this.addMotherboard.createComponent(this.rcf.resolveComponentFactory(AddMotherboardComponent))
    componentRef.instance.showAddMotherboardPopup=true;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
      }
      this.getMotherboardList();
      this.addMotherboard.clear();
    });
  }

  async loadEditMotherboardComponent(processorID:number) {
    this.editMotherboard.clear();
    const componentRef = this.editMotherboard.createComponent(this.rcf.resolveComponentFactory(EditMotherboardComponent))
    componentRef.instance.showEditMotherboardPopup=true;
    componentRef.instance.selectedMotherboardID=processorID;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
      }
      this.getMotherboardList();
      this.editMotherboard.clear();
    });
  }

  async loadDeleteMotherboardComponent(processorID:number) {
    this.deleteMotherboard.clear();
    const componentRef = this.deleteMotherboard.createComponent(this.rcf.resolveComponentFactory(DeleteMotherboardComponent))
    componentRef.instance.showDeleteMotherboardPopup=true;
    componentRef.instance.partID=processorID;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
      }
      this.getMotherboardList();
      this.deleteMotherboard.clear();
    });
  }
  async loadViewMotherboardComponent(part:Parts) {
    this.viewMotherboard.clear();
    const componentRef = this.viewMotherboard.createComponent(this.rcf.resolveComponentFactory(ViewMotherboardComponent))
    componentRef.instance.showViewMotherboardPopup=true;
    componentRef.instance.viewPart=part;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
      }
      this.viewMotherboard.clear();
    });
  }
}
