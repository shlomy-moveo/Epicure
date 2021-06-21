import { Component, Input, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent implements OnInit {

  constructor(
  ) { }

  @Input() tableData : any
  @Input() tableHeaders : string[] = []
  
  ngOnInit(): void {
    setTimeout(()=>{ console.log(this.tableData)}, 2000);

  
  }


}