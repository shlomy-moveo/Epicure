import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    SwiperModule


  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
