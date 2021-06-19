import { Component, Input, OnInit } from '@angular/core';
import { Icon } from 'src/app/interfaces/icons.interface';
import { Dish, Restaurant } from '../../interfaces/interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() resturant_details:  any ;
  @Input() cardType: string ='';

  icons : any = {
    spicy:"../../../assets/spicy-icon.svg",
    vegitarian:"../../../assets/vegetarian.svg",
    vegan:"../../../assets/vegan-icon.svg"}

  constructor() { }
 

  ngOnInit(): void {
  }

}
