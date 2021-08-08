import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PartRequestDTO } from '../../../Classes/PartRequestDTO';
import { Parts } from '../../../Classes/Parts';
import { PartService } from '../../../Services/part.service';

@Component({
  selector: 'app-edit-graphic-card',
  templateUrl: './edit-graphic-card.component.html',
  styleUrls: ['./edit-graphic-card.component.css']
})
export class EditGraphicCardComponent implements OnInit {

  showEditGraphicCardPopup: boolean;
  selectedGraphicCardID: number;
  part: Parts;
  GraphicCardForm: FormGroup;
  submitted = false;
  @Output() closeEmitier = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private partService: PartService, private toastr: ToastrService) { 
    this.showEditGraphicCardPopup = false;
    this.selectedGraphicCardID = 0;
    this.part = new Parts();
    this.GraphicCardForm = this.formBuilder.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      Bits: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      MemoryType: ['', Validators.required],
      MemorySize: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      baseFrequency: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      turboFrequency: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  ngOnInit(): void {
    this.getGraphicCardDetails();
  }

  onSubmitForm() {
    this.submitted = true;
    if (this.GraphicCardForm?.invalid) {
      return;
    }
    this.partService.PostPartDetails("Part", "UpdatePartDetail", this.part).subscribe(
      (data: any) => {
        if (data) {
          this.onReset();
          this.toastr.success('GraphicCard', 'GraphicCard updated successfully.');
          this.CloseEditGraphicCardPopup();
        } else {
          this.toastr.error('GraphicCard', 'Error Occured');
        }
      }, (error: any) => {
        this.toastr.error('GraphicCard', 'Error Occured');
      });
  }

  getGraphicCardDetails() {
    let partRequest: PartRequestDTO = new PartRequestDTO();
    partRequest.PartId = this.selectedGraphicCardID;
    this.partService.GetPartsList("Part", "GetPartDetail", partRequest).subscribe(
      (data: any) => {
        if (data) {
          this.part = data;
        } else
          this.toastr.error('GraphicCards', 'Error occured while fetching data.');
      });
  }

  CloseEditGraphicCardPopup(){
    this.closeEmitier.emit(false);
  }

  onReset() {
    this.submitted = false;
    this.GraphicCardForm?.reset();
  }
}
