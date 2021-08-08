export class UserProfileDTO {
  ID: string;
  Name: string;
  UserName: string;
  Email: string;
  PhoneNumber: string;
  Address: string;
  Password: string;
  ConfirmPassword: string;
  constructor() {
    this.Name = "";
    this.UserName = "";
    this.Email = "";
    this.PhoneNumber = "";
    this.Address = "";
    this.Password = "";
    this.ConfirmPassword = "";
  }
}
