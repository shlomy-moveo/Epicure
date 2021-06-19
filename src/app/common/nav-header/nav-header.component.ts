import { Component, Input, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {

  constructor(
    public ms:MainService
  ) { }

  // @Input() adminBar : Boolean =false

  ngOnInit(): void {
    // this.adminBar = this.ms.adminZone 
  }

}
