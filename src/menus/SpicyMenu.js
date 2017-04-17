import React from "react";
import Avatar from "material-ui/Avatar";
import {List, ListItem} from "material-ui/List";


// https://www.pexels.com/photo-license/
// All photos on Pexels are free for any personal and commercial purpose.

const SpicyMenu = (props) => (
    <List>
        {props.foodItems.map(foodItem => <SpicyMenuItem key={foodItem.name} {...foodItem}/>)}
    </List>
);

const SpicyMenuItem = (props) => (
    // add price on right side
    <ListItem
        primaryText={props.price}
        secondaryText={props.name}
        leftAvatar={<Avatar src={props.image}/>}
    />
);

export default SpicyMenu;