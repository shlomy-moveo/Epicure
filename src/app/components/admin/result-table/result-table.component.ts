import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Chef, Dish, Restaurant } from 'src/app/interfaces/interface';
import { MainService } from 'src/app/services/main.service';
import { DeleteDialogComponent } from '../../delete-dialog/delete-dialog.component';
import { EditDialogComponent } from '../../edit-dialog/edit-dialog.component';
 
@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent implements OnInit {

  constructor( 
    public dialog: MatDialog,
    public ms:MainService
    ) { }

  // choose_item : any


  @Input() tableData : any
  @Input() headersColums : string[] | undefined

  ngOnInit(): void {
    setTimeout(()=>{ console.log(this.tableData)}, 2500);
  }

  openDialog(item : object, edit: boolean = false): void {
    // check if delete or edit
    console.log(item)  
    // let dialogType = edit ? EditDialogComponent : DeleteDialogComponent 
    if(edit){
      const dialogRef = this.dialog.open(EditDialogComponent ,  
         {  width: '250px', 
        data: {item}
      });
    }else{
      const dialogRef = this.dialog.open(DeleteDialogComponent ,  
         {  
        data: {item}
      });
    }
    
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
