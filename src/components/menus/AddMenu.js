import React from "react";
import {Grid, Row} from "react-flexbox-grid";
import {DatePicker, FlatButton, TextField, Snackbar} from "material-ui";

const RowItemStyle = {
    alignItems: "center"
};

const buttonStyle = {
    marginTop: "6%"
};

class AddMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.initialState;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    initialState = {
        name: '',
        price: '',
        showSnack: false
    };

    handleTouchTap = () => {
        this.setState({
            open: true,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    handleInputChange(e) {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        this.setState({
            [inputName]: inputValue
        })
    }

    handleDate(e, date) {
        this.setState(function (prevState) {
            prevState.date = date
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        // validate form
        console.log("Added new Menu with" + JSON.stringify(this.state, null, 2));
        this.handleTouchTap();
        this.setState(this.initialState);
    }

    render() {
        return (
            <form>
                <Grid fluid>
                    <Row center="lg" style={RowItemStyle}>
                        <TextField
                            name="name"
                            hintText="Your awesome food name"
                            floatingLabelText="Menu Name"
                            onChange={this.handleInputChange}
                            required={true}
                            value={this.state.name}
                        />
                    </Row>
                    <Row center="lg" style={RowItemStyle}>
                        <TextField
                            name="price"
                            type="number"
                            required={true}
                            hintText="Your price"
                            floatingLabelText="Price"
                            onChange={this.handleInputChange}
                            value={this.state.price}
                        />
                    </Row>
                    <Row center="lg" style={RowItemStyle}>
                        <DatePicker name="date"
                                    autoOk={true}
                                    required={true}
                                    hintText="Menu Add Date"
                                    container="inline"
                                    defaultDate={new Date()}
                                    onChange={this.handleDate}
                        />
                    </Row>
                </Grid>
                <FlatButton style={buttonStyle}
                            type="submit"
                            label="SUBMIT"
                            backgroundColor="#a4c639"
                            hoverColor="#8AA62F"
                            fullWidth={true}
                            onClick={this.handleSubmit}
                />
                <Snackbar
                    open={this.state.open}
                    message="Menu Added!"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
            </form>

        );
    }
}

export default AddMenu;