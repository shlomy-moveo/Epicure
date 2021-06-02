import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../interfaces/interface';

@Component({
  selector: 'app-sign-dish',
  templateUrl: './sign-dish.component.html',
  styleUrls: ['./sign-dish.component.scss']
})
export class SignDishComponent implements OnInit {



  constructor() { }

  signDishes : Restaurant[] = [
    {name:"Tiger Lilly", sign_dish : {name:"Pad Ki Mao" ,ingredients:"Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut" ,price:88,icon:"../../../assets/group-2.svg"} ,img:"../../../assets/rectangle@3x.jpg"},
    {name:"Kab Kem", sign_dish : {name:"Garbanzo Frito" ,ingredients:"Polenta fingers, veal cheek,magic chili cured lemon cream, yellow laksa" ,price:98} ,img:"../../../assets/rectangle@2x.jpg",},
    {name:"Popina", sign_dish : {name:"Smoked Pizza" ,ingredients:"Basil dough, cashew 'butter', demi-glace, bison & radish" ,price:65,icon:"../../../assets/group-7-copy.svg"} ,img:"../../../assets/rectangle.jpg"}
  ]

  ngOnInit(): void {
  }

}
