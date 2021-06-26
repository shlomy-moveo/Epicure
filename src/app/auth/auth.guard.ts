import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router:Router,
        public AuthService:AuthService
    ){

    }


    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean   
        {
            if(this.AuthService.isAuth()) {
                return true;
             } else {
                this.router.navigateByUrl("/admin");
                return false;
             }    }
}