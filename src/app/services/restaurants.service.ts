import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(
    private http:HttpClient
  ) { }


  baseUrl: string = "http://localhost:3000/restaurants/"
    allRestaurantsList :any

    
  getRestaurants() {  
    return this.http.get( this.baseUrl + 'getRestaurants') 
  }


  getPopularRestaurants() {  
    return this.http.get( this.baseUrl + 'getPopularRestaurants') 
  }

  addRestaurant(body : any) {  
    return this.http.post( this.baseUrl + 'addRestaurant/' , body) 
  }

}
