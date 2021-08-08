import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Parts } from '../../../Classes/Parts';
import { PartService } from '../../../Services/part.service';

@Component({
  selector: 'app-add-motherboard',
  templateUrl: './add-motherboard.component.html',
  styleUrls: ['./add-motherboard.component.css']
})
export class AddMotherboardComponent implements OnInit {

  showAddMotherboardPopup:boolean;
  part:Parts;
  MotherboardForm:FormGroup;
  submitted = false;
  @Output() closeEmitier = new EventEmitter();
  constructor(private formBuilder: FormBuilder,private partService:PartService,private toastr: ToastrService) { 
    this.showAddMotherboardPopup=false;
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

  ngOnInit(): void {
  }

  onSubmitForm() {
    this.submitted = true;
    if (this.MotherboardForm?.invalid) {
        return;
    }
    this.part.subCategoryName="Motherboard";
    this.partService.PostPartDetails("Part","PostPartDetails",this.part).subscribe(
      (data:any) => {
        if(data){
            this.onReset();
            this.toastr.success('Motherboard', 'Motherboard added successfully.');
            this.CloseAddMotherboardPopup();
        }else{
          this.toastr.error('Motherboard', 'Error Occured');
        }
    },(error:any)=>{
      this.toastr.error('Motherboard', 'Error Occured');
    });
  }

  CloseAddMotherboardPopup(){
    this.closeEmitier.emit(false);
  }

  onReset() {
    this.submitted = false;
    this.MotherboardForm?.reset();
  }

}
