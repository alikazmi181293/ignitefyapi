import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PartRequestDTO } from '../../../Classes/PartRequestDTO';
import { Parts } from '../../../Classes/Parts';
import { PartService } from '../../../Services/part.service';

@Component({
  selector: 'app-edit-storage',
  templateUrl: './edit-storage.component.html',
  styleUrls: ['./edit-storage.component.css']
})
export class EditStorageComponent implements OnInit {

  showEditStoragePopup:boolean;
  selectedStorageID:number;
  part:Parts;
  StorageForm:FormGroup;
  submitted = false;
  @Output() closeEmitier = new EventEmitter();
  
  constructor(private formBuilder: FormBuilder,private partService:PartService,private toastr: ToastrService) {
    this.part=new Parts();
    this.StorageForm=this.formBuilder.group({
      brand:['',Validators.required],
      model:['',Validators.required],
      MemorySize: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      cache: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      Interface:['',Validators.required],
      AverageLatency: ['',Validators.required],
      MemoryType:['',Validators.required]
    });
   }

  ngOnInit(): void {
    this.StorageForm=this.formBuilder.group({
      brand:['',Validators.required],
      model:['',Validators.required],
      MemorySize: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      cache: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      Interface:['',Validators.required],
      AverageLatency: ['', Validators.required],
      MemoryType:['',Validators.required]
    });
    this.getStorageDetails();
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
            this.toastr.success('Storage', 'Storage updated successfully.');
            this.CloseEditStoragePopup();
        }else{
          this.toastr.error('Storage', 'Error Occured');
        }
    },(error:any)=>{
      this.toastr.error('Storage', 'Error Occured');
    });
  }

  getStorageDetails(){
    let partRequest:PartRequestDTO=new PartRequestDTO();
    partRequest.PartId=this.selectedStorageID;
    this.partService.GetPartsList("Part","GetPartDetail",partRequest).subscribe(
      (data:any) => {
        if(data){
          this.part = data;
        }else
        this.toastr.error('Storages', 'Error occured while fetching data.');
    });
  }

  onReset() {
    this.submitted = false;
    this.StorageForm?.reset();
  }

  CloseEditStoragePopup(){
    this.closeEmitier.emit(false);
  }

}
