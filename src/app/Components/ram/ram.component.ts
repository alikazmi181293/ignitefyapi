import { Component, ComponentFactoryResolver, EventEmitter, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PartRequestDTO } from '../../Classes/PartRequestDTO';
import { Parts } from '../../Classes/Parts';
import { PartService } from '../../Services/part.service';
import { AddRamComponent } from './add-ram/add-ram.component';
import { DeleteRamComponent } from './delete-ram/delete-ram.component';
import { EditRamComponent } from './edit-ram/edit-ram.component';
import { ViewRamComponent } from './view-ram/view-ram.component';

@Component({
  selector: 'app-ram',
  templateUrl: './ram.component.html',
  styleUrls: ['./ram.component.css']
})
export class RamComponent implements OnInit {

  @ViewChild('addRam', {read: ViewContainerRef}) addRam: ViewContainerRef;
  @ViewChild('editRam', {read: ViewContainerRef}) editRam: ViewContainerRef;
  @ViewChild('deleteRam', {read: ViewContainerRef}) deleteRam: ViewContainerRef;
  @ViewChild('viewRam', {read: ViewContainerRef}) viewRam: ViewContainerRef;
  @Output() closeEmitier = new EventEmitter();
  RAMList:Parts[];

  constructor(private rcf: ComponentFactoryResolver,private partService:PartService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getRAMList();
  }

  getRAMList(){
    let partRequest:PartRequestDTO=new PartRequestDTO();
    partRequest.RequestedPart="RAM";
    this.partService.GetPartsList("Part","GetPartList",partRequest).subscribe(
      (data:any) => {
        if(data){
          this.RAMList = data;
        }else
        this.toastr.error('RAM', 'Error occured while fetching data.');
    });
  }


  async loadAddRamComponent() {
    this.addRam.clear();
    const componentRef = this.addRam.createComponent(this.rcf.resolveComponentFactory(AddRamComponent))
    componentRef.instance.showAddRamPopup=true;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
      }
      this.getRAMList();
      this.addRam.clear();
    });
  }

  async loadEditRamComponent(RAMID:number) {
    this.editRam.clear();
    const componentRef = this.editRam.createComponent(this.rcf.resolveComponentFactory(EditRamComponent))
    componentRef.instance.showEditRamPopup=true;
    componentRef.instance.selectedRAMID=RAMID;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
      }
      this.getRAMList();
      this.editRam.clear();
    });
  }

  async loadDeleteRamComponent(RAMID:number) {
    this.deleteRam.clear();
    const componentRef = this.deleteRam.createComponent(this.rcf.resolveComponentFactory(DeleteRamComponent))
    componentRef.instance.showDeleteRamPopup=true;
    componentRef.instance.partID=RAMID;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
      }
      this.getRAMList();
      this.deleteRam.clear();
    });
  }
  async loadViewRamComponent(part:Parts) {
    this.viewRam.clear();
    const componentRef = this.viewRam.createComponent(this.rcf.resolveComponentFactory(ViewRamComponent))
    componentRef.instance.showViewRamPopup=true;
    componentRef.instance.viewPart=part;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
      }
      this.getRAMList();
      this.viewRam.clear();
    });
  }
}
