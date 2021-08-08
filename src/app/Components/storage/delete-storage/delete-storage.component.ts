import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PartRequestDTO } from '../../../Classes/PartRequestDTO';
import { PartService } from '../../../Services/part.service';

@Component({
  selector: 'app-delete-storage',
  templateUrl: './delete-storage.component.html',
  styleUrls: ['./delete-storage.component.css']
})
export class DeleteStorageComponent implements OnInit {

  showDeleteStoragePopup:boolean;
  partID:number;
  @Output() closeEmitier = new EventEmitter();

  constructor(private partService:PartService,private toastr: ToastrService) { 
    this.showDeleteStoragePopup=false;
    this.partID=0;
  }

  ngOnInit(): void {
  }

  CloseDeleteStoragePopup(){
    this.closeEmitier.emit(false);
  }

  deletePart(){
    let partRequest:PartRequestDTO=new PartRequestDTO();
    partRequest.PartId=this.partID;
    this.partService.GetPartsList("Part","DeletePartDetail",partRequest).subscribe(
      (data:any) => {
        if(data){
          this.CloseDeleteStoragePopup()
          this.toastr.success('Storages', 'Storage deleted succesfully');
        }else
        this.toastr.error('Storages', 'Error occured while fetching data.');
    });
  }
}
