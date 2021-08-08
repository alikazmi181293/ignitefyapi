import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Parts } from '../../../Classes/Parts';
import { PartService } from '../../../Services/part.service';

@Component({
  selector: 'app-add-power-supply',
  templateUrl: './add-power-supply.component.html',
  styleUrls: ['./add-power-supply.component.css']
})
export class AddPowerSupplyComponent implements OnInit {

  showAddPowerSupplyPopup:boolean;
  part:Parts;
  PowerSupplyForm:FormGroup;
  submitted = false;
  @Output() closeEmitier = new EventEmitter();

  constructor(private formBuilder: FormBuilder,private partService:PartService,private toastr: ToastrService) { 
    this.showAddPowerSupplyPopup=false;
    this.part=new Parts();
    this.PowerSupplyForm=this.formBuilder.group({
      brand:['',Validators.required],
      model:['',Validators.required],
      Wattage: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      Certifications:['',Validators.required],
      CoolingSystem:['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.PowerSupplyForm=this.formBuilder.group({
      brand:['',Validators.required],
      model:['',Validators.required],
      Wattage: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      Certifications:['',Validators.required],
      CoolingSystem:['',Validators.required]
    });
  }

  onSubmitForm() {
    this.submitted = true;
    if (this.PowerSupplyForm?.invalid) {
        return;
    }
    this.part.subCategoryName="PowerSupply";
    this.partService.PostPartDetails("Part","PostPartDetails",this.part).subscribe(
      (data:any) => {
        if(data){
            this.onReset();
            this.toastr.success('PowerSupply', 'PowerSupply added successfully.');
            this.CloseAddPowerSupplyPopup();
        }else{
          this.toastr.error('PowerSupply', 'Error Occured');
        }
    },(error:any)=>{
      this.toastr.error('PowerSupply', 'Error Occured');
    });
  }

  CloseAddPowerSupplyPopup(){
    this.closeEmitier.emit(false);
  }
  onReset() {
    this.submitted = false;
    this.PowerSupplyForm?.reset();
  }
}
