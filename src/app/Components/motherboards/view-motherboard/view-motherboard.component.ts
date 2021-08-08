import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Parts } from '../../../Classes/Parts';

@Component({
  selector: 'app-view-motherboard',
  templateUrl: './view-motherboard.component.html',
  styleUrls: ['./view-motherboard.component.css']
})
export class ViewMotherboardComponent implements OnInit {

  showViewMotherboardPopup:boolean;
  @Output() closeEmitier = new EventEmitter();
  viewPart: Parts;
  
  constructor() { 
    this.showViewMotherboardPopup=false;
    this.viewPart=new Parts();
  }

  ngOnInit(): void {
  }

  CloseViewMotherboardPopup(){
    this.closeEmitier.emit(false);
  }
}
