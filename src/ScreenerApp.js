import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import CompanyInfoComponent from "./components/CompanyComponents/CompanyInfoComponent";
import ScreenerDataComponent from "./components/ScreenerComponents/ScreenerDataComponent";
import MenubarComponent from "./components/MenubarComponent";
import HomeComponent from "./components/HomeComponent";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import ProfileComponent from "./components/UserComponents/ProfileComponent";

class ScreenerApp extends React.Component {

    render() {
        return (
            <Router history={History}>
                <div>
                    <MenubarComponent/>
                    <Switch>
                        <Route exact path={"/"} component={HomeComponent}/>
                        <Route exact path={"/screener"} component={ScreenerDataComponent}/>
                        <Route path={"/screener/:id"} component={CompanyInfoComponent}/>
                        <Route exact path={"/login"} component={LoginComponent}/>
                        <Route exact path={"/register"} component={RegisterComponent}/>
                        <Route path={"/user/:username"} component={ProfileComponent}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default ScreenerApp