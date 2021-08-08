import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PartRequestDTO } from '../../../Classes/PartRequestDTO';
import { Parts } from '../../../Classes/Parts';
import { PartService } from '../../../Services/part.service';

@Component({
  selector: 'app-edit-casing',
  templateUrl: './edit-casing.component.html',
  styleUrls: ['./edit-casing.component.css']
})
export class EditCasingComponent implements OnInit {

  showEditCasingPopup: boolean;
  selectedCasingID: number;
  part: Parts;
  CasingForm: FormGroup;
  submitted = false;
  @Output() closeEmitier = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private partService: PartService, private toastr: ToastrService) {
    this.selectedCasingID = 0;
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
    });
  }

  ngOnInit(): void {
    this.getCasingDetails();
  }

  onSubmitForm() {
    this.submitted = true;
    if (this.CasingForm?.invalid) {
      return;
    }
    this.partService.PostPartDetails("Part", "UpdatePartDetail", this.part).subscribe(
      (data: any) => {
        if (data) {
          this.onReset();
          this.toastr.success('Casing', 'Casing updated successfully.');
          this.CloseEditCasingPopup();
        } else {
          this.toastr.error('Casing', 'Error Occured');
        }
      }, (error: any) => {
        this.toastr.error('Casing', 'Error Occured');
      });
  }

  CloseEditCasingPopup(){
    this.closeEmitier.emit(false);
  }

  getCasingDetails() {
    let partRequest: PartRequestDTO = new PartRequestDTO();
    partRequest.PartId = this.selectedCasingID;
    this.partService.GetPartsList("Part", "GetPartDetail", partRequest).subscribe(
      (data: any) => {
        if (data) {
          this.part = data;
        } else
          this.toastr.error('Casings', 'Error occured while fetching data.');
      });
  }

  onReset() {
    this.submitted = false;
    this.CasingForm?.reset();
  }
}
