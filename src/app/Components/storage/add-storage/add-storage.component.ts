import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Parts } from '../../../Classes/Parts';
import { PartService } from '../../../Services/part.service';

@Component({
  selector: 'app-add-storage',
  templateUrl: './add-storage.component.html',
  styleUrls: ['./add-storage.component.css']
})
export class AddStorageComponent implements OnInit {

  showAddStoragePopup:boolean;
  part:Parts;
  StorageForm:FormGroup;
  submitted = false;
  @Output() closeEmitier = new EventEmitter();
  constructor(private formBuilder: FormBuilder,private partService:PartService,private toastr: ToastrService) { 
    this.showAddStoragePopup=false;
    this.part=new Parts();
    this.StorageForm=this.formBuilder.group({
      brand:['',Validators.required],
      model:['',Validators.required],
      MemorySize: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      cache: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      Interface:['',Validators.required],
      AverageLatency: ['', Validators.required],
      MemoryType:['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.StorageForm=this.formBuilder.group({
      brand:['',Validators.required],
      model:['',Validators.required],
      MemorySize: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      Interface:['',Validators.required],
      cache: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      AverageLatency: ['', Validators.required],
      MemoryType:['',Validators.required]
    });
  }

  onSubmitForm() {
    this.submitted = true;
    if (this.StorageForm?.invalid) {
        return;
    }
    this.part.subCategoryName="Storage";
    this.partService.PostPartDetails("Part","PostPartDetails",this.part).subscribe(
      (data:any) => {
        if(data){
            this.onReset();
            this.toastr.success('Storage', 'Storage added successfully.');
            this.CloseAddStoragePopup();
        }else{
          this.toastr.error('Storage', 'Error Occured');
        }
    },(error:any)=>{
      this.toastr.error('Storage', 'Error Occured');
    });
  }

  CloseAddStoragePopup(){
    this.closeEmitier.emit(false);
  }

  onReset() {
    this.submitted = false;
    this.StorageForm?.reset();
  }
}
