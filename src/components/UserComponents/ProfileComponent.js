import React from "react";
import AuthenticationService from "../../services/AuthenticationService";
import ProfileTabsComponent from "./ProfileTabsComponent";
import {Card} from "primereact/card";
import profileComponentStyle from "../../componentStyles/ProfileComponentStyle.css.js";

class ProfileComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            currentUser: AuthenticationService.getCurrentUser()
        }
    }

    render() {
        const { currentUser } = this.state;
        return (
            <div className="p-col p-p-6">
                <Card title="My Profile" style={profileComponentStyle.card}>
                    <p>
                        <b>Username: </b>{currentUser.username}
                    </p>
                    <p>
                        <b>First name: </b>{currentUser.firstName}
                    </p>
                    <p>
                        <b>Last name: </b>{currentUser.lastName}
                    </p>
                </Card>
                <div className="p-p-2">
                    <ProfileTabsComponent/>
                </div>
            </div>
        );
    }
}
export default ProfileComponent