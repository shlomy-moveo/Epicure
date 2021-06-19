import { Component, Input, OnInit } from '@angular/core';
import { Chef, Restaurant } from '../../interfaces/interface';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss']
})
export class MiniCardComponent implements OnInit { 

  @Input() resturant_details: Restaurant | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
