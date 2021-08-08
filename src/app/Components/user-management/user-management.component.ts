import { Component, ComponentFactoryResolver, EventEmitter, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserProfileDTO } from '../../Classes/UserProfileDTO';
import { UserService } from '../../Services/user.service';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  @ViewChild('addUser', { read: ViewContainerRef }) addUser: ViewContainerRef;
  @ViewChild('editUser', { read: ViewContainerRef }) editUser: ViewContainerRef;
  @ViewChild('deleteUser', { read: ViewContainerRef }) deleteUser: ViewContainerRef;
  @ViewChild('viewUser', { read: ViewContainerRef }) viewUser: ViewContainerRef;
  @Output() closeEmitier = new EventEmitter();
  UserList: UserProfileDTO[];

  constructor(private rcf: ComponentFactoryResolver, private userService: UserService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.userService.GetUsersList("User", "GetAllUsers").subscribe(
      (data: any) => {
        if (data) {
          this.UserList = data;
        } else
          this.toastr.error('User', 'Error occured while fetching data.');
      });
  }

  async loadAddUserComponent() {
    this.addUser.clear();
    const componentRef = this.addUser.createComponent(this.rcf.resolveComponentFactory(AddUserComponent))
    componentRef.instance.showAddUserPopup = true;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      this.getUserList();
      this.addUser.clear();
    });
  }

  async loadEditUserComponent(User: UserProfileDTO) {
    this.editUser.clear();
    const componentRef = this.editUser.createComponent(this.rcf.resolveComponentFactory(EditUserComponent))
    componentRef.instance.showEditUserPopup = true;
    componentRef.instance.userProfileDTO = User;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      this.getUserList();
      this.editUser.clear();
    });
  }

  async loadDeleteUserComponent(User: UserProfileDTO) {
    this.deleteUser.clear();
    const componentRef = this.deleteUser.createComponent(this.rcf.resolveComponentFactory(DeleteUserComponent))
    componentRef.instance.showDeleteUserPopup = true;
    componentRef.instance.userProfileDTO = User;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      this.getUserList();
      this.deleteUser.clear();
    });
  }
  async loadViewUserComponent(User: UserProfileDTO) {
    this.viewUser.clear();
    const componentRef = this.viewUser.createComponent(this.rcf.resolveComponentFactory(ViewUserComponent))
    componentRef.instance.showViewUserPopup = true;
    componentRef.instance.userProfileDTO = User;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if (closeEvent) {
      }
      this.viewUser.clear();
    });
  }

}
