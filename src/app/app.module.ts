import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; 
import { FormsModule } from '@angular/forms';



import { AngularMaterialModule } from './modules/angular-material.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { NavHeaderComponent } from './common/nav-header/nav-header.component';
import { CardComponent } from './components/card/card.component';
import { ChefOfTheWeekComponent } from './components/chef-of-the-week/chef-of-the-week.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './common/footer/footer.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { IntroSectionComponent } from './components/intro-section/intro-section.component';
import { IconsMeaningComponent } from './components/icons-meaning/icons-meaning.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { SignDishComponent } from './components/sign-dish/sign-dish.component';
import { MiniCardComponent } from './components/mini-card/mini-card.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { LoginComponent } from './components/admin/login/login.component';
import { AdminZoneComponent } from './components/admin/admin-zone/admin-zone.component';
import { ResultTableComponent } from './components/admin/result-table/result-table.component';
import { TableRowComponent } from './components/admin/table-row/table-row.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './components/admin/dialog/dialog.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
// import { AuthGuard } from './auth.guard';
// import { AuthService } from './services/auth.service';

// import { SwiperContainer, SwiperSlide } from './swiper/swiper.component';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavHeaderComponent,
    CardComponent,
    ChefOfTheWeekComponent,
    AboutComponent,
    FooterComponent,
    SearchInputComponent,
    IntroSectionComponent,
    IconsMeaningComponent,
    HomepageComponent,
    RestaurantsComponent,
    SignDishComponent,
    MiniCardComponent,
    LoginComponent,
    AdminZoneComponent,
    ResultTableComponent,
    TableRowComponent,
    DialogComponent,
    DeleteDialogComponent,
    EditDialogComponent,
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule, 
    FlexLayoutModule,
    SwiperModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,  
    BrowserAnimationsModule

  ],
  providers: [
    AuthGuard,
    AuthService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
