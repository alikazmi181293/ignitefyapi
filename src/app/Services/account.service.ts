import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginUser } from '../Classes/LoginUser';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class AccountService 
{
  urlPath:string;
  reqHeader:any;
  loginHeader:any;
  constructor(private http: HttpClient) 
  { 
      this.urlPath="";
      this.reqHeader=new HttpHeaders(
        {
          'Content-Type':'application/json',
          'No-Auth' : 'True'
        }
        );
    this.loginHeader = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('No-Auth', 'True')
      //.set('Access-Control-Allow-Origin', '*')
      //.set('Access-Control-Allow-Methods', '*')
      ;
  }
  LogOutUser(controllerName:string,methodName:string): Observable<any>
  {
    this.urlPath=environment.apiURL+"/"+controllerName+"/"+methodName;
    return this.http.get<any>(this.urlPath)
  }
  PostUserLogin(loginUser:LoginUser): Observable<any>
  {
    let body = new URLSearchParams();
    body.set('UserName', loginUser.UserName);
    body.set('Password', loginUser.Password);
    body.set('grant_type', loginUser.grant_type);
    this.urlPath=environment.loginURL;
    return this.http.post(this.urlPath, body.toString(), {headers: this.loginHeader})
  }
}
