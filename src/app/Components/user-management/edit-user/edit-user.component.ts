import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserProfileDTO } from '../../../Classes/UserProfileDTO';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  showEditUserPopup: boolean;
  userProfileDTO: UserProfileDTO;
  UserForm: FormGroup;
  submitted = false;
  @Output() closeEmitier = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private userService: UserService, private toastr: ToastrService) {
    this.showEditUserPopup = false;
    this.userProfileDTO = new UserProfileDTO();
    this.UserForm = this.formBuilder.group({
      Name: ['', Validators.required],
      UserName: ['', Validators.required],
      Email: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
      Address: ['', Validators.required]
    });
  }

  onSubmitForm() {
    this.submitted = true;
    if (this.UserForm?.invalid) {
      return;
    }
    this.userService.PostUserDetails("User", "UpdateUser", this.userProfileDTO).subscribe(
      (data: any) => {
        if (data) {
          this.onReset();
          this.toastr.success('User', 'User updated successfully.');
          this.CloseEditUserPopup();
        } else {
          this.toastr.error('User', 'Error Occured');
        }
      }, (error: any) => {
        this.toastr.error('User', 'Error Occured');
      });
  }

  ngOnInit(): void {
    this.UserForm = this.formBuilder.group({
      Name: ['', Validators.required],
      UserName: ['', Validators.required],
      Email: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
      Address: ['', Validators.required]
    });
  }
  CloseEditUserPopup() {
    this.closeEmitier.emit(false);
  }
  onReset() {
    this.submitted = false;
    this.UserForm?.reset();
  }
  
}
