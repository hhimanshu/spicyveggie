import React from "react";
import Avatar from 'material-ui/Avatar';
import List from "material-ui/List";
import {Grid, Row, Col} from 'react-flexbox-grid';

// https://www.pexels.com/photo-license/
// All photos on Pexels are free for any personal and commercial purpose.

const SpicyMenu = (props) => (

    <List>
        {props.foodItems.map(foodItem => <SpicyMenuItem key={foodItem.name} {...foodItem}/>)}
    </List>
);

const style = {
    alignItems: "center"
};

const SpicyMenuItem = (props) => (
    <Grid fluid>
        <Row center="lg" style={style}>
            <Col xs={3} sm={3} lg={2}><Avatar src={props.image}/></Col>
            <Col xs={6} sm={6} lg={4}>{props.name}</Col>
            <Col xs={3} sm={3} lg={2}>{props.price}</Col>
        </Row>
    </Grid>
);

export default SpicyMenu;