import basket_icon from './basket_icon.png';
import logo from './food_dash.png';
import header_img from './header_img.png';
import search_icon from './search_icon.png';
import menu_1 from './menu_1.png';  // Assume this is for Breakfast
import menu_2 from './menu_2.png';  // Assume this is for Lunch
import menu_3 from './menu_3.png';  // Assume this is for Dinner
import menu_4 from './menu_4.png';  // Assume this is for Dessert
import menu_5 from './menu_5.png';  // Assume this is for Coffee
import pita_bowl from './pita_bowl.jpg';  // Sample image for a specific dish

import food_1 from './food_1.png';  // Sample food for Breakfast
import food_2 from './food_2.png';  // Sample food for Breakfast
import food_3 from './food_3.png';  // Sample food for Lunch
import food_4 from './food_4.png';  // Sample food for Lunch
import food_5 from './food_5.png';  // Sample food for Dinner
import food_6 from './food_6.png';  // Sample food for Dinner
import food_7 from './food_7.png';  // Sample food for Dessert
import food_8 from './food_8.png';  // Sample food for Dessert
import food_9 from './food_9.png';  // Sample food for Coffee
import food_10 from './food_10.png';  // Sample food for Coffee
import food_18 from './food_18.png';
import coffee from './coffee.png'

import add_icon_white from './add_icon_white.png';
import add_icon_green from './add_icon_green.png';
import remove_icon_red from './remove_icon_red.png';
import app_store from './app_store.png';
import play_store from './play_store.png';
import linkedin_icon from './linkedin_icon.png';
import facebook_icon from './facebook_icon.png';
import twitter_icon from './twitter_icon.png';
import cross_icon from './cross_icon.png';
import selector_icon from './selector_icon.png';
import rating_starts from './rating_starts.png';
import profile_icon from './profile_icon.png';
import bag_icon from './bag_icon.png';
import logout_icon from './logout_icon.png';
import parcel_icon from './parcel_icon.png';
import salmon from './Salmon.jpg';
import salid from './vegan_salid.jpg';
import alfrado from './Chicken_alfrado.jpg';
import background from './background.jpg';
import whychooseus from './whyChooseUs.jpg';

export const assets = {
    logo,
    basket_icon,
    salmon,
    salid,
    alfrado,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon,
    whychooseus,
    background,
    pita_bowl,
};

export const menu_list = [
    {
        menu_name: "Breakfast",
        menu_image: food_6
    },
    {
        menu_name: "Lunch",
        menu_image: food_4
    },
    {
        menu_name: "Dinner",
        menu_image: food_2
    },
    {
        menu_name: "Dessert",
        menu_image: food_18
    },
    {
        menu_name: "Coffee",
        menu_image: coffee
    }
];

export const food_list = [
    {
        _id: "1",
        name: "Morning Toast",
        image: food_1,
        price: 10,
        description: "Crispy toast with butter and jam",
        category: "Breakfast"
    },
    {
        _id: "2",
        name: "Breakfast Pancakes",
        image: food_2,
        price: 15,
        description: "Fluffy pancakes with maple syrup and berries",
        category: "Breakfast"
    },
    {
        _id: "3",
        name: "Lunch Salad",
        image: food_3,
        price: 12,
        description: "Fresh garden salad with a variety of veggies",
        category: "Lunch"
    },
    {
        _id: "4",
        name: "Grilled Chicken",
        image: food_4,
        price: 18,
        description: "Perfectly grilled chicken with steamed vegetables",
        category: "Lunch"
    },
    {
        _id: "5",
        name: "Dinner Steak",
        image: food_5,
        price: 25,
        description: "Juicy steak served with mashed potatoes",
        category: "Dinner"
    },
    {
        _id: "6",
        name: "Seafood Pasta",
        image: food_6,
        price: 22,
        description: "Delicious pasta with shrimp and clams in a white sauce",
        category: "Dinner"
    },
    {
        _id: "7",
        name: "Chocolate Cake",
        image: food_7,
        price: 8,
        description: "Rich chocolate cake with creamy chocolate frosting",
        category: "Dessert"
    },
    {
        _id: "8",
        name: "Cheesecake",
        image: food_8,
        price: 9,
        description: "Smooth and creamy cheesecake with a graham cracker crust",
        category: "Dessert"
    },
    {
        _id: "9",
        name: "Espresso",
        image: food_9,
        price: 4,
        description: "Strong and rich espresso, perfect for coffee lovers",
        category: "Coffee"
    },
    {
        _id: "10",
        name: "Cappuccino",
        image: food_10,
        price: 5,
        description: "Classic cappuccino with a delicate foam layer",
        category: "Coffee"
    }
];
