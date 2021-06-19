import { Component, Input, OnInit } from '@angular/core';
import { Chef, Dish, Restaurant } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent implements OnInit {

  constructor() { }

  @Input() tableType : any

  ngOnInit(): void {
    setTimeout(()=>{ console.log(this.tableType)}, 2500);

    
  }

}
