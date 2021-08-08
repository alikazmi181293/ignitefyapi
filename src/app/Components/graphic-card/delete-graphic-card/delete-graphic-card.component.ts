import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PartRequestDTO } from '../../../Classes/PartRequestDTO';
import { PartService } from '../../../Services/part.service';

@Component({
  selector: 'app-delete-graphic-card',
  templateUrl: './delete-graphic-card.component.html',
  styleUrls: ['./delete-graphic-card.component.css']
})
export class DeleteGraphicCardComponent implements OnInit {

  showDeleteGraphicCardPopup:boolean;
  @Output() closeEmitier = new EventEmitter();
  partID: number;

  constructor(private partService: PartService, private toastr: ToastrService) {
    this.showDeleteGraphicCardPopup = false;
    this.partID = 0;
  }

  ngOnInit(): void {
  }

  CloseDeleteGraphicCardPopup(){
    this.closeEmitier.emit(false);
  }
  deletePart() {
    let partRequest: PartRequestDTO = new PartRequestDTO();
    partRequest.PartId = this.partID;
    this.partService.GetPartsList("Part", "DeletePartDetail", partRequest).subscribe(
      (data: any) => {
        if (data) {
          this.CloseDeleteGraphicCardPopup()
          this.toastr.success('GraphicCard', 'GraphicCard deleted succesfully');
        } else
          this.toastr.error('GraphicCard', 'Error occured while fetching data.');
      });
  }
}
