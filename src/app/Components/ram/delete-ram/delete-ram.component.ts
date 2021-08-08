import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PartRequestDTO } from '../../../Classes/PartRequestDTO';
import { PartService } from '../../../Services/part.service';

@Component({
  selector: 'app-delete-ram',
  templateUrl: './delete-ram.component.html',
  styleUrls: ['./delete-ram.component.css']
})
export class DeleteRamComponent implements OnInit {

  showDeleteRamPopup:boolean;
  partID:number;
  @Output() closeEmitier = new EventEmitter();
  
  constructor(private partService:PartService,private toastr: ToastrService) { 
    this.showDeleteRamPopup=false;
    this.partID=0;
  }

  ngOnInit(): void {
  }

  CloseDeleteRamPopup(){
    this.closeEmitier.emit(false);
  }

  deletePart(){
    let partRequest:PartRequestDTO=new PartRequestDTO();
    partRequest.PartId=this.partID;
    this.partService.GetPartsList("Part","DeletePartDetail",partRequest).subscribe(
      (data:any) => {
        if(data){
          this.CloseDeleteRamPopup()
          this.toastr.success('RAM', 'RAM deleted succesfully');
        }else
        this.toastr.error('RAM', 'Error occured while fetching data.');
    });
  }
}
