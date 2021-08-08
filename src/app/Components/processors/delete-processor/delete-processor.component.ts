import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PartRequestDTO } from '../../../Classes/PartRequestDTO';
import { PartService } from '../../../Services/part.service';

@Component({
  selector: 'app-delete-processor',
  templateUrl: './delete-processor.component.html',
  styleUrls: ['./delete-processor.component.css']
})
export class DeleteProcessorComponent implements OnInit {

  showDeleteProcessorPopup:boolean;
  @Output() closeEmitier = new EventEmitter();
  partID:number;
  constructor(private partService:PartService,private toastr: ToastrService) {
    this.showDeleteProcessorPopup=false;
    this.partID=0;
   }

  ngOnInit(): void {
  }

  CloseDeleteProcessorPopup(){
    this.closeEmitier.emit(false);
  }
  deletePart(){
    let partRequest:PartRequestDTO=new PartRequestDTO();
    partRequest.PartId=this.partID;
    this.partService.GetPartsList("Part","DeletePartDetail",partRequest).subscribe(
      (data:any) => {
        if(data){
          this.CloseDeleteProcessorPopup()
          this.toastr.success('Processors', 'Processor deleted succesfully');
        }else
        this.toastr.error('Processors', 'Error occured while fetching data.');
    });
  }
}
