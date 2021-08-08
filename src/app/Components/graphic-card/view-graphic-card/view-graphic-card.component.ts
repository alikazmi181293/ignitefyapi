import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Parts } from '../../../Classes/Parts';

@Component({
  selector: 'app-view-graphic-card',
  templateUrl: './view-graphic-card.component.html',
  styleUrls: ['./view-graphic-card.component.css']
})
export class ViewGraphicCardComponent implements OnInit {

  showViewGraphicCardPopup:boolean;
  @Output() closeEmitier = new EventEmitter();
  viewPart: Parts;

  constructor() {
    this.showViewGraphicCardPopup = false;
    this.viewPart = new Parts();
  }

  ngOnInit(): void {
  }

  CloseViewGraphicCardPopup(){
    this.closeEmitier.emit(false);
  }

}
