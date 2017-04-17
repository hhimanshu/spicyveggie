import React from "react";
import "./App.css";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu/IconMenu';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

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

const App = () => (
    <MuiThemeProvider>
        <AppBar
            title="SpicyVeggie"
            showMenuIconButton={false}
            iconElementRight={<AppMenu />}
        />
    </MuiThemeProvider>
);

export default App;
