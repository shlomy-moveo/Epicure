import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Restaurant } from '../../interfaces/interface';
import { SwiperOptions } from 'swiper';
import { RestaurantsService } from 'src/app/services/restaurants.service';





 
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  @ViewChild('myDiv',{static: true}) mydiv?: ElementRef<HTMLInputElement> ;




  config: SwiperOptions = {
    keyboard: true,
    mousewheel:true,
    // navigation: true,
    // pagination:true,
    spaceBetween: 0,
    slidesPerView: 2, 
    // nextButton: 'swiper-button-next',
    // prevButton: 'swiper-button-prev',

    

    // breakpoints: {
    //   640: {
    //     slidesPerView: 1.5,
    //     spaceBetween: 0,
    //   },
    //   968: {
    //     slidesPerView: 2,
    //     spaceBetween: 10,
    //   },
    //   1024: {
    //     slidesPerView: 3,
    //     spaceBetween: 10,
    //   }, 
    // }
    
    

    // width:1000
  }

  resizeCarouselle(): void {

    if (window.innerWidth > 430) {
      // this.config.width = null;
      this.config.slidesPerView = 1;
      // this.dishConfig.slidesPerView = 1;
      // this.dishConfig.width = null;
    }
    window.innerWidth > 1360 ? this.config.slidesPerView = 3 : this.config.slidesPerView = 2;
    // window.innerWidth > 1360 ? this.config.spaceBetween = -5 : this.config.spaceBetween = 0;
    // window.innerWidth > 1360 ? this.dishConfig.slidesPerView = 3 : this.dishConfig.slidesPerView = 2;
    if (window.innerWidth >= 560 && window.innerWidth < 960) {
      this.config.width = 555;
    }
    if (window.innerWidth <= 560) {
      // this.config.width = 210;
      this.config.slidesPerView = 1;
      // this.dishConfig.slidesPerView = 1; 
      // this.dishConfig.width = 260;
    }
    if (window.innerWidth > 560 && window.innerWidth < 960) {
      // this.dishConfig.width = 555;
    }
  }

  
  constructor( public rs:RestaurantsService) { }
  restaurantsList: Restaurant[] | undefined
  
  // popular_resturants : Restaurant[] = [
  //   {name:"Claro", chef:"Ran Shmueli",img:"../../../assets/claro.jpg",imgMobile:"../../../assets/mobile/claro.jpg"},
  //   {name:"Lumina", chef:"Meir Adoni",img:"../../../assets/mizlala-gret-mullet-fillet.jpg",imgMobile:"../../../assets/mizlala-gret-mullet-fillet.jpg"},
  //   {name:"Tiger Lilly", chef:"Yanir Green",img:"../../../assets/tiger-lili.jpg",imgMobile:"../../../assets/tiger-lili.jpg"},
  //   {name:"Claro", chef:"Ran Shmueli",img:"../../../assets/claro.jpg",imgMobile:"../../../assets/mobile/claro.jpg"},
  //   {name:"Lumina", chef:"Meir Adoni",img:"../../../assets/mizlala-gret-mullet-fillet.jpg",imgMobile:"../../../assets/mizlala-gret-mullet-fillet.jpg"},
  //   {name:"Tiger Lilly", chef:"Yanir Green",img:"../../../assets/tiger-lili.jpg",imgMobile:"../../../assets/tiger-lili.jpg"}
  // ]
  ngOnInit(): void {
    window.addEventListener('resize', () => this.resizeCarouselle());
    this.resizeCarouselle();



    this.rs.getPopularRestaurants().subscribe(
      (res:any) => {
        if (!res ){ throw new Error("res is undefined")}
        this.restaurantsList = res;
        console.log(this.restaurantsList);
       } ,
          (err: any) => {
            console.log(err);
          }
    )



    window.innerWidth > 1160 ? this.config.slidesPerView = 3 : this.config.slidesPerView = 1.7;


    

  }

}
