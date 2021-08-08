import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Parts } from '../../../Classes/Parts';
import { PartService } from '../../../Services/part.service';

@Component({
  selector: 'app-add-processor',
  templateUrl: './add-processor.component.html',
  styleUrls: ['./add-processor.component.css']
})
export class AddProcessorComponent implements OnInit {

  showAddProcessorPopup:boolean;
  part:Parts;
  processorForm:FormGroup;
  submitted = false;
  @Output() closeEmitier = new EventEmitter();
  
  constructor(private formBuilder: FormBuilder,private partService:PartService,private toastr: ToastrService) {
    this.showAddProcessorPopup=false;
    this.part=new Parts();
    this.processorForm=this.formBuilder.group({
      brand:['',Validators.required],
      model:['',Validators.required],
      generation:['',Validators.required],
      socketSupport:['',Validators.required],
      cache: ['', Validators.required, Validators.pattern("^[0-9]*$")],
      baseFrequency: ['', Validators.required, Validators.pattern("^[0-9]*$")],
      turboFrequency: ['', Validators.required, Validators.pattern("^[0-9]*$")],
      noOfCores: ['', Validators.required, Validators.pattern("^[0-9]*$")],
      noOfThreads: ['', Validators.required, Validators.pattern("^[0-9]*$")]
    });
   }

   onSubmitForm() {
    this.submitted = true;
    if (this.processorForm?.invalid) {
        return;
    }
    this.part.subCategoryName="Processor";
    this.partService.PostProcessorDetails("Part","PostPartDetails",this.part).subscribe(
      (data:any) => {
        if(data){
            this.onReset();
            this.toastr.success('Processor', 'Processor added successfully.');
            this.CloseAddProcessorPopup();
        }else{
          this.toastr.error('Processor', 'Error Occured');
        }
    },(error:any)=>{
      this.toastr.error('Processor', 'Error Occured');
    });
  }

  ngOnInit(): void {
    this.processorForm=this.formBuilder.group({
      brand:['',Validators.required],
      model:['',Validators.required],
      generation:['',Validators.required],
      socketSupport:['',Validators.required],
      cache:['',Validators.required],
      baseFrequency:['',Validators.required],
      turboFrequency:['',Validators.required],
      noOfCores:['',Validators.required],
      noOfThreads:['',Validators.required]
    });
  }
  CloseAddProcessorPopup(){
    this.closeEmitier.emit(false);
  }
  onReset() {
    this.submitted = false;
    this.processorForm?.reset();
  }
}
