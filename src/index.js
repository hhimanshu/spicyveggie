import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';

import App from './App';
import Summary from './components/summary/Summary';
import Menu from './components/menus/Menu';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    browserHistory
} from 'react-router-dom';

injectTapEventPlugin();


const Root = () => (
    <MuiThemeProvider>
        <Router history={browserHistory}>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/menu" component={Menu}/>
                <Route path="/summary" component={Summary}/>
            </Switch>
        </Router>
    </MuiThemeProvider>
);


ReactDOM.render(<Root />, document.getElementById('root'));
