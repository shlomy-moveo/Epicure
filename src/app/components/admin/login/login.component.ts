import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public ms:MainService,
    private fb:FormBuilder,
    private r:Router

  ) {}

  loginForm:FormGroup = this.fb.group({
    email: ['', Validators.required],
    password:['', Validators.required]
  })
  errorMsg : string = ''


  ngOnInit(): void {
    this.ms.adminZone = true;
    
  }

  handleSubmit(){
    this.ms.Login(this.loginForm.value).subscribe(
      (res:any )=>{
        if(!res.error){
          localStorage.token = res.access_token
          this.ms.loggedUser = jwtDecode(res.access_token)
          console.log(this.ms.loggedUser)
          this.adminCheck()
 
        }
      },err => {
        console.log(err)
        this.errorMsg = err.error
        setTimeout(()=>{ this.errorMsg =''}, 2500);

        // this.ms.openSnackBar(err.error.msg)
      }
    )
    }

    adminCheck(){
      if(this.ms.loggedUser.admin){
        this.r.navigateByUrl('/admin/admin-zone')
      }else{
        this.r.navigateByUrl('/')
    }  }

}
