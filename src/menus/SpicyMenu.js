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

const SpicyMenuItem = (props) => (
    <Grid fluid>
        <Row center="lg">
            <Col xs={3} sm={3} lg={2}><Avatar src={props.image}/></Col>
            <Col xs={6} sm={6} lg={4}>
                <Row around="lg">
                    <Col>{props.name}</Col>
                </Row>

            </Col>
            <Col xs={3} sm={3} lg={2}>
                <div>{props.price}</div>
            </Col>
        </Row>
    </Grid>
);

export default SpicyMenu;