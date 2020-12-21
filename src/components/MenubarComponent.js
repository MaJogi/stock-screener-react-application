import React from "react";
import {withRouter} from "react-router-dom"
import {Menubar} from "primereact/menubar";
import style from "../componentStyles/MenubarComponentStyle.css"
import AuthenticationService from "../services/AuthenticationService";

class MenubarComponent extends React.Component {

    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
        this.state = {
            currentUser: undefined,
            showUserBoard: false,
            items: [
                {
                    label: "Home",
                    icon: "pi pi-home",
                    command: () => (this.props.history.push("/"))
                },
                {
                    label: "Screener",
                    icon: "pi pi-desktop",
                    command: () => (this.props.history.push("/screener"))
                },
                {
                    label: "Register",
                    icon: "pi pi-user",
                    command: () => (this.props.history.push("/register"))
                },
                {
                    label: "User",
                    icon: "pi pi-user",
                    items:[
                        {
                            label:'Dashboard',
                            command: () => (this.getUserContent())
                        },
                        {
                            label: 'Logout',
                            command: () => (this.logOut())
                        }
                    ],
                }
            ]
        }
    }

    getUserContent() {
        const currentUser = AuthenticationService.getCurrentUser();

        if (currentUser) {
            this.props.history.push("user/" + currentUser.username)
        } else {
            this.props.history.push("/login")
        }
    }

    logOut() {
        AuthenticationService.logout();
        this.props.history.push("/")
    }

    render() {
        return (
            <Menubar
                model={this.state.items}
                style={style}/>
        )
    }
}

export default withRouter(MenubarComponent)