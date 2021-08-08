import { Component, ComponentFactoryResolver, EventEmitter, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PartRequestDTO } from '../../Classes/PartRequestDTO';
import { Parts } from '../../Classes/Parts';
import { PartService } from '../../Services/part.service';
import { AddCasingComponent } from './add-casing/add-casing.component';
import { DeleteCasingComponent } from './delete-casing/delete-casing.component';
import { EditCasingComponent } from './edit-casing/edit-casing.component';
import { ViewCasingComponent } from './view-casing/view-casing.component';

@Component({
  selector: 'app-casings',
  templateUrl: './casings.component.html',
  styleUrls: ['./casings.component.css']
})
export class CasingsComponent implements OnInit {
  
  @ViewChild('addCasing', {read: ViewContainerRef}) addCasing: ViewContainerRef;
  @ViewChild('editCasing', {read: ViewContainerRef}) editCasing: ViewContainerRef;
  @ViewChild('deleteCasing', {read: ViewContainerRef}) deleteCasing: ViewContainerRef;
  @ViewChild('viewCasing', { read: ViewContainerRef }) viewCasing: ViewContainerRef;
  CasingsList: Parts[];
  
  @Output() closeEmitier = new EventEmitter();
  
  constructor(private rcf: ComponentFactoryResolver, private partService: PartService, private toastr: ToastrService) {
    this.CasingsList = [];
  }

  ngOnInit(): void {
    this.getCasingsList();
  }

  getCasingsList() {
    let partRequest: PartRequestDTO = new PartRequestDTO();
    partRequest.RequestedPart = "Casing";
    this.partService.GetPartsList("Part", "GetPartList", partRequest).subscribe(
      (data: any) => {
        if (data) {
          this.CasingsList = data;
        } else
          this.toastr.error('Casings', 'Error occured while fetching data.');
      });
  }

  async loadAddCasingComponent() {
    this.addCasing.clear();
    const componentRef = this.addCasing.createComponent(this.rcf.resolveComponentFactory(AddCasingComponent))
    componentRef.instance.showAddCasingPopup=true;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
      }
      this.getCasingsList();
      this.addCasing.clear();
    });
  }

  async loadEditCasingComponent(CasingID: number) {
    this.editCasing.clear();
    const componentRef = this.editCasing.createComponent(this.rcf.resolveComponentFactory(EditCasingComponent))
    componentRef.instance.showEditCasingPopup = true;
    componentRef.instance.selectedCasingID = CasingID;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
      }
      this.getCasingsList();
      this.editCasing.clear();
    });
  }

  async loadDeleteCasingComponent(CasingID: number) {
    this.deleteCasing.clear();
    const componentRef = this.deleteCasing.createComponent(this.rcf.resolveComponentFactory(DeleteCasingComponent))
    componentRef.instance.showDeleteCasingPopup = true;
    componentRef.instance.partID = CasingID;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
      }
      this.getCasingsList();
      this.deleteCasing.clear();
    });
  }
  async loadViewCasingComponent(part: Parts) {
    this.viewCasing.clear();
    const componentRef = this.viewCasing.createComponent(this.rcf.resolveComponentFactory(ViewCasingComponent))
    componentRef.instance.showViewCasingPopup = true;
    componentRef.instance.viewPart = part;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
      }
      this.getCasingsList();
      this.viewCasing.clear();
    });
  }

}
