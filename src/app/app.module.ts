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
import { MainSectionComponent } from './components/main-section/main-section.component';
import { IconsMeaningComponent } from './components/icons-meaning/icons-meaning.component';

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
    MainSectionComponent,
    IconsMeaningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
