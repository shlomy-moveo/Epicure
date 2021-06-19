import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tr[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {

  constructor() { }

  @Input() item : any


  ngOnInit(): void {
  }

}
