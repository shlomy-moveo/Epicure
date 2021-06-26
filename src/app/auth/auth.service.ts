import { Injectable } from '@angular/core';
import { MainService } from '../services/main.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false

  constructor(public ms:MainService) { }
  
  isAuth(){
    this.ms.adminLogged().subscribe(
      (res: any) => {
        if (!res) {
          throw new Error('res is undefined');
        }
        console.log(res)
        if(res.admin){
          this.loggedIn = true;
        }else{
          this.loggedIn = false;
        }
      },
      (err: any) => {
        console.log(err);
      }
    );

    return this.loggedIn;
  }

}
