import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MainService } from '../services/main.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  loggedIn$: Observable<boolean> = this.loggedInSubject$.asObservable()

  constructor(public ms: MainService) { }

  isAuth() {
    this.ms.adminLogged().subscribe(
      (res: any) => {
        if (!res) {
          throw new Error('res is undefined');
        }
        console.log(res)
        if (res.admin) {
          this.loggedInSubject$.next(true)
        } else {
          this.loggedInSubject$.next(false)
        }
      },
      (err: any) => {
        console.log(err);
      }
    );

    return this.loggedIn$;
  }

  updateLoggedIn(valid: boolean){
    this.loggedInSubject$.next(valid)
  }


  // for cognito token
  
}
