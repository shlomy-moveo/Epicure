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
  allChefsList :any


  // Observable<Country[]>

  getChefs() {  
    return this.http.get( this.baseUrl + 'getChefs') 
  }

  getChefById(id:string) {  
    return this.http.get( this.baseUrl + 'getChefByid/'+id) 
  }

  addChef(body : Body) {  
    return this.http.post( this.baseUrl + 'addChef/' , body,  {
      headers: { 'Content-Type': 'application/json', 'Authorization':localStorage.token }
    }) 
  }

  deleteChef(chefId : string) {  
    return this.http.delete( this.baseUrl + '/deleteChef/' + chefId, 
    { headers : {'content-type':'application/json',  'Authorization':localStorage.token}}) 
  }

  editChef(chefId: string, body : Body){
    return this.http.post(this.baseUrl + 'editChef/' + chefId, body, {
      headers: { 'Content-Type': 'application/json', 'Authorization':localStorage.token }
    })
  }



}
