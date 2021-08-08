import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PartRequestDTO } from '../../../Classes/PartRequestDTO';
import { PartService } from '../../../Services/part.service';

@Component({
  selector: 'app-delete-power-supply',
  templateUrl: './delete-power-supply.component.html',
  styleUrls: ['./delete-power-supply.component.css']
})
export class DeletePowerSupplyComponent implements OnInit {

  showDeletePowerSupplyPopup:boolean;
  partID:number;
  @Output() closeEmitier = new EventEmitter();


  constructor(private partService:PartService,private toastr: ToastrService) {
    this.showDeletePowerSupplyPopup=false;
    this.partID=0;
   }

  ngOnInit(): void {
  }

  CloseDeletePowerSupplyPopup(){
    this.closeEmitier.emit(false);
  }

  deletePart(){
    let partRequest:PartRequestDTO=new PartRequestDTO();
    partRequest.PartId=this.partID;
    this.partService.GetPartsList("Part","DeletePartDetail",partRequest).subscribe(
      (data:any) => {
        if(data){
          this.CloseDeletePowerSupplyPopup()
          this.toastr.success('PowerSupplys', 'PowerSupply deleted succesfully');
        }else
        this.toastr.error('PowerSupplys', 'Error occured while fetching data.');
    });
  }
}
