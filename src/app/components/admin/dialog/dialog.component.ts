import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ChefsService } from 'src/app/services/chefs.service';
import { DishesService } from 'src/app/services/dishes.service';
import { MainService } from 'src/app/services/main.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  constructor(
    public ms:MainService,
    public cs:ChefsService,
    public ds:DishesService,
    public rs:RestaurantsService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  category: string = '';
  options = ['Restaurants', 'Chefs', 'Dishes'];
  addForm: any;

  ngOnInit(): void {
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

  changeCategory(value: any): void {
    this.category = value;
    if (this.category === 'Restaurants') {
      this.addForm = this.fb.group({
        name: ['', Validators.required],
        chef: ['', Validators.required],
        img: ['', Validators.required],
      });
    } else if (this.category === 'Chefs') {
      this.addForm = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        img: ['', Validators.required]
      });
    } else if (this.category === 'Dishes') {
      this.addForm = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        price: ['', Validators.required],
        img: ['', Validators.required],
        restaurant: ['', Validators.required]
            });
    }
  }

  handleSubmit(){
    if (this.category === 'Restaurants') {
      this.rs.addRestaurant(this.addForm.value).subscribe(
        res => {
          if(this.ms.tableCategory === this.category.toLowerCase())
          {
            this.ms.tableList = res
            this.ms.openSnackBar("Restaurant added successfully")    
          }
        }, 
        err => {
          console.log(err);
          
        }
      )
    } else if (this.category === 'Chefs') {
      this.cs.addChef(this.addForm.value).subscribe(
        res => {
          if(this.ms.tableCategory === this.category.toLowerCase())
          {
            this.ms.tableList = res
          }
        }, 
        err => {
          console.log(err);
          
        }
      )

    } else if (this.category === 'Dishes') {
      this.ds.addDish(this.addForm.value).subscribe(
        res => {
          if(this.ms.tableCategory === this.category.toLowerCase())
          {
            this.ms.tableList = res
          }
        }, 
        err => {
          console.log(err);
          
        }
      )
    }
    // this.as.addNewProduct(this.addForm.value).subscribe(
    //   res => {
    //     this.catalogs.products_list = res
    //     this.ms.openSnackBar("Product added successfully ")
    //     this.closeForm()
    //   },
    //   err =>{
    //    console.log(err)
    //    this.ms.openSnackBar(err.error._message)
    
    //   }
    // )

    }
    


}
