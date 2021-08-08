import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Parts } from '../../../Classes/Parts';

@Component({
  selector: 'app-view-processor',
  templateUrl: './view-processor.component.html',
  styleUrls: ['./view-processor.component.css']
})
export class ViewProcessorComponent implements OnInit {

  showViewProcessorPopup:boolean;
  @Output() closeEmitier = new EventEmitter();
  viewPart: Parts;
  
  constructor() {
    this.showViewProcessorPopup=false;
    this.viewPart=new Parts();
   }

  ngOnInit(): void {
  }

  CloseViewProcessorPopup(){
    this.closeEmitier.emit(false);
  }

}
