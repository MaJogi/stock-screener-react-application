import React from "react";
import AuthenticationService from "../../services/AuthenticationService";
import ProfileTabsComponent from "./ProfileTabsComponent";

class ProfileComponent extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            currentUser: AuthenticationService.getCurrentUser()
        }
    }

    render() {
        const { currentUser } = this.state;
        return (
            <div className="p-col p-p-6">
                <header>
                    <h2>
                        My Profile
                    </h2>
                </header>
                <p>
                    <strong>Username:</strong>{" "}
                    {currentUser.username}
                </p>
                <p>
                    <strong>First Name:</strong>{" "}
                    {currentUser.firstName}
                </p>
                <p>
                    <strong>Last Name:</strong>{" "}
                    {currentUser.lastName}
                </p>
                <div>
                    <ProfileTabsComponent currentUser={this.state.currentUser}/>
                </div>
            </div>
        );
    }
}
export default ProfileComponent