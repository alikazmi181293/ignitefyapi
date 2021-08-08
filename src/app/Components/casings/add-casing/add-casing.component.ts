import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Parts } from '../../../Classes/Parts';
import { PartService } from '../../../Services/part.service';

@Component({
  selector: 'app-add-casing',
  templateUrl: './add-casing.component.html',
  styleUrls: ['./add-casing.component.css']
})
export class AddCasingComponent implements OnInit {

  showAddCasingPopup: boolean;
  part: Parts;
  CasingForm: FormGroup;
  submitted = false;
  @Output() closeEmitier = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private partService: PartService, private toastr: ToastrService) {
    this.showAddCasingPopup = false;
    this.part = new Parts();
    this.CasingForm = this.formBuilder.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      Dimensions: ['', Validators.required],
      SidePanel: ['', Validators.required],
      Color: ['', Validators.required],
      FormFactor: ['', Validators.required],
      CoolingSystem: ['', Validators.required],
      IOPorts: ['', Validators.required]
    });}

  ngOnInit(): void {
  }

  onSubmitForm() {
    this.submitted = true;
    if (this.CasingForm?.invalid) {
      return;
    }
    this.part.subCategoryName = "Casing";
    this.partService.PostPartDetails("Part", "PostPartDetails", this.part).subscribe(
      (data: any) => {
        if (data) {
          this.onReset();
          this.toastr.success('Casing', 'Casing added successfully.');
          this.CloseAddCasingPopup();
        } else {
          this.toastr.error('Casing', 'Error Occured');
        }
      }, (error: any) => {
        this.toastr.error('Casing', 'Error Occured');
      });
  }

  CloseAddCasingPopup(){
    this.closeEmitier.emit(false);
  }

  onReset() {
    this.submitted = false;
    this.CasingForm?.reset();
  }
}
