import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Menu from './Menu';

import Menu_vertical from './Menuvertical';

//import * as serviceWorker from './serviceWorker';

import 'semantic-ui-css/semantic.min.css';

import registerServiceWorker from './registerServiceWorker';

import {Tab, Container, Grid} from 'semantic-ui-react';

//import { BrowserRouter as Router } from 'react-router-dom';


const panes = [
    { menuItem: 'Treemap', render: () => <Tab.Pane> <App/> </Tab.Pane> },
    { menuItem: 'Calendar', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Stats', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]



ReactDOM.render(<Fragment><Container fluid >

    <Menu/>


    <Tab id="godis" menu={{ fluid: false, vertical: true, tabular: false }} panes={panes} grid={{paneWidth:14,tabWidth:2}} />

    </Container></Fragment>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();



registerServiceWorker();
