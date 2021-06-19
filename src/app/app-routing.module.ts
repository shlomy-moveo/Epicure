import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AdminZoneComponent } from './components/admin/admin-zone/admin-zone.component';
import { LoginComponent } from './components/admin/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';


const routes: Routes = [
  {path:"admin", component:LoginComponent},
  {path:"admin/admin-zone", component:AdminZoneComponent},
  {path:"", pathMatch:"full", component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
