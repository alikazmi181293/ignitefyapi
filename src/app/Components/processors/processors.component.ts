import { Component, ComponentFactoryResolver, EventEmitter, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PartRequestDTO } from '../../Classes/PartRequestDTO';
import { Parts } from '../../Classes/Parts';
import { PartService } from '../../Services/part.service';
import { AddProcessorComponent } from './add-processor/add-processor.component';
import { DeleteProcessorComponent } from './delete-processor/delete-processor.component';
import { EditProcessorComponent } from './edit-processor/edit-processor.component';
import { ViewProcessorComponent } from './view-processor/view-processor.component';

@Component({
  selector: 'app-processors',
  templateUrl: './processors.component.html',
  styleUrls: ['./processors.component.css']
})
export class ProcessorsComponent implements OnInit {

  @ViewChild('addProcessor', {read: ViewContainerRef}) addProcessor: ViewContainerRef;
  @ViewChild('editProcessor', {read: ViewContainerRef}) editProcessor: ViewContainerRef;
  @ViewChild('deleteProcessor', {read: ViewContainerRef}) deleteProcessor: ViewContainerRef;
  @ViewChild('viewProcessor', {read: ViewContainerRef}) viewProcessor: ViewContainerRef;
  @Output() closeEmitier = new EventEmitter();
  processorsList:Parts[];
  
  constructor(private rcf: ComponentFactoryResolver,private partService:PartService,private toastr: ToastrService) {
    this.processorsList=[];
   }

  ngOnInit(): void {
    this.getProcessorsList();
  }

  getProcessorsList(){
    debugger
    let partRequest:PartRequestDTO=new PartRequestDTO();
    partRequest.RequestedPart="Processor";
    this.partService.GetPartsList("Part","GetPartList",partRequest).subscribe(
      (data:any) => {
        if(data){
          this.processorsList = data;
        }else
        this.toastr.error('Processors', 'Error occured while fetching data.');
    });
  }

  async loadAddProcessorComponent() {
    this.addProcessor.clear();
    const componentRef = this.addProcessor.createComponent(this.rcf.resolveComponentFactory(AddProcessorComponent))
    componentRef.instance.showAddProcessorPopup=true;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      this.getProcessorsList();
      this.addProcessor.clear();
    });
  }

  async loadEditProcessorComponent(processorID:number) {
    this.editProcessor.clear();
    const componentRef = this.editProcessor.createComponent(this.rcf.resolveComponentFactory(EditProcessorComponent))
    componentRef.instance.showEditProcessorPopup=true;
    componentRef.instance.selectedProcessorID=processorID;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      this.getProcessorsList();
      this.editProcessor.clear();
    });
  }

  async loadDeleteProcessorComponent(processorID:number) {
    this.deleteProcessor.clear();
    const componentRef = this.deleteProcessor.createComponent(this.rcf.resolveComponentFactory(DeleteProcessorComponent))
    componentRef.instance.showDeleteProcessorPopup=true;
    componentRef.instance.partID=processorID;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      this.getProcessorsList();
      this.deleteProcessor.clear();
    });
  }
  async loadViewProcessorComponent(part:Parts) {
    this.viewProcessor.clear();
    const componentRef = this.viewProcessor.createComponent(this.rcf.resolveComponentFactory(ViewProcessorComponent))
    componentRef.instance.showViewProcessorPopup=true;
    componentRef.instance.viewPart=part;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if(closeEvent){
      }
      this.viewProcessor.clear();
    });
  }
}
