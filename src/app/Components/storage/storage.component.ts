import { Component, ComponentFactoryResolver, EventEmitter, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PartRequestDTO } from '../../Classes/PartRequestDTO';
import { Parts } from '../../Classes/Parts';
import { PartService } from '../../Services/part.service';
import { AddStorageComponent } from './add-storage/add-storage.component';
import { DeleteStorageComponent } from './delete-storage/delete-storage.component';
import { EditStorageComponent } from './edit-storage/edit-storage.component';
import { ViewStorageComponent } from './view-storage/view-storage.component';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {
  @ViewChild('addStorage', {read: ViewContainerRef}) addStorage: ViewContainerRef;
  @ViewChild('editStorage', {read: ViewContainerRef}) editStorage: ViewContainerRef;
  @ViewChild('deleteStorage', {read: ViewContainerRef}) deleteStorage: ViewContainerRef;
  @ViewChild('viewStorage', {read: ViewContainerRef}) viewStorage: ViewContainerRef;
  @Output() closeEmitier = new EventEmitter();
  StorageList:Parts[];
  
  constructor(private rcf: ComponentFactoryResolver,private partService:PartService,private toastr: ToastrService) { 
    this.StorageList=[];
  }

  ngOnInit(): void {
    this.getStorageList(); 
  }
  
  getStorageList(){
    let partRequest:PartRequestDTO=new PartRequestDTO();
    partRequest.RequestedPart="Storage";
    this.partService.GetPartsList("Part","GetPartList",partRequest).subscribe(
      (data:any) => {
        if(data){
          this.StorageList = data;
        }else
        this.toastr.error('Storage', 'Error occured while fetching data.');
    });
  }

  async loadAddStorageComponent() {
    this.addStorage.clear();
    const componentRef = this.addStorage.createComponent(this.rcf.resolveComponentFactory(AddStorageComponent))
    componentRef.instance.showAddStoragePopup=true;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
      }
      this.getStorageList();
      this.addStorage.clear();
    });
  }

  async loadEditStorageComponent(StorageID:number) {
    this.editStorage.clear();
    const componentRef = this.editStorage.createComponent(this.rcf.resolveComponentFactory(EditStorageComponent))
    componentRef.instance.showEditStoragePopup=true;
    componentRef.instance.selectedStorageID=StorageID;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
      }
      this.getStorageList();
      this.editStorage.clear();
    });
  }

  async loadDeleteStorageComponent(StorageID:number) {
    this.deleteStorage.clear();
    const componentRef = this.deleteStorage.createComponent(this.rcf.resolveComponentFactory(DeleteStorageComponent))
    componentRef.instance.showDeleteStoragePopup=true;
    componentRef.instance.partID=StorageID;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
      }
      this.getStorageList();
      this.deleteStorage.clear();
    });
  }
  async loadViewStorageComponent(part:Parts) {
    this.viewStorage.clear();
    const componentRef = this.viewStorage.createComponent(this.rcf.resolveComponentFactory(ViewStorageComponent))
    componentRef.instance.showViewStoragePopup=true;
    componentRef.instance.viewPart=part;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
      }
      this.getStorageList();
      this.viewStorage.clear();
    });
  }
}
