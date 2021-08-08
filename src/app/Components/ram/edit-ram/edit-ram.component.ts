import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PartRequestDTO } from '../../../Classes/PartRequestDTO';
import { Parts } from '../../../Classes/Parts';
import { PartService } from '../../../Services/part.service';

@Component({
  selector: 'app-edit-ram',
  templateUrl: './edit-ram.component.html',
  styleUrls: ['./edit-ram.component.css']
})
export class EditRamComponent implements OnInit {

  showEditRamPopup:boolean;
  selectedRAMID:number;
  part:Parts;
  RAMForm:FormGroup;
  submitted = false;
  @Output() closeEmitier = new EventEmitter();
  
  constructor(private formBuilder: FormBuilder,private partService:PartService,private toastr: ToastrService) {
    this.showEditRamPopup=false;
    this.selectedRAMID=0;
    this.part=new Parts();
    this.RAMForm=this.formBuilder.group({
      brand:['',Validators.required],
      model:['',Validators.required],
      MemoryType:['',Validators.required],
      MemoryFrequency: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      MemorySize: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
   }

   onSubmitForm() {
    this.submitted = true;
    if (this.RAMForm?.invalid) {
        return;
    }
    this.partService.PostPartDetails("Part","UpdatePartDetail",this.part).subscribe(
      (data:any) => {
        if(data){
            this.onReset();
            this.toastr.success('RAM', 'RAM updated successfully.');
            this.CloseEditRamPopup();
        }else{
          this.toastr.error('RAM', 'Error Occured');
        }
    },(error:any)=>{
      this.toastr.error('RAM', 'Error Occured');
    });
  }

  ngOnInit(): void {
    this.getRAMDetails();
  }

  CloseEditRamPopup(){
    this.closeEmitier.emit(false);
  }

  getRAMDetails(){
    let partRequest:PartRequestDTO=new PartRequestDTO();
    partRequest.PartId=this.selectedRAMID;
    this.partService.GetPartsList("Part","GetPartDetail",partRequest).subscribe(
      (data:any) => {
        if(data){
          this.part = data;
        }else
        this.toastr.error('RAMs', 'Error occured while fetching data.');
    });
  }

  onReset() {
    this.submitted = false;
    this.RAMForm?.reset();
  }
}
