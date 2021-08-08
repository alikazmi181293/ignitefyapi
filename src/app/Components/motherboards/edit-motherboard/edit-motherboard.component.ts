import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PartRequestDTO } from '../../../Classes/PartRequestDTO';
import { Parts } from '../../../Classes/Parts';
import { PartService } from '../../../Services/part.service';

@Component({
  selector: 'app-edit-motherboard',
  templateUrl: './edit-motherboard.component.html',
  styleUrls: ['./edit-motherboard.component.css']
})
export class EditMotherboardComponent implements OnInit {

  showEditMotherboardPopup:boolean;
  selectedMotherboardID:number;
  part:Parts;
  MotherboardForm:FormGroup;
  submitted = false;
  @Output() closeEmitier = new EventEmitter();
  constructor(private formBuilder: FormBuilder,private partService:PartService,private toastr: ToastrService) { 
    this.showEditMotherboardPopup=false;
    this.selectedMotherboardID=0;
    this.part=new Parts();
    this.MotherboardForm=this.formBuilder.group({
      brand:['',Validators.required],
      model:['',Validators.required],
      formFactor:['',Validators.required],
      socketSupport:['',Validators.required],
      MemoryType:['',Validators.required],
      MemoryFrequency: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      ExpensionSlots:['',Validators.required],
      IOPorts:['',Validators.required]
    });
  }

  onSubmitForm() {
    this.submitted = true;
    if (this.MotherboardForm?.invalid) {
        return;
    }
    this.partService.PostPartDetails("Part","UpdatePartDetail",this.part).subscribe(
      (data:any) => {
        if(data){
            this.onReset();
            this.toastr.success('Motherboard', 'Motherboard updated successfully.');
            this.CloseEditMotherboardPopup();
        }else{
          this.toastr.error('Motherboard', 'Error Occured');
        }
    },(error:any)=>{
      this.toastr.error('Motherboard', 'Error Occured');
    });
  }

  ngOnInit(): void {
    this.getMotherboardDetails();
  }

  CloseEditMotherboardPopup(){
    this.closeEmitier.emit(false);
  }

  onReset() {
    this.submitted = false;
    this.MotherboardForm?.reset();
  }
  
  getMotherboardDetails(){
    let partRequest:PartRequestDTO=new PartRequestDTO();
    partRequest.PartId=this.selectedMotherboardID;
    this.partService.GetPartsList("Part","GetPartDetail",partRequest).subscribe(
      (data:any) => {
        if(data){
          this.part = data;
        }else
        this.toastr.error('Motherboards', 'Error occured while fetching data.');
    });
  }
}
