import { Component, OnInit, Output } from '@angular/core';
import { Restaurant } from '../../interfaces/interface';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  config: SwiperOptions = {
    direction: 'horizontal',
    // loop:true,
    // loopAdditionalSlides:9,
    // initialSlide: 0,
    slidesPerView: 2,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    // width: 458,
    // spaceBetween: 30,
    setWrapperSize:true,
    pagination: false,
    slideClass: 'swiper-slide',
    wrapperClass: 'swiper-wrapper'	
  }

  constructor() { }

  popular_resturants : Restaurant[] = [
    {name:"Claro", chef:"Ran Shmueli",img:"../../../assets/claro.jpg",imgMobile:"../../../assets/mobile/claro.jpg"},
    {name:"Lumina", chef:"Meir Adoni",img:"../../../assets/mizlala-gret-mullet-fillet.jpg",imgMobile:"../../../assets/mizlala-gret-mullet-fillet.jpg"},
    {name:"Tiger Lilly", chef:"Yanir Green",img:"../../../assets/tiger-lili.jpg",imgMobile:"../../../assets/tiger-lili.jpg"},
    {name:"Claro", chef:"Ran Shmueli",img:"../../../assets/claro.jpg",imgMobile:"../../../assets/mobile/claro.jpg"},
    {name:"Lumina", chef:"Meir Adoni",img:"../../../assets/mizlala-gret-mullet-fillet.jpg",imgMobile:"../../../assets/mizlala-gret-mullet-fillet.jpg"},
    {name:"Tiger Lilly", chef:"Yanir Green",img:"../../../assets/tiger-lili.jpg",imgMobile:"../../../assets/tiger-lili.jpg"}
  ]
  ngOnInit(): void {
    // window.innerWidth > 1160 ? this.config.slidesPerView = 3 : this.config.slidesPerView = 2

    
  }

}
