import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Chef, Dish, Restaurant } from 'src/app/interfaces/interface';
import { MainService } from 'src/app/services/main.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { ChefsService} from 'src/app/services/chefs.service'
import { DishesService } from 'src/app/services/dishes.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-admin-zone',
  templateUrl: './admin-zone.component.html',
  styleUrls: ['./admin-zone.component.scss']
})
export class AdminZoneComponent implements OnInit {

  // tableList : Restaurant[] | Chef[] | Dish[] | undefined

  @Output() dialogEvent = new EventEmitter();


  constructor(
    public rs:RestaurantsService,
    public ms:MainService,
    public cs:ChefsService,
    public ds:DishesService,
    public dialog: MatDialog,

  ) { }
  selectedCategory = 'restaurants';
  headersColumns: string[] = ['Name', 'Chef', 'Image', 'Actions']
  // , 'image', 'description'];
  ngOnInit(): void {
    this.ms.adminZone = true;


    this.rs.getRestaurants().subscribe(
      (res:any) => {
        if (!res ){ throw new Error("res is undefined")}
        this.ms.tableList = res;
        console.log(this.ms.tableList);
       } ,
          (err: any) => {
            console.log(err);
          }
    )

  }

  changeCategory(e: any): void {
    if (e) {
      this.selectedCategory = e.tab.textLabel.toLowerCase();
    }
    if (this.selectedCategory === 'restaurants') {
      this.ngOnInit();
      this.headersColumns = ['Name', 'Chef', 'Image', 'Actions']
    }
    else if (this.selectedCategory === 'chefs') {
      this.cs.getChefs().subscribe(
        (res:any) => {
          if (!res ){ throw new Error("res is undefined")}
          this.ms.tableList = res;
          console.log(this.ms.tableList);
          this.headersColumns = ['Name', 'Description', 'Image', 'Restaurants','Actions']

         } ,
            (err: any) => {
              console.log(err);
            }
      )
      // this.displayedColumns = this.filterCategories();
      // this.displayedColumns.push('restaurants', 'description');
    }
    else if (this.selectedCategory === 'dishes') {
      this.ds.getDishes().subscribe(
        (res:any) => {
          if (!res ){ throw new Error("res is undefined")}
          this.ms.tableList = res;
          console.log(this.ms.tableList);
          this.headersColumns = ['Name', 'Price', 'Image', 'Ingredients','Actions']

         } ,
            (err: any) => {
              console.log(err);
            }
      )
    //   this.dishService.getSignatureDishes().subscribe(
    //     (res: any) => {
    //       console.log(res);
    //       // this.dataSource = res;
    //       // this.displayedColumns = this.filterCategories();
    //       // this.displayedColumns.push('restaurant', 'price', 'description');
    //     }
    //   );
    }
  }



  addItem(type : any): void {
    console.log(type)
    // this.choose_product =item
    this.dialogEvent.emit(type)
  }

  openDialog(category :string ): void {
    console.log(category)  
    // this.choose_product =item
    const dialogRef = this.dialog.open(DialogComponent, { 
      data: {category} 
    });
    
    // dialogRef.afterClosed().subscribe(result => {
    //   this.cs.addProductToCart(this.cs.loggedCart._id ,result ).subscribe(
    //     res => { 
    //       this.cs.loggedCart = res[0]
    //       err =>{  
    //         console.log(err)
    //       }
    //     } 
    //     )
    //   });
    } 

}
