import { Component, OnInit } from '@angular/core';
import { Chef, Restaurant } from '../../interfaces/interface';
import { SwiperOptions } from 'swiper';
import { ChefsService } from 'src/app/services/chefs.service';



@Component({
  selector: 'app-chef-of-the-week',
  templateUrl: './chef-of-the-week.component.html',
  styleUrls: ['./chef-of-the-week.component.scss']
})

export class ChefOfTheWeekComponent implements OnInit {

  config: SwiperOptions = {
    keyboard: true,
    mousewheel: true, 
    navigation: false,
    pagination:true,
    spaceBetween: 0,
    // width:1000
    
  }


    chef_details: Chef[] | undefined


  constructor(
    public cs:ChefsService
  ) { }

  resizeCarouselle(): void {
    if (window.innerWidth > 1160) {
      this.config.slidesPerView = 3;
      // this.config.width = 700;
    }
    if (window.innerWidth < 1160) {
      // this.config.width = 600;
      this.config.slidesPerView = 2;
    }
    if (window.innerWidth < 860) {
      // this.config.width = 500;
      this.config.slidesPerView = 2;
    }
    if (window.innerWidth < 700) {
      // this.config.width = 300;
      this.config.slidesPerView = 2;
    }
  }

  ngOnInit(): void {
    this.cs.getChefById("60c70297681587111b34b617").subscribe(
      (res:any) => {
        if (!res ){ throw new Error("res is undefined")}
        this.chef_details = res;
        console.log(this.chef_details);
       } ,
          (err: any) => {
            console.log(err);
          }
    )

    window.addEventListener('resize', () => this.resizeCarouselle());


    window.innerWidth > 1160 ? this.config.slidesPerView = 3 : this.config.slidesPerView = 2
    // window.innerWidth < 1160 ? null : this.config.spaceBetween = 10
    // window.innerWidth > 1160 ? this.config.width = 333 : null
  }

}
