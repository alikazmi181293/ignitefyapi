import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Parts } from '../../../Classes/Parts';

@Component({
  selector: 'app-view-power-supply',
  templateUrl: './view-power-supply.component.html',
  styleUrls: ['./view-power-supply.component.css']
})
export class ViewPowerSupplyComponent implements OnInit {

  showViewPowerSupplyPopup:boolean;
  viewPart: Parts;
  @Output() closeEmitier = new EventEmitter();
  

  constructor() {
    this.showViewPowerSupplyPopup=false;
    this.viewPart=new Parts();
   }

  ngOnInit(): void {
  }

  CloseViewPowerSupplyPopup(){
    this.closeEmitier.emit(false);
  }
}
