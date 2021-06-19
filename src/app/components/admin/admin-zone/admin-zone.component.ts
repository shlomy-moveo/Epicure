import { Component, OnInit } from '@angular/core';
import { Chef, Dish, Restaurant } from 'src/app/interfaces/interface';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-admin-zone',
  templateUrl: './admin-zone.component.html',
  styleUrls: ['./admin-zone.component.scss']
})
export class AdminZoneComponent implements OnInit {

  tableList : Restaurant[] | Chef[] | Dish[] | undefined

  constructor(
    public rs:RestaurantsService
  ) { }

  ngOnInit(): void {
    this.rs.getRestaurants().subscribe(
      (res:any) => {
        if (!res ){ throw new Error("res is undefined")}
        this.tableList = res;
        console.log(this.tableList);
       } ,
          (err: any) => {
            console.log(err);
          }
    )

  }

}
