import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Chef, Dish, Restaurant } from 'src/app/interfaces/interface';
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

  // category: string = '';
  // options = ['Restaurants', 'Chefs', 'Dishes'];
  addForm: any;

  ngOnInit(): void {
    this.formCategory()

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

  formCategory(): void {
    if (this.ms.tableCategory === 'restaurants') {
      this.addForm = this.fb.group({
        name: ['', Validators.required],
        chef: ['', Validators.required],
        img: ['', Validators.required],
      });
    } else if (this.ms.tableCategory === 'chefs') {
      this.addForm = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        img: ['', Validators.required]
      });
      
    } else if (this.ms.tableCategory === 'dishes') {
      this.addForm = this.fb.group({
        name: ['', Validators.required],
        ingredients: [''],
        price: ['1', Validators.required],
        img: ['', Validators.required],
        restaurant: ['', Validators.required]
            });
    }
  }

  handleSubmit(){
    if (this.ms.tableCategory === 'restaurants') {
      this.rs.addRestaurant(this.addForm.value).subscribe(
        res => {
            this.ms.tableList = res as Restaurant[]
          this.ms.openSnackBar(`'${this.addForm.value.name}' added successfully`)    
        }, 
        err => {
          console.log(err);
        }
        )
      } else if (this.ms.tableCategory === 'chefs') {
        this.cs.addChef(this.addForm.value).subscribe(
          res => {
              this.ms.tableList = res as Chef[]
            this.ms.openSnackBar(`'${this.addForm.value.name}' added successfully`)    
          }, 
          err => {
            console.log(err);
          }
          )
          
        } else if (this.ms.tableCategory === 'dishes') {
          this.addForm.value.ingredients = this.addForm.value.ingredients.split(',')
          this.ds.addDish(this.addForm.value).subscribe(
            res => {
                this.ms.tableList = res as Dish[]
              this.ms.openSnackBar(`'${this.addForm.value.name}' added successfully`)    
            }, 
            err => {
          console.log(err);
          
        }
      )
    }

    }
    
}
