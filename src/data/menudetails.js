import breadSandwich from "../images/bread-food-salad-sandwich.jpg";
import spaghettiPasta from "../images/food-dinner-pasta-spaghetti.jpg";
import healthySalad from "../images/food-salad-healthy-lunch.jpg";
import meatMushroom from "../images/meat-vegetables-gemuesepiess-mushrooms-111131.jpeg";
import muffin from "../images/muffin.jpg";
import tomYumSoup from "../images/pexels-photo-48726.jpeg";
import burgerFries from "../images/pexels-photo-70497.jpeg";
import stirFry from "../images/pexels-photo-76093.jpeg";
import spinachSalad from "../images/pexels-photo-169743.jpeg";
import kaleSalad from "../images/salad-healthy-diet-spinach.jpg";
import salmonCake from "../images/salmon-dish-food-meal-46239.jpeg";
import pizza from "../images/vegetables-italian-pizza-restaurant.jpg";

const menuDetails = [
    {
        "id": "1",
        "name": "Bread Sandwich",
        "image": breadSandwich,
        "price": "$9.89",
        "served": ["breakfast", "lunch"],
        "spiceLevel": "low"
    },
    {
        "id": "2",
        "name": "Spaghetti Pasta",
        "image": spaghettiPasta,
        "price": "$11.23",
        "served": ["lunch", "dinner"],
        "spiceLevel": "medium"
    },
    {
        "id": "3",
        "name": "Healthy Salad",
        "image": healthySalad,
        "price": "$12.99",
        "served": ["lunch"],
        "spiceLevel": "low"
    },
    {
        "id": "4",
        "name": "Meat Mushroom",
        "image": meatMushroom,
        "price": "$7.99",
        "served": ["lunch", "dinner"],
        "spiceLevel": "high"
    },
    {
        "id": "5",
        "name": "Muffin",
        "image": muffin,
        "price": "$3.99",
        "served": ["all day"],
        "spiceLevel": "none"
    },
    {
        "id": "6",
        "name": "Tom Yum Soup",
        "image": tomYumSoup,
        "price": "$5.55",
        "served": ["lunch", "dinner"],
        "spiceLevel": "medium"
    },
    {
        "id": "7",
        "name": "Burger Fries",
        "image": burgerFries,
        "price": "$11.10",
        "served": ["breakfast", "lunch", "dinner"],
        "spiceLevel": "medium"
    },
    {
        "id": "8",
        "name": "Stir Fry",
        "image": stirFry,
        "price": "$7.45",
        "served": ["lunch", "dinner"],
        "spiceLevel": "high"
    },
    {
        "id": "9",
        "name": "Spinach Salad",
        "image": spinachSalad,
        "price": "$6.55",
        "served": ["lunch"],
        "spiceLevel": "low"
    },
    {
        "id": "10",
        "name": "Kale Salad",
        "image": kaleSalad,
        "price": "$6.55",
        "served": ["lunch"],
        "spiceLevel": "low"
    },
    {
        "id": "11",
        "name": "Salmon Cake",
        "image": salmonCake,
        "price": "$6.10",
        "served": ["all day"],
        "spiceLevel": "medium"
    },
    {
        "id": "12",
        "name": "Italian Pizza",
        "image": pizza,
        "price": "$11.99",
        "served": ["lunch", "dinner"],
        "spiceLevel": "high"
    }
];

export default menuDetails;