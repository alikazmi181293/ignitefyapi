import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { PartRequestDTO } from '../Classes/PartRequestDTO';
import { Parts } from '../Classes/Parts';
import { PCRequestDTO } from '../Classes/PCRequestDTO';
import { PCListDTO } from '../Classes/PCListDTO';


@Injectable()
export class PCService {
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
  GetPCList(controllerName: string, methodName: string): Observable<any> {
    this.urlPath = environment.apiURL + "/" + controllerName + "/" + methodName;
    return this.http.get<any>(this.urlPath)
  }
  GetPCCategories(controllerName: string, methodName: string): Observable<any> {
    this.urlPath = environment.apiURL + "/" + controllerName + "/" + methodName;
    return this.http.get<any>(this.urlPath)
  }
  PostPCDetails(controllerName: string, methodName: string, part: any): Observable<any> {
    this.urlPath = environment.apiURL + "/" + controllerName + "/" + methodName;
    return this.http.post<any>(this.urlPath, part)
  }
  GetPartsDetail(controllerName: string, methodName: string, partRequest: PartRequestDTO): Observable<any> {
    this.urlPath = environment.apiURL + "/" + controllerName + "/" + methodName;
    return this.http.post<any>(this.urlPath, partRequest)
  }
  DeletePC(controllerName: string, methodName: string, partRequest: PCRequestDTO): Observable<any> {
    this.urlPath = environment.apiURL + "/" + controllerName + "/" + methodName;
    return this.http.post<any>(this.urlPath, partRequest)
  }
  PostPartDetails(controllerName: string, methodName: string, part: Parts): Observable<any> {
    this.urlPath = environment.apiURL + "/" + controllerName + "/" + methodName;
    return this.http.post<any>(this.urlPath, part)
  }
}
