import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Parts } from '../../../Classes/Parts';
import { PartService } from '../../../Services/part.service';

@Component({
  selector: 'app-add-ram',
  templateUrl: './add-ram.component.html',
  styleUrls: ['./add-ram.component.css']
})
export class AddRamComponent implements OnInit {

  showAddRamPopup:boolean;
  part:Parts;
  RAMForm:FormGroup;
  submitted = false;
  @Output() closeEmitier = new EventEmitter();
  
  constructor(private formBuilder: FormBuilder,private partService:PartService,private toastr: ToastrService) { 
    this.showAddRamPopup=false;
    this.part=new Parts();
    this.RAMForm=this.formBuilder.group({
      brand:['',Validators.required],
      model:['',Validators.required],
      MemoryType:['',Validators.required],
      MemoryFrequency: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      MemorySize: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  ngOnInit(): void {
    this.RAMForm=this.formBuilder.group({
      brand:['',Validators.required],
      model:['',Validators.required],
      MemoryType:['',Validators.required],
      MemoryFrequency:['',Validators.required],
      MemorySize:['',Validators.required]
    });
  }

  CloseAddRamPopup(){
    this.closeEmitier.emit(false);
  }

  onSubmitForm() {
    this.submitted = true;
    if (this.RAMForm?.invalid) {
        return;
    }
    this.part.subCategoryName="RAM";
    this.partService.PostPartDetails("Part","PostPartDetails",this.part).subscribe(
      (data:any) => {
        if(data){
            this.onReset();
            this.toastr.success('RAM', 'RAM added successfully.');
            this.CloseAddRamPopup();
        }else{
          this.toastr.error('RAM', 'Error Occured');
        }
    },(error:any)=>{
      this.toastr.error('RAM', 'Error Occured');
    });
  }
  onReset() {
    this.submitted = false;
    this.RAMForm?.reset();
  }
}
