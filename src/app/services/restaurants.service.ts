import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(
    private http:HttpClient
  ) { }

  skipPagination = 0


  baseUrl: string = "http://localhost:3000/restaurants/"
    allRestaurantsList :any

    
  getRestaurants() {  
    return this.http.get( this.baseUrl + 'getRestaurants') 
  }

  getRestaurantsLength() {  
    return this.http.get( this.baseUrl + 'getRestaurantsLength') 
  }

  getRestaurantsTable(skipPagination : number) {  
    return this.http.get( this.baseUrl + `getAdminTableRestaurants?skip=${skipPagination}&limit=5`) 
  }


  getPopularRestaurants() {  
    return this.http.get( this.baseUrl + 'getPopularRestaurants') 
  }

  addRestaurant(body : Body) {  
    return this.http.post( this.baseUrl + 'addRestaurant/' , body) 
  }

  deleteRestaurant(restaurantId : string) {  
    return this.http.post( this.baseUrl + '/deleteRestaurant/' + restaurantId, 
    { headres : {'content-type':'application/json'}}) 
  }

  editRestaurant(restaurantId: string, body : Body){
    return this.http.post(this.baseUrl + 'editRestaurant/' + restaurantId, body, {
      headers: { 'Content-Type': 'application/json' }
    })

  }

}
