import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chef, Dish, Restaurant } from '../interfaces/interface';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private http:HttpClient,
    private _snackBar: MatSnackBar,

  ) { }

  cognitoUser: any;

  adminZone: Boolean = false;

  loggedUser : any;

  tableList: Restaurant[] | Chef[] | Dish[] | undefined;
  tableCategory = 'restaurants';

  // tableList: any;

  paginationSkipNumber = 0;
  restaurantsNumber = 0;



  baseUrl: string = "http://localhost:3000/users/";

  adminLoggedIn = false;

  Login(body: any) {  
    return this.http.post( this.baseUrl + 'login', body) 
  };

  // adminLogged() {  
  //   return this.http.get( this.baseUrl + 'adminAuth'),
  //   {headers: { 'Authorization':localStorage.token }}
  // }

  adminLogged() {  
    return this.http.get( this.baseUrl + `adminAuth`,
    {headers: { 'Authorization':localStorage.token }}) 
  }



  openSnackBar(message: string) {
    this._snackBar.open(message, "ok", {
      duration: 2600,
      panelClass: ['style-snackbar']
    });
  }


}
