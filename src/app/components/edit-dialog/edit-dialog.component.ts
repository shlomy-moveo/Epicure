import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Chef, Dish, Restaurant } from 'src/app/interfaces/interface';
import { ChefsService } from 'src/app/services/chefs.service';
import { DishesService } from 'src/app/services/dishes.service';
import { MainService } from 'src/app/services/main.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  constructor(
    public cs:ChefsService,
    public rs:RestaurantsService,
    public ds:DishesService,
    private fb:FormBuilder,
    public ms:MainService,
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  editForm : any

  ngOnInit(): void {
    this.createFormByCategory()
  }




  createFormByCategory(): void {
    if (this.ms.tableCategory === 'restaurants') {
      this.editForm = this.fb.group({
        name: [this.data.item.name, Validators.required],
        chef: [this.data.item.chef._id, Validators.required],
        img: [this.data.item.img, Validators.required],
        inPopularList: [this.data.item.inPopularList]
      });
    } else if (this.ms.tableCategory === 'chefs') {
      this.editForm = this.fb.group({
        name: [this.data.item.name, Validators.required],
        description: [this.data.item.description],
        img: [this.data.item.img, Validators.required]
      });
      
    } else if (this.ms.tableCategory === 'dishes') {
      this.editForm = this.fb.group({
        name: [this.data.item.name, Validators.required],
        ingredients: [this.data.item.ingredients],
        price: [this.data.item.price, Validators.required],
        img: [this.data.item.img, Validators.required],
        restaurant: [this.data.item.restaurant._id, Validators.required]
            });
    }
  }

  handleEdit(){
    console.log(this.ms.tableCategory)

    if (this.ms.tableCategory === 'restaurants') {
      this.rs.editRestaurant(this.data.item._id, this.editForm.value).subscribe(
        res => {
            this.ms.tableList = res as Restaurant[]
          this.ms.openSnackBar(`'${this.editForm.value.name}' edited successfully`)    
        }, 
        err => {
          console.log(err);
          this.ms.openSnackBar(err.error.msg)
        }
        )
    } else if (this.ms.tableCategory === 'chefs') {
        this.cs.editChef(this.data.item._id, this.editForm.value).subscribe(
          res => {
              this.ms.tableList = res as Chef[]
            this.ms.openSnackBar(`'${this.editForm.value.name}' edited successfully`)    
          }, 
          err => {
            console.log(err);
          } )
        } else if (this.ms.tableCategory === 'dishes') {      
          if(!Array.isArray(this.editForm.value.ingredients))
         { this.editForm.value.ingredients = this.editForm.value.ingredients.split(',') } 
          this.ds.editDish(this.data.item._id, this.editForm.value).subscribe(
            res => {
                this.ms.tableList = res as Dish[]
              this.ms.openSnackBar(`'${this.editForm.value.name}' edited successfully`)    
            }, 
            err => { 
              console.log(err);
            }
            )
    }

  }


}
