import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PartRequestDTO } from '../../../Classes/PartRequestDTO';
import { Parts } from '../../../Classes/Parts';
import { PartService } from '../../../Services/part.service';

@Component({
  selector: 'app-edit-processor',
  templateUrl: './edit-processor.component.html',
  styleUrls: ['./edit-processor.component.css']
})
export class EditProcessorComponent implements OnInit {

  showEditProcessorPopup:boolean;
  selectedProcessorID:number;
  part:Parts;
  processorForm:FormGroup;
  submitted = false;
  @Output() closeEmitier = new EventEmitter();


  constructor(private formBuilder: FormBuilder,private partService:PartService,private toastr: ToastrService) { 
    this.showEditProcessorPopup=false;
    this.selectedProcessorID=0;
    this.part=new Parts();
    this.processorForm=this.formBuilder.group({
      brand:['',Validators.required],
      model:['',Validators.required],
      generation:['',Validators.required],
      socketSupport:['',Validators.required],
      cache: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      baseFrequency: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      turboFrequency: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      noOfCores: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      noOfThreads: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  onSubmitForm() {
    this.submitted = true;
    if (this.processorForm?.invalid) {
        return;
    }
    this.partService.PostProcessorDetails("Part","UpdatePartDetail",this.part).subscribe(
      (data:any) => {
        if(data){
            this.onReset();
            this.toastr.success('Processor', 'Processor updated successfully.');
            this.CloseEditProcessorPopup();
        }else{
          this.toastr.error('Processor', 'Error Occured');
        }
    },(error:any)=>{
      this.toastr.error('Processor', 'Error Occured');
    });
  }

  ngOnInit(): void {
    this.getProcessorDetails();
  }

  getProcessorDetails(){
    let partRequest:PartRequestDTO=new PartRequestDTO();
    partRequest.PartId=this.selectedProcessorID;
    this.partService.GetPartsList("Part","GetPartDetail",partRequest).subscribe(
      (data:any) => {
        if(data){
          this.part = data;
        }else
        this.toastr.error('Processors', 'Error occured while fetching data.');
    });
  }

  CloseEditProcessorPopup(){
    this.closeEmitier.emit(false);
  }

  onReset() {
    this.submitted = false;
    this.processorForm?.reset();
  }
}
