import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserProfileDTO } from '../../../Classes/UserProfileDTO';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  showAddUserPopup: boolean;
  userProfileDTO: UserProfileDTO;
  UserForm: FormGroup;
  submitted = false;
  @Output() closeEmitier = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private userService: UserService, private toastr: ToastrService) {
    this.showAddUserPopup = false;
    this.userProfileDTO = new UserProfileDTO();
    this.UserForm = this.formBuilder.group({
      Name: ['', Validators.required],
      UserName: ['', Validators.required],
      Email: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
      Address: ['', Validators.required],
      Password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required]
    }, {
        validator: this.MustMatch('Password', 'ConfirmPassword')
    });
  }

  onSubmitForm() {
    this.submitted = true;
    if (this.UserForm?.invalid) {
      return;
    }
    this.userService.PostUserDetails("User", "PostUser", this.userProfileDTO).subscribe(
      (data: any) => {
        if (data) {
          this.onReset();
          this.toastr.success('User', 'User added successfully.');
          this.CloseAddUserPopup();
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
      Address: ['', Validators.required],
      Password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required]
    }, {
      validator: this.MustMatch('Password', 'ConfirmPassword')
    });
  }
  CloseAddUserPopup() {
    this.closeEmitier.emit(false);
  }
  onReset() {
    this.submitted = false;
    this.UserForm?.reset();
  }
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
}
