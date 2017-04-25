import React from "react";
import {Avatar, Chip} from "material-ui";
import {Col, Grid, Row} from "react-flexbox-grid";
import menuDetails from "../../data/menudetails";
import {blue300, blue500, greenA200, indigo900, red500} from "material-ui/styles/colors";

import FontIcon from "material-ui/FontIcon";

const iconStyles = {
    marginRight: 24,
};

const menuRowOneStyle = {
    alignItems: "center",
    paddingTop: "7%",
    paddingBottom: "7%"
};

const menuRowTwoStyle = {
    paddingBottom: "3%"
};

const styles = {
    chip: {
        margin: 4,
    },
};

class MenuDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuDetails: menuDetails
        };
    }

    render() {
        const {match} = this.props;
        const menuDetail = this.state.menuDetails.filter(function (menuDetail) {
            return menuDetail.id === match.params.id;
        })[0];

        return (
            <Grid fluid>
                <Row center="lg" style={menuRowOneStyle}>
                    <Col xs={4}><Avatar src={menuDetail.image} size="60"/></Col>
                    <Col xs={8} sm={6} lg={4}>
                        <Row>{menuDetail.name}</Row>
                        <Row>{menuDetail.price}</Row>
                    </Col>
                </Row>
                <Row center="lg" style={menuRowTwoStyle}>
                    {menuDetail.served.map(c => <Chip key={c} backgroundColor={blue300} style={styles.chip}>{c}</Chip>)}
                </Row>
                <Row>
                    <Chip backgroundColor="#2ecc71" style={styles.chip}>{menuDetail.spiceLevel}</Chip>
                </Row>
            </Grid>
        );
    }
}
export default MenuDetail;
