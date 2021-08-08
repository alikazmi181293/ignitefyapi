import { Component, ComponentFactoryResolver, EventEmitter, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PartRequestDTO } from '../../Classes/PartRequestDTO';
import { Parts } from '../../Classes/Parts';
import { PCListDTO } from '../../Classes/PCListDTO';
import { PCService } from '../../Services/pc.service';
import { AddPcManagementComponent } from './add-pc-management/add-pc-management.component';
import { DeletePcManagementComponent } from './delete-pc-management/delete-pc-management.component';
import { EditPcManagementComponent } from './edit-pc-management/edit-pc-management.component';
import { ViewPcManagementComponent } from './view-pc-management/view-pc-management.component';

@Component({
  selector: 'app-pc-management',
  templateUrl: './pc-management.component.html',
  styleUrls: ['./pc-management.component.css']
})
export class PcManagementComponent implements OnInit {

  @ViewChild('addPC', { read: ViewContainerRef }) addPC: ViewContainerRef;
  @ViewChild('editPC', { read: ViewContainerRef }) editPC: ViewContainerRef;
  @ViewChild('deletePC', { read: ViewContainerRef }) deletePC: ViewContainerRef;
  @ViewChild('viewPC', { read: ViewContainerRef }) viewPC: ViewContainerRef;
  
  PCList: PCListDTO[];
  @Output() closeEmitier = new EventEmitter();

  constructor(private rcf: ComponentFactoryResolver, private pcService: PCService, private toastr: ToastrService) {
    this.PCList = [];
  }

  ngOnInit(): void {
    this.getPCsList();
  }

  getPCsList() {
    this.pcService.GetPCList("PC", "GetAllPCList").subscribe(
      (data: any) => {
        if (data) {
          this.PCList = data;
        } else
          this.toastr.error('PCs', 'Error occured while fetching data.');
      });
  }

  async loadAddPCComponent() {
    this.addPC.clear();
    const componentRef = this.addPC.createComponent(this.rcf.resolveComponentFactory(AddPcManagementComponent))
    componentRef.instance.showAddPCPopup = true;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      this.getPCsList();
      this.addPC.clear();
    });
  }

  async loadEditPCComponent(part: PCListDTO) {
    this.editPC.clear();
    const componentRef = this.editPC.createComponent(this.rcf.resolveComponentFactory(EditPcManagementComponent))
    componentRef.instance.showEditPCPopup = true;
    componentRef.instance.selectedProcessor = part.Processor.Id;
    componentRef.instance.selectedMotherboard = part.Motherboard.Id;
    componentRef.instance.selectedRam = part.RAM.Id;
    componentRef.instance.selectedGraphicard = part.GraphicCard.Id;
    componentRef.instance.selectedCasing = part.Casing.Id;
    componentRef.instance.selectedStorage = part.Storage.Id;
    componentRef.instance.selectedPowerSupply = part.PowerSupply.Id;
    componentRef.instance.selectedCategory = part.ProductCategory.Id
    componentRef.instance.pcName = part.Name;
    componentRef.instance.pcPrice = part.Price;
    componentRef.instance.selectedPCID = part.Id;
    componentRef.instance.imageUrl1 = part?.IgnitefyPCImages?.FirstImagePath;
    componentRef.instance.imageUrl2 = part?.IgnitefyPCImages?.SecondImagePath;
    componentRef.instance.imageUrl3 = part?.IgnitefyPCImages?.ThirdImagePath;
    componentRef.instance.imageUrl4 = part?.IgnitefyPCImages?.FourthImagePath;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      this.getPCsList();
      this.editPC.clear();
    });
  }

  async loadDeletePCComponent(PCID: number) {
    this.deletePC.clear();
    const componentRef = this.deletePC.createComponent(this.rcf.resolveComponentFactory(DeletePcManagementComponent))
    componentRef.instance.showDeletePCPopup = true;
    componentRef.instance.pcID = PCID;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      this.getPCsList();
      this.deletePC.clear();
    });
  }
  async loadViewPCComponent(part: PCListDTO) {
    this.viewPC.clear();
    const componentRef = this.viewPC.createComponent(this.rcf.resolveComponentFactory(ViewPcManagementComponent))
    componentRef.instance.showViewPCPopup = true;
    componentRef.instance.viewPC = part;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if (closeEvent) {
      }
      this.viewPC.clear();
    });
  }

}
