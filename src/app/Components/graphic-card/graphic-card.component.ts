import { Component, ComponentFactoryResolver, EventEmitter, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PartRequestDTO } from '../../Classes/PartRequestDTO';
import { Parts } from '../../Classes/Parts';
import { PartService } from '../../Services/part.service';
import { AddGraphicCardComponent } from './add-graphic-card/add-graphic-card.component';
import { DeleteGraphicCardComponent } from './delete-graphic-card/delete-graphic-card.component';
import { EditGraphicCardComponent } from './edit-graphic-card/edit-graphic-card.component';
import { ViewGraphicCardComponent } from './view-graphic-card/view-graphic-card.component';

@Component({
  selector: 'app-graphic-card',
  templateUrl: './graphic-card.component.html',
  styleUrls: ['./graphic-card.component.css']
})
export class GraphicCardComponent implements OnInit {

  @ViewChild('addGraphicCard', {read: ViewContainerRef}) addGraphicCard: ViewContainerRef;
  @ViewChild('editGraphicCard', {read: ViewContainerRef}) editGraphicCard: ViewContainerRef;
  @ViewChild('deleteGraphicCard', {read: ViewContainerRef}) deleteGraphicCard: ViewContainerRef;
  @ViewChild('viewGraphicCard', {read: ViewContainerRef}) viewGraphicCard: ViewContainerRef;
  @Output() closeEmitier = new EventEmitter();
  GraphicCardsList: Parts[];
  
  constructor(private rcf: ComponentFactoryResolver, private partService: PartService, private toastr: ToastrService) {
    this.GraphicCardsList = [];
  }

  ngOnInit(): void {
    this.getGraphicCardsList();
  }

  async loadAddGraphicCardComponent() {
    this.addGraphicCard.clear();
    const componentRef = this.addGraphicCard.createComponent(this.rcf.resolveComponentFactory(AddGraphicCardComponent))
    componentRef.instance.showAddGraphicCardPopup=true;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
      }
      this.getGraphicCardsList();
      this.addGraphicCard.clear();
    });
  }

  getGraphicCardsList() {
    let partRequest: PartRequestDTO = new PartRequestDTO();
    partRequest.RequestedPart = "GraphicCard";
    this.partService.GetPartsList("Part", "GetPartList", partRequest).subscribe(
      (data: any) => {
        if (data) {
          this.GraphicCardsList = data;
        } else
          this.toastr.error('GraphicCards', 'Error occured while fetching data.');
      });
  }

  async loadEditGraphicCardComponent(GraphicCardID: number) {
    this.editGraphicCard.clear();
    const componentRef = this.editGraphicCard.createComponent(this.rcf.resolveComponentFactory(EditGraphicCardComponent))
    componentRef.instance.showEditGraphicCardPopup = true;
    componentRef.instance.selectedGraphicCardID = GraphicCardID;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
      }
      this.getGraphicCardsList();
      this.editGraphicCard.clear();
    });
  }

  async loadDeleteGraphicCardComponent(GraphicCardID: number) {
    this.deleteGraphicCard.clear();
    const componentRef = this.deleteGraphicCard.createComponent(this.rcf.resolveComponentFactory(DeleteGraphicCardComponent))
    componentRef.instance.showDeleteGraphicCardPopup = true;
    componentRef.instance.partID = GraphicCardID;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
      }
      this.getGraphicCardsList();
      this.deleteGraphicCard.clear();
    });
  }
  async loadViewGraphicCardComponent(part: Parts) {
    this.viewGraphicCard.clear();
    const componentRef = this.viewGraphicCard.createComponent(this.rcf.resolveComponentFactory(ViewGraphicCardComponent))
    componentRef.instance.showViewGraphicCardPopup = true;
    componentRef.instance.viewPart = part;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
      }
      this.getGraphicCardsList();
      this.viewGraphicCard.clear();
    });
  }

}
