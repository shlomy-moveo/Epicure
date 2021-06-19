export interface Restaurant {
    chef: Object,
img: string,
imgMobile?: string,
inPopularList?: boolean,
name: string,
restaurantDishes: Array<object>,
_id: string

};
export interface Dish {
    img: string,
    imgMobile?: string,
    ingredients: Array<string>,
    name: string,
    price: number,
    restaurant: Object,
    sign_dish?: Boolean,
    tags?: Array<string>,
    _id: string
};
export interface Chef {
    description: string,
    img: string,
    name: string,
    restaurants?: Array<any>,
    _id: string
};

