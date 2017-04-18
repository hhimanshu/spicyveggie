import React from "react";
import "./App.css";
import {Row} from "react-flexbox-grid";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {AppBar, MenuItem, IconMenu, IconButton} from "material-ui";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import SpicyMenu from "./menus/SpicyMenu";
import foodItems from "./data/food";

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


const muiTheme = getMuiTheme({
    appBar: {
        color: '#16a085',
    },
});
const App = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <div>
            <div>
                <Row around="lg">
                    <AppBar
                        title="spicyveggie"
                        showMenuIconButton={false}
                        iconElementRight={<AppMenu />}
                    />
                </Row>
            </div>
            <div id="content-root">
                <SpicyMenu foodItems={foodItems}/>
            </div>
        </div>
    </MuiThemeProvider>
);

export default App;
