import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Parts } from '../../../Classes/Parts';
import { PartService } from '../../../Services/part.service';

@Component({
  selector: 'app-add-graphic-card',
  templateUrl: './add-graphic-card.component.html',
  styleUrls: ['./add-graphic-card.component.css']
})
export class AddGraphicCardComponent implements OnInit {
  
  showAddGraphicCardPopup: boolean;
  part: Parts;
  GraphicCardForm: FormGroup;
  submitted = false;
  @Output() closeEmitier = new EventEmitter();
  
  constructor(private formBuilder: FormBuilder, private partService: PartService, private toastr: ToastrService) { 
    this.showAddGraphicCardPopup = false;
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

  onSubmitForm() {
    this.submitted = true;
    if (this.GraphicCardForm?.invalid) {
      return;
    }
    this.part.subCategoryName = "GraphicCard";
    this.partService.PostPartDetails("Part", "PostPartDetails", this.part).subscribe(
      (data: any) => {
        if (data) {
          this.onReset();
          this.toastr.success('GraphicCard', 'GraphicCard added successfully.');
          this.CloseAddGraphicCardPopup();
        } else {
          this.toastr.error('GraphicCard', 'Error Occured');
        }
      }, (error: any) => {
        this.toastr.error('GraphicCard', 'Error Occured');
      });
  }

  ngOnInit(): void {
  }

  CloseAddGraphicCardPopup(){
    this.closeEmitier.emit(false);
  }

  onReset() {
    this.submitted = false;
    this.GraphicCardForm?.reset();
  }
}
