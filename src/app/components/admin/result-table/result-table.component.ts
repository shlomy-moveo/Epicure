import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Chef, Dish, Restaurant } from 'src/app/interfaces/interface';
import { DeleteDialogComponent } from '../../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent implements OnInit {

  constructor( public dialog: MatDialog) { }

  choose_item : any


  @Input() tableData : any
  @Input() headersColums : string[] | undefined

  ngOnInit(): void {
    setTimeout(()=>{ console.log(this.tableData)}, 2500);
  }

  openDialog(item : object): void {
    console.log(item)  
    this.choose_item =item
    const dialogRef = this.dialog.open(DeleteDialogComponent ,
       {  
      data: {item}
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
