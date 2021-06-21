export interface Restaurant {
    name:string,
     chef?:string,
     img:string,
     imgMobile?:string,
     sign_dish?: {
         name:string,
         ingredients: string,
         price: number,
        icon?:string}
};