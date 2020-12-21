import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import CompanyInfoComponent from "./components/CompanyInfoComponent";
import ScreenerDataComponent from "./components/ScreenerComponents/ScreenerDataComponent";
import MenubarComponent from "./components/MenubarComponent";
import HomeComponent from "./components/HomeComponent";
import LoginComponent from "./components/UserComponents/LoginComponent";
import RegisterComponent from "./components/UserComponents/RegisterComponent";
import ProfileComponent from "./components/UserComponents/ProfileComponent";
import CompareHeaderComponent from "./components/UserComponents/CompareHeaderComponent";

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
                        <Route path={"/comparison"} component={CompareHeaderComponent}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default ScreenerApp