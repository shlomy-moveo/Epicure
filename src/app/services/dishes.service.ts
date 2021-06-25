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

  addDish(body : Body) {  
    return this.http.post( this.baseUrl + 'addDish/' , body ,{
      headers: { 'Content-Type': 'application/json' , 'Authorization':localStorage.token }
    }
    ) 
  }

  deleteDish(dishId : string) {  
    return this.http.delete( this.baseUrl + '/deleteDish/' + dishId, 
    { headers: {'Authorization':localStorage.token }}) 
  }
  
  editDish(dishId: string, body : Body){
    return this.http.post(this.baseUrl + 'editDish/' + dishId, body, {
      headers: { 'Content-Type': 'application/json' , 'Authorization':localStorage.token }
    })

  }
  
}
