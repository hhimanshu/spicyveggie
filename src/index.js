import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";


import App from "./App";
import Summary from "./components/summary/Summary";
import Menu from "./components/menus/SpicyMenu";
import MenuDetail from "./components/menus/MenuDetail";

import {BrowserRouter as Router, browserHistory, Route, Redirect} from "react-router-dom";

injectTapEventPlugin();


const Root = () => (
    <MuiThemeProvider>
        <Router history={browserHistory}>
            <div>
                <Route path="/" component={App}/>
                <Route path="/menu" component={Menu}/>
                <Route path="/summary" component={Summary}/>
                <Route path="/menuDetail/:id" component={MenuDetail}/>
                <Redirect from="/" to="/summary"/>
            </div>
        </Router>
    </MuiThemeProvider>
);


ReactDOM.render(<Root />, document.getElementById('root'));
