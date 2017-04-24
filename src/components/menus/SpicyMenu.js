import React from "react";
import {Avatar, List, ListItem} from 'material-ui';
import {Grid, Row, Col} from 'react-flexbox-grid';

import foodItems from '../../data/food.js';


// https://www.pexels.com/photo-license/
// All photos on Pexels are free for any personal and commercial purpose.
class SpicyMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            foodItems: foodItems
        }
    }

    render() {
        return (
            <List>
                {this.state.foodItems.map(foodItem => <SpicyMenuItem key={foodItem.name} {...foodItem}/>)}
            </List>

        );
    }
}

const RowItemStyle = {
    alignItems: "center"
};

const SpicyMenuItem = (props) => (
    <ListItem>
        <Grid fluid>
            <Row center="lg" style={RowItemStyle}>
                <Col xs={3} sm={3} lg={2}><Avatar src={props.image}/></Col>
                <Col xs={6} sm={6} lg={4}>{props.name}</Col>
                <Col xs={3} sm={3} lg={2}>{props.price}</Col>
            </Row>
        </Grid>
    </ListItem>
);

export default SpicyMenu;