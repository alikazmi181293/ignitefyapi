import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PCListDTO } from '../../../Classes/PCListDTO';

@Component({
  selector: 'app-view-pc-management',
  templateUrl: './view-pc-management.component.html',
  styleUrls: ['./view-pc-management.component.css']
})
export class ViewPcManagementComponent implements OnInit {

  showViewPCPopup: boolean;
  @Output() closeEmitier = new EventEmitter();
  viewPC: PCListDTO;

  constructor() {
    this.showViewPCPopup = false;
    this.viewPC = new PCListDTO();
  }

  ngOnInit(): void {
    console.log(this.viewPC);
  }

  CloseViewPCPopup() {
    this.closeEmitier.emit(false);
  }
}
