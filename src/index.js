import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import Template from "./components/templates/purple-modern/Template";

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/template" component={Template} />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
