import React from "react";
import {Avatar, List, ListItem} from 'material-ui';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {withRouter} from 'react-router';

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
                {this.state.foodItems.map(foodItem => <SpicyMenuItemWithRouter key={foodItem.id} {...foodItem}/>)}
            </List>

        );
    }
}

const RowItemStyle = {
    alignItems: "center"
};

class SpicyMenuItem extends React.Component {
    constructor(props) {
        super(props);

        this.fetchMenuItem = this.fetchMenuItem.bind(this);
    }

    fetchMenuItem(menuId) {
        return () => {
            console.log("fetching menu with id: " + menuId);
            this.props.history.push('/menuDetail/' + menuId);
        }

    }

    render() {
        return (
            <ListItem onClick={this.fetchMenuItem(this.props.id)}>
                <Grid fluid>
                    <Row center="lg" style={RowItemStyle}>
                        <Col xs={3} sm={3} lg={2}><Avatar src={this.props.image}/></Col>
                        <Col xs={6} sm={6} lg={4}>{this.props.name}</Col>
                        <Col xs={3} sm={3} lg={2}>{this.props.price}</Col>
                    </Row>
                </Grid>
            </ListItem>
        );
    }
}
const SpicyMenuItemWithRouter = withRouter(SpicyMenuItem);

export default SpicyMenu;