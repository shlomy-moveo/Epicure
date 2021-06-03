import { Component, OnInit, Output } from '@angular/core';
import { Restaurant } from '../../interfaces/interface';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  constructor() { }

  popular_resturants : Restaurant[] = [
    {name:"Claro", chef:"Ran Shmueli",img:"../../../assets/claro.jpg",imgMobile:"../../../assets/claro.jpg"},
    {name:"Lumina", chef:"Meir Adoni",img:"../../../assets/mizlala-gret-mullet-fillet.jpg",imgMobile:"../../../assets/mizlala-gret-mullet-fillet.jpg"},
    {name:"Tiger Lilly", chef:"Yanir Green",img:"../../../assets/tiger-lili.jpg",imgMobile:"../../../assets/tiger-lili.jpg"}
  ]
  ngOnInit(): void {
  }

}
