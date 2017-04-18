import React from "react";
import "./App.css";
import {Row} from "react-flexbox-grid";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {AppBar, MenuItem, IconMenu, IconButton} from "material-ui";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import SpicyMenu from "./menus/SpicyMenu";

import breadSandwich from "./images/bread-food-salad-sandwich.jpg";
import spaghettiPasta from "./images/food-dinner-pasta-spaghetti.jpg";
import healthySalad from "./images/food-salad-healthy-lunch.jpg";
import meatMushroom from "./images/meat-vegetables-gemuesepiess-mushrooms-111131.jpeg";
import muffin from "./images/muffin.jpg";
import tomYumSoup from "./images/pexels-photo-48726.jpeg";
import burgerFries from "./images/pexels-photo-70497.jpeg";
import stirFry from "./images/pexels-photo-76093.jpeg";
import spinachSalad from "./images/pexels-photo-169743.jpeg";
import kaleSalad from "./images/salad-healthy-diet-spinach.jpg";
import salmonCake from "./images/salmon-dish-food-meal-46239.jpeg";
import pizza from "./images/vegetables-italian-pizza-restaurant.jpg";


const foodItems = [
    {
        "name": "Bread Sandwich",
        "image": breadSandwich,
        "price": "$9.89"

    },
    {
        "name": "Spaghetti Pasta",
        "image": spaghettiPasta,
        "price": "$11.23"
    },
    {
        "name": "Healthy Salad",
        "image": healthySalad,
        "price": "$12.99"
    },
    {
        "name": "Meat Mushroom",
        "image": meatMushroom,
        "price": "$7.99"
    },
    {
        "name": "Muffin",
        "image": muffin,
        "price": "$3.99"
    },
    {
        "name": "Tom Yum Soup",
        "image": tomYumSoup,
        "price": "$5.55"
    },
    {
        "name": "Burger Fries",
        "image": burgerFries,
        "price": "$11.10"
    },
    {
        "name": "Stir Fry",
        "image": stirFry,
        "price": "$7.45"
    },
    {
        "name": "Spinach Salad",
        "image": spinachSalad,
        "price": "$6.55"
    },
    {
        "name": "Salmon Cake",
        "image": salmonCake,
        "price": "$6.10"
    },
    {
        "name": "Italian Pizza",
        "image": pizza,
        "price": "$11.99"
    }
];


const AppMenu = () => {
    return (
        <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}>
            <MenuItem primaryText="Menus"/>
            <MenuItem primaryText="Summary"/>
        </IconMenu>
    );
};

const App = () => (
    <MuiThemeProvider>
        <div>
            <div>
                <Row around="lg">
                    <AppBar
                        title="SpicyVeggie"
                        showMenuIconButton={false}
                        iconElementRight={<AppMenu />}
                    />
                </Row>
            </div>
            <div id="content-root">
                <SpicyMenu foodItems={foodItems}/>
            </div>
        </div>
    </MuiThemeProvider>
);

export default App;
