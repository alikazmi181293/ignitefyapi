import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserProfileDTO } from '../../../Classes/UserProfileDTO';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  showViewUserPopup: boolean;
  @Output() closeEmitier = new EventEmitter();
  userProfileDTO: UserProfileDTO;

  constructor() {
    this.showViewUserPopup = false;
    this.userProfileDTO = new UserProfileDTO();
  }

  ngOnInit(): void {
  }

  CloseViewUserPopup() {
    this.closeEmitier.emit(false);
  }

}
