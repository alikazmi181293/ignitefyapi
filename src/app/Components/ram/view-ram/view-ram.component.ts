import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Parts } from '../../../Classes/Parts';

@Component({
  selector: 'app-view-ram',
  templateUrl: './view-ram.component.html',
  styleUrls: ['./view-ram.component.css']
})
export class ViewRamComponent implements OnInit {

  showViewRamPopup:boolean;
  @Output() closeEmitier = new EventEmitter();
  viewPart: Parts;
  
  constructor() { 
    this.showViewRamPopup=false;
    this.viewPart=new Parts();
  }

  ngOnInit(): void {
  }
  CloseViewRamPopup(){
    this.closeEmitier.emit(false);
  }

}
