import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Parts } from '../../../Classes/Parts';

@Component({
  selector: 'app-view-storage',
  templateUrl: './view-storage.component.html',
  styleUrls: ['./view-storage.component.css']
})
export class ViewStorageComponent implements OnInit {

  showViewStoragePopup:boolean;
  @Output() closeEmitier = new EventEmitter();
  viewPart: Parts;
  
  constructor() {
    this.showViewStoragePopup=false;
    this.viewPart=new Parts();
   }

  ngOnInit(): void {
  }

  CloseViewStoragePopup(){
    this.closeEmitier.emit(false);
  }
}
