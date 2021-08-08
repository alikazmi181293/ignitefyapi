import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PCRequestDTO } from '../../../Classes/PCRequestDTO';
import { PCService } from '../../../Services/pc.service';

@Component({
  selector: 'app-delete-pc-management',
  templateUrl: './delete-pc-management.component.html',
  styleUrls: ['./delete-pc-management.component.css']
})
export class DeletePcManagementComponent implements OnInit {

  showDeletePCPopup: boolean;
  @Output() closeEmitier = new EventEmitter();
  pcID: number;

  constructor(private pcService: PCService, private toastr: ToastrService) {
    this.showDeletePCPopup = false;
    this.pcID = 0;
  }

  ngOnInit(): void {
  }

  CloseDeletePCPopup() {
    this.closeEmitier.emit(false);
  }
  deletePC() {
    let pcRequest: PCRequestDTO = new PCRequestDTO();
    pcRequest.PCId = this.pcID;
    this.pcService.DeletePC("PC", "DeletePCDetail", pcRequest).subscribe(
      (data: any) => {
        if (data) {
          this.CloseDeletePCPopup()
          this.toastr.success('PCs', 'PC deleted succesfully');
        } else
          this.toastr.error('PCs', 'Error occured while fetching data.');
      });
  }

}
