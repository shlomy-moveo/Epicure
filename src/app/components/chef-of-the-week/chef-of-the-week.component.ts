import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../interfaces/interface';

@Component({
  selector: 'app-chef-of-the-week',
  templateUrl: './chef-of-the-week.component.html',
  styleUrls: ['./chef-of-the-week.component.scss']
})
export class ChefOfTheWeekComponent implements OnInit {

  yossi_resturants : Restaurant[] = [
    {name:"Onza" ,img:"../../../assets/screen-shot-2019-01-06-at-10-55-45.jpg"},
    {name:"Kitchen Market" ,img:"../../../assets/rectangle.jpg"},
    {name:"Mashya",img:"../../../assets/screen-shot-2019-01-03-at-18-28-50.jpg"}
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
