import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PartRequestDTO } from '../../../Classes/PartRequestDTO';
import { PartService } from '../../../Services/part.service';

@Component({
  selector: 'app-delete-casing',
  templateUrl: './delete-casing.component.html',
  styleUrls: ['./delete-casing.component.css']
})
export class DeleteCasingComponent implements OnInit {

  showDeleteCasingPopup: boolean;
  partID: number;
  @Output() closeEmitier = new EventEmitter();

  constructor(private partService: PartService, private toastr: ToastrService) {
    this.showDeleteCasingPopup = false;
    this.partID = 0;
  }

  ngOnInit(): void {
  }

  CloseDeleteCasingPopup(){
    this.closeEmitier.emit(false);
  }

  deletePart() {
    let partRequest: PartRequestDTO = new PartRequestDTO();
    partRequest.PartId = this.partID;
    this.partService.GetPartsList("Part", "DeletePartDetail", partRequest).subscribe(
      (data: any) => {
        if (data) {
          this.CloseDeleteCasingPopup()
          this.toastr.success('Casing', 'Casing deleted succesfully');
        } else
          this.toastr.error('Casing', 'Error occured while fetching data.');
      });
  }
}
