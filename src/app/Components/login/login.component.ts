import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AccountService } from '../../Services/account.service';
import { LoginUser } from '../../Classes/LoginUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser:LoginUser;
  loginForm:FormGroup;
  submitted = false;
  @Output() loginEvent = new EventEmitter();
  
  constructor(private formBuilder: FormBuilder,private accountService:AccountService,private toastr: ToastrService,private router: Router) { 
    this.loginUser=new LoginUser();
    this.loginForm=this.formBuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    });
  }

  onSubmitLoginForm() {
    this.submitted = true;
    if (this.loginForm?.invalid) {
        return;
    }
    this.accountService.PostUserLogin(this.loginUser).subscribe(
      (data:any) => {
        if(data){
            this.onReset();
            localStorage.setItem('AdminToken',data.access_token)
            this.loginEvent.emit(true);
            this.toastr.success('Login', 'Login successful');
            this.router.navigate(['/home'])
        }else{
          this.toastr.error('Login', 'Error Occured');
        }
    },(error:any)=>{
      this.toastr.error('Login', 'Invalid user name or password');
    });
  }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    });
    if(localStorage.getItem('AdminToken')){
      this.router.navigate(['/home'])
    }
  }
  onReset() {
    this.submitted = false;
    this.loginForm?.reset();
  }

}
