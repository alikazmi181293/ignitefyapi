import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PartRequestDTO } from '../../../Classes/PartRequestDTO';
import { Parts } from '../../../Classes/Parts';
import { PartService } from '../../../Services/part.service';

@Component({
  selector: 'app-edit-power-supply',
  templateUrl: './edit-power-supply.component.html',
  styleUrls: ['./edit-power-supply.component.css']
})
export class EditPowerSupplyComponent implements OnInit {

  showEditPowerSupplyPopup:boolean;
  selectedPowerSupplyID:number;
  part:Parts;
  PowerSupplyForm:FormGroup;
  submitted = false;
  @Output() closeEmitier = new EventEmitter();

  
  constructor(private formBuilder: FormBuilder,private partService:PartService,private toastr: ToastrService) { 
    this.part=new Parts();
    this.selectedPowerSupplyID=0;
    this.PowerSupplyForm=this.formBuilder.group({
      brand:['',Validators.required],
      model:['',Validators.required],
      Wattage:['',Validators.required],
      Certifications:['',Validators.required],
      CoolingSystem:['',Validators.required]
    });
  }

  onSubmitForm() {
    this.submitted = true;
    if (this.PowerSupplyForm?.invalid) {
        return;
    }
    this.partService.PostPartDetails("Part","UpdatePartDetail",this.part).subscribe(
      (data:any) => {
        if(data){
            this.onReset();
            this.toastr.success('PowerSupply', 'PowerSupply updated successfully.');
            this.CloseEditPowerSupplyPopup();
        }else{
          this.toastr.error('PowerSupply', 'Error Occured');
        }
    },(error:any)=>{
      this.toastr.error('PowerSupply', 'Error Occured');
    });
  }

  ngOnInit(): void {
    this.PowerSupplyForm=this.formBuilder.group({
      brand:['',Validators.required],
      model:['',Validators.required],
      Wattage:['',Validators.required],
      Certifications:['',Validators.required],
      CoolingSystem:['',Validators.required]
    });
    this.getPowerSupplyDetails();
  }

  getPowerSupplyDetails(){
    let partRequest:PartRequestDTO=new PartRequestDTO();
    partRequest.PartId=this.selectedPowerSupplyID;
    this.partService.GetPartsList("Part","GetPartDetail",partRequest).subscribe(
      (data:any) => {
        if(data){
          this.part = data;
        }else
        this.toastr.error('PowerSupplys', 'Error occured while fetching data.');
    });
  }

  CloseEditPowerSupplyPopup(){
    this.closeEmitier.emit(false);
  }

  onReset() {
    this.submitted = false;
    this.PowerSupplyForm?.reset();
  }
}
