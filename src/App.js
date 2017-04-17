import React from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import MenuItem from "material-ui/MenuItem";
import IconMenu from "material-ui/IconMenu/IconMenu";
import IconButton from "material-ui/IconButton/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import SpicyMenu from "./menus/SpicyMenu";
import breadSandwich from "./images/bread-food-salad-sandwich.jpg";
import spaghettiPasta from "./images/food-dinner-pasta-spaghetti.jpg";
import {Row} from "react-flexbox-grid";

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


const HeaderStyle = {
    'marginBottom': '3%'
};

const App = () => (
    <MuiThemeProvider>
        <div>
            <div style={HeaderStyle}>
                <Row around="lg">
                    <AppBar
                        title="SpicyVeggie"
                        showMenuIconButton={false}
                        iconElementRight={<AppMenu />}
                    />
                </Row>
            </div>
            <SpicyMenu foodItems={foodItems}/>
        </div>
    </MuiThemeProvider>
);


export default App;
