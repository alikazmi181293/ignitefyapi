export class LoginUser{
    UserName:string;
    Password:string;
    grant_type:string;
    constructor(){
        this.UserName="";
        this.Password="";
        this.grant_type="password";
    }
}