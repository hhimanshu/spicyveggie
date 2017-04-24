import React from "react";
import {AppBar, Drawer, MenuItem} from "material-ui";
import {Link} from "react-router-dom";
import "./index.css";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }

    toggleDrawer = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div>
                <AppBar
                    title="SpicyVeggie"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.toggleDrawer}
                />

                <Drawer
                    docked={false}
                    width={300}
                    onRequestChange={this.toggleDrawer}
                    open={this.state.open}
                >
                    <AppBar title="SpicyVeggie" onLeftIconButtonTouchTap={this.toggleDrawer} />
                    <MenuItem
                        primaryText="Menu"
                        containerElement={<Link to="/menu"/>}
                        onTouchTap={() => {
                            this.toggleDrawer()
                        }}
                    />
                    <MenuItem
                        primaryText="Summary"
                        containerElement={<Link to="/summary"/>}
                        onTouchTap={() => {
                            this.toggleDrawer()
                        }}
                    />
                </Drawer>

                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;