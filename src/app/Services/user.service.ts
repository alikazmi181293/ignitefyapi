import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { UserProfileDTO } from '../Classes/UserProfileDTO';


@Injectable()
export class UserService {
  urlPath: string;
  reqHeader: any;
  constructor(private http: HttpClient) {
    this.urlPath = "";
    this.reqHeader = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'No-Auth': 'True'
      }
    );
  }
  GetUsersList(controllerName: string, methodName: string): Observable<any> {
    this.urlPath = environment.apiURL + "/" + controllerName + "/" + methodName;
    return this.http.get<any>(this.urlPath)
  }
  GetUsersDetail(controllerName: string, methodName: string, UserRequest: UserProfileDTO): Observable<any> {
    this.urlPath = environment.apiURL + "/" + controllerName + "/" + methodName;
    return this.http.post<any>(this.urlPath, UserRequest)
  }
  DeleteUser(controllerName: string, methodName: string, UserRequest: UserProfileDTO): Observable<any> {
    this.urlPath = environment.apiURL + "/" + controllerName + "/" + methodName;
    return this.http.post<any>(this.urlPath, UserRequest)
  }
  PostUserDetails(controllerName: string, methodName: string, User: UserProfileDTO): Observable<any> {
    this.urlPath = environment.apiURL + "/" + controllerName + "/" + methodName;
    return this.http.post<any>(this.urlPath, User)
  }
}
