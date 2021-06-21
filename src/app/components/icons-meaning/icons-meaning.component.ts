import { Component, OnInit } from '@angular/core';
import { Icon } from 'src/app/interfaces/icons.interface';

@Component({
  selector: 'app-icons-meaning',
  templateUrl: './icons-meaning.component.html',
  styleUrls: ['./icons-meaning.component.scss']
})
export class IconsMeaningComponent implements OnInit {

  icons : Icon[] = [
    {name:"Spicy", img:"../../../assets/spicy-icon.svg"},
    {name:"Vegitarian", img:"../../../assets/vegetarian.svg"},
    {name:"Vegan", img:"../../../assets/vegan-icon.svg"}
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
