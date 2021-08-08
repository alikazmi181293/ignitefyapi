import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { PCRequestDTO } from '../Classes/PCRequestDTO';
import { PCListDTO } from '../Classes/PCListDTO';
import { CartItem } from '../Classes/CartItem';
import { IgnitefyOrder } from '../Classes/IgnitefyOrder';


@Injectable()
export class ProductService {
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
  GetPartsList(controllerName: string, methodName: string, partRequest: PCRequestDTO): Observable<any> {
    this.urlPath = environment.apiURL + "/" + controllerName + "/" + methodName;
    return this.http.post<any>(this.urlPath, partRequest, { headers: this.reqHeader })
  }
  GetCartItems(controllerName: string, methodName: string): Observable<any> {
    this.urlPath = environment.apiURL + "/" + controllerName + "/" + methodName;
    return this.http.get<any>(this.urlPath)
  }
  AddProductToCart(controllerName: string, methodName: string, partRequest: PCListDTO): Observable<any> {
    this.urlPath = environment.apiURL + "/" + controllerName + "/" + methodName;
    return this.http.post<any>(this.urlPath, partRequest)
  }
  RemoveItemFromCart(controllerName: string, methodName: string, cartItem: CartItem): Observable<any> {
    this.urlPath = environment.apiURL + "/" + controllerName + "/" + methodName;
    return this.http.post<any>(this.urlPath, cartItem)
  }
  AddOrder(controllerName: string, methodName: string, order: IgnitefyOrder): Observable<any> {
    this.urlPath = environment.apiURL + "/" + controllerName + "/" + methodName;
    return this.http.post<any>(this.urlPath, order)
  }
}
