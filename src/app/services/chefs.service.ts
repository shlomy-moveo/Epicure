import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChefsService {

  constructor(
    private http:HttpClient
  ) { }

  baseUrl: string = "http://localhost:3000/chefs/"

  // Observable<Country[]>

  getChefs() {  
    return this.http.get( this.baseUrl + 'getChefs') 
  }

  getChefById(id:string) {  
    return this.http.get( this.baseUrl + 'getChefByid/'+id) 
  }

  addChef(body : any) {  
    return this.http.post( this.baseUrl + 'addChef/' , body) 
  }



}
