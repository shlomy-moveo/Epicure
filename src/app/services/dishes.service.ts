import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DishesService {

  constructor(
    private http:HttpClient
  ) { }

  baseUrl: string = "http://localhost:3000/dishes/"

  getDishes() {  
    return this.http.get( this.baseUrl + 'getDishes') 
  }

  addDish(body : any) {  
    return this.http.post( this.baseUrl + 'addDish/' , body) 
  }

  
}
