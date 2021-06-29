import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService  implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //do whatever you want with the HttpRequest
    console.log(req);

    


    const token = localStorage.getItem("CognitoToken")

    if(token){
        const cloned = req.clone({
          headers: req.headers.set("Authorization","Bearer " + token)
        });

        return next.handle(cloned);
    }else{
      
      return next.handle(req);
    }
    // return next.handle(req);
    
}
}
