import { Component, OnInit } from '@angular/core';
import { Chef, Dish, Restaurant } from 'src/app/interfaces/interface';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ChefsService } from 'src/app/services/chefs.service';
import { DishesService } from 'src/app/services/dishes.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-admin-zone',
  templateUrl: './admin-zone.component.html',
  styleUrls: ['./admin-zone.component.scss'],
})
export class AdminZoneComponent implements OnInit {
  // tableList: Restaurant[] | Chef[] | Dish[] | undefined;
  headersColums: string[] = ["Name", "Image", "Chef", "Actions"]
  // category = 'restaurant'
  paginationSkipNumber = 0
  restaurantsNumber = 0


  constructor(
    public ms: MainService,
    public ds: DishesService,
    public cs: ChefsService,
    public rs: RestaurantsService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.ms.adminZone = true;
    // for pagintion
    this.getRestaurantsSkipList()
    this.getRestaurantsLength()
    // for dialog add/edit options
    this.getAllChefs()
    this.getAllRestaurants()
  }



  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  changeCategory(e: any): void {
    if (e) {
      this.ms.tableCategory = e.tab.textLabel.toLowerCase();
    }
    if (this.ms.tableCategory === 'restaurants') {
      this.getRestaurantsSkipList()
      this.headersColums = ["Name", "Image", "Chef", "Actions"];

    } else if (this.ms.tableCategory === 'chefs') {
      this.cs.getChefs().subscribe(
        (res: any) => {
          if (!res) {
            throw new Error('res is undefined');
          }
          this.ms.tableList = res;
          this.headersColums = ["Name", "Image", "Description", "Restaurants", "Actions"]
        },
        (err: any) => {
          console.log(err);
        }
      );

    } else if (this.ms.tableCategory === 'dishes') {
      this.ds.getDishes().subscribe(
        (res: any) => {
          if (!res) {
            throw new Error('res is undefined');
          }
          this.ms.tableList = res;
          this.headersColums = ["Name", "Image", "Restaurant", "Price", "Ingredients", "Actions"]
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
  }

  getRestaurantsSkipList() {
    this.rs.getRestaurantsTable().subscribe(
      (res: any) => {
        if (!res) {
          throw new Error('res is undefined');
        }
        this.ms.tableList = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getRestaurantsLength() {

    this.rs.getRestaurantsLength().subscribe(
      (res: any) => {
        if (!res) {
          throw new Error('res is undefined');
        }
        console.log(res);

        this.ms.restaurantsNumber = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  paginationRestaurant(nav: string) {
    if (nav === 'next') {
      this.ms.paginationSkipNumber += 5
    } else {
      this.ms.paginationSkipNumber -= 5
    }
    this.getRestaurantsSkipList()
    console.log(this.ms.paginationSkipNumber);
  }
  getAllRestaurants(){

    this.rs.getRestaurants().subscribe(
      (res: any) => {
        if (!res) {
          throw new Error('res is undefined');
        }
        this.rs.allRestaurantsList = res;
        console.log(this.rs.allRestaurantsList);
      },
      (err: any) => {
        console.log(err);
      }
      );
    }

    getAllChefs(){
      this.cs.getChefs().subscribe(
        (res: any) => {
          if (!res) {
            throw new Error('res is undefined');
          }
          this.cs.allChefsList  = res;
        },  
        (err: any) => {
          console.log(err);
        }
        );
      }




}
