import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainService } from './main.service';


@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(
    public ms:MainService,
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

  getRestaurantsTable() {  
    return this.http.get( this.baseUrl + `getAdminTableRestaurants?skip=${this.ms.paginationSkipNumber}&limit=5`,
    {headers: { 'Authorization':localStorage.token }}) 
  }


  getPopularRestaurants() {  
    return this.http.get( this.baseUrl + 'getPopularRestaurants') 
  }

  addRestaurant(body : Body) {  
    return this.http.post( `${this.baseUrl}addRestaurant/?skip=${this.ms.paginationSkipNumber}&limit=5` , body,
    {headers: { 'Authorization':localStorage.token }}
    ) 
  }

  deleteRestaurant(restaurantId : string) {  
    return this.http.delete( `${this.baseUrl}/deleteRestaurant/${restaurantId}?skip=${this.ms.paginationSkipNumber}&limit=5`, 
    { headers: {'Authorization':localStorage.token }}) 
    
  }

  editRestaurant(restaurantId: string, body : Body){
    return this.http.post(`${this.baseUrl}editRestaurant/${restaurantId}?skip=${this.ms.paginationSkipNumber}&limit=5`, body, {
      headers: { 'Content-Type': 'application/json' ,  'Authorization':localStorage.token }
    })

  }

}
