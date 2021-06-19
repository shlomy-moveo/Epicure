import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private http:HttpClient
  ) { }

  adminZone: Boolean = false

  loggedUser : any


  baseUrl: string = "http://localhost:3000/users/"

  Login(body: any) {  
    return this.http.post( this.baseUrl + 'login', body) 
  }


}
