import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { Router } from "@angular/router";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
    constructor(private router:Router){ }
  
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
     if(request.headers.get('No-Auth')){
         return next.handle(request.clone());
     }
     
     if(localStorage.getItem('AdminToken') != null){
         const clonedreq = request.clone({
             headers : request.headers.set("Authorization",'Bearer '+localStorage.getItem('AdminToken'))
             .set("Access-Control-Allow-Origin", "*")
             .set("Access-Control-Allow-Methods", "*")
         });
         return next.handle(clonedreq).pipe(catchError(err => {
           if (err.status === 401) {
                localStorage.removeItem('AdminToken');
                this.router.navigateByUrl('/login');
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
     }else{
        this.router.navigateByUrl('/home');
     }
    // const customReq = request.clone({
    
    // });    
    // return next.handle(customReq);
  }

}
