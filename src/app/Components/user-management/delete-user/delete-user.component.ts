import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserProfileDTO } from '../../../Classes/UserProfileDTO';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  showDeleteUserPopup: boolean;
  @Output() closeEmitier = new EventEmitter();
  userProfileDTO: UserProfileDTO;

  constructor(private userService: UserService, private toastr: ToastrService) {
    this.showDeleteUserPopup = false;
    this.userProfileDTO = new UserProfileDTO();
  }

  ngOnInit(): void {
  }

  CloseDeleteUserPopup() {
    this.closeEmitier.emit(false);
  }

  deleteUser() {
    this.userService.DeleteUser("User", "DeleteUser", this.userProfileDTO).subscribe(
      (data: any) => {
        if (data) {
          this.CloseDeleteUserPopup()
          this.toastr.success('Users', 'User deleted succesfully');
        } else
          this.toastr.error('Users', 'Error occured while fetching data.');
      });
  }

}
