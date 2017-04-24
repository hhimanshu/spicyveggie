import React from "react";
import {AppBar, MenuItem, Drawer} from "material-ui";
import Link from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }

    toggleDrawer = () => this.setState({open: !this.state.open})

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
                    <MenuItem
                        primaryText="Menu"
                        containerElement={<Link to="/menu"/>}
                        onTouchTap={() => {
                            console.log('going home')
                            this.toggleDrawer()
                        }}
                    />
                    <MenuItem
                        primaryText="Summary"
                        containerElement={<Link to="/summary"/>}
                        onTouchTap={() => {
                            console.log('going summary')
                            this.toggleDrawer()
                        }}
                    />
                </Drawer>
            </div>
        );
    }
}

export default App;