import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Parts } from '../../../Classes/Parts';

@Component({
  selector: 'app-view-casing',
  templateUrl: './view-casing.component.html',
  styleUrls: ['./view-casing.component.css']
})
export class ViewCasingComponent implements OnInit {

  showViewCasingPopup:boolean;
  @Output() closeEmitier = new EventEmitter();
  viewPart: Parts;

  constructor() {
    this.showViewCasingPopup = false;
    this.viewPart = new Parts();
  }

  ngOnInit(): void {
  }

  CloseViewCasingPopup(){
    this.closeEmitier.emit(false);
  }

}
