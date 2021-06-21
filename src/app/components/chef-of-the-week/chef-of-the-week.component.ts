import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../interfaces/interface';
import { SwiperOptions } from 'swiper';



@Component({
  selector: 'app-chef-of-the-week',
  templateUrl: './chef-of-the-week.component.html',
  styleUrls: ['./chef-of-the-week.component.scss']
})

/*
swiper>.swiper.s-wrapper {
    height: 100%;
    width: 397px;
}
*/
export class ChefOfTheWeekComponent implements OnInit {

  config: SwiperOptions = {
    direction: 'horizontal',
    loop:true,
    // loopAdditionalSlides:9,
    // initialSlide: 0,
    // slidesPerView: 2,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    // width: 333,
    spaceBetween: 0,
    // setWrapperSize:true,
    pagination: false,
    slideClass: 'swiper-slide',
    wrapperClass: 'swiper-wrapper'	
  }


  yossi_resturants: Restaurant[] = [
    { name: "Onza", img: "../../../assets/screen-shot-2019-01-06-at-10-55-45.jpg" },
    { name: "Kitchen Market", img: "../../../assets/rectangle.jpg" },
    { name: "Mashya", img: "../../../assets/screen-shot-2019-01-03-at-18-28-50.jpg" },
    { name: "Onza", img: "../../../assets/screen-shot-2019-01-06-at-10-55-45.jpg" },
    { name: "Kitchen Market", img: "../../../assets/rectangle.jpg" },
    { name: "Mashya", img: "../../../assets/screen-shot-2019-01-03-at-18-28-50.jpg" }
  ]


  constructor() { }

  ngOnInit(): void {
    window.innerWidth > 1160 ? this.config.slidesPerView = 3 : this.config.slidesPerView = 2
    // window.innerWidth < 1160 ? null : this.config.spaceBetween = 10
    // window.innerWidth > 1160 ? this.config.width = 333 : null
  }

}
