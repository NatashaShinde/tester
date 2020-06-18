import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomeOne from './components/pages/Home(1)';
import AddUserOne from './components/users/AddUser(1)';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function AppOne() {
    return (
        <Router>
            <div className="AppOne">
                <Route exact path="/" component={HomeOne} />
                <Route exact path="/users/Add" component={AddUserOne} />
            </div>
        </Router>
    );
}

export default AppOne;