import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from '../../interfaces/interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() resturant_details: Restaurant | undefined;
  @Input() cardType: string ='';

  constructor() { }
 

  ngOnInit(): void {
    // debugger
    // this.cardType
  }

}
