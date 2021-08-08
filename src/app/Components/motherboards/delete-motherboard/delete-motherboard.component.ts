import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PartRequestDTO } from '../../../Classes/PartRequestDTO';
import { PartService } from '../../../Services/part.service';

@Component({
  selector: 'app-delete-motherboard',
  templateUrl: './delete-motherboard.component.html',
  styleUrls: ['./delete-motherboard.component.css']
})
export class DeleteMotherboardComponent implements OnInit {

  showDeleteMotherboardPopup:boolean;
  @Output() closeEmitier = new EventEmitter();
  partID:number;

  constructor(private partService:PartService,private toastr: ToastrService) { 
    this.showDeleteMotherboardPopup=false;
    this.partID=0;
  }

  ngOnInit(): void {
  }

  CloseDeleteMotherboardPopup(){
    this.closeEmitier.emit(false);
  }

  deletePart(){
    let partRequest:PartRequestDTO=new PartRequestDTO();
    partRequest.PartId=this.partID;
    this.partService.GetPartsList("Part","DeletePartDetail",partRequest).subscribe(
      (data:any) => {
        if(data){
          this.CloseDeleteMotherboardPopup()
          this.toastr.success('Motherboards', 'Motherboard deleted succesfully');
        }else
        this.toastr.error('Motherboards', 'Error occured while fetching data.');
    });
  }
}
