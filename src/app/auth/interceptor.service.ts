import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as AWS from 'aws-sdk';
import Auth from '@aws-amplify/auth';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    public r: Router) { }

  user: any
  accessToken: string = ''
  refrashToken: string = ''
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.user = undefined
    // this.checkUserAccessToken()
    
    this.accessToken = localStorage.getItem("CognitoUserAccessToken") || "";
    this.refrashToken = localStorage.getItem("CognitoRefrashToken") || "";
    
    console.log(this.user)
    if (this.user) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + this.accessToken)
      });
      return next.handle(cloned);
    } else {
      // console.log(this.ms.cognitoUser);


      const AWSconfig = new AWS.Config({
        region: "us-east-2"
      });

      const cognitoisp = new AWS.CognitoIdentityServiceProvider(AWSconfig);


      const params = {
        AuthFlow: 'REFRESH_TOKEN_AUTH',
        ClientId: localStorage.cognitoClientId,
        AuthParameters: {
          'REFRESH_TOKEN': this.refrashToken
        }
        
      }
      cognitoisp.initiateAuth(params, function (err, data) {
        if (err) {
          console.log('RefreshTokenError: ', err.stack);
          return next.handle(req);
        } else {
          console.log('RefreshTokenResponse: ', data);
          localStorage.CognitoUserAccessToken = data.AuthenticationResult?.AccessToken
          const cloned = req.clone({
            headers: req.headers.set("Authorization", "Bearer " + data.AuthenticationResult?.AccessToken)
          });
          return next.handle(cloned);
        }
      });

      return next.handle(req);
    }


    // console.log(accessToken)


    // if(accessToken){
    //     const cloned = req.clone({
    //       headers: req.headers.set("Authorization","Bearer " + accessToken)
    //     });
    //     return next.handle(cloned);
    // }else{      
    //   // this.r.navigate(['admin']);
    //   return next.handle(req);
    // }

  }

  checkUserAccessToken = async () => {
    const user = await Auth.currentAuthenticatedUser();
    return user
  }

  // checkUserAccessToken = () => {
  //   console.log('here');

  //   from(Auth.currentAuthenticatedUser())
  //     .pipe(
  //       tap(res => {
  //         console.log(res);

  //       })
  //     )
  //     .subscribe(res => console.log(res)
  //     )
  // }
}
