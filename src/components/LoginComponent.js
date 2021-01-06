import React from "react";
import {Button} from "primereact/button";
import StockMarket from "../image/StockMarket.PNG";
import loginComponentStyle from "../componentStyles/LoginComponentStyle.css.js";
import AuthenticationService from "../services/AuthenticationService";
import Form from "react-validation/build/form";
import {Password} from "primereact/password";
import {InputText} from "primereact/inputtext";
import {Messages} from "primereact/messages";

class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
            username: "",
            password: "",
            message: ""
        };
    }

    handleLogin(e) {
        e.preventDefault();

        AuthenticationService.loginUser(
            this.state.username,
            this.state.password
        ).then(
            () => {
                this.props.history.push("user/" + this.state.username);
                window.location.reload();
            },
            error => {
                const responseMessage = error.response.data.message;
                this.setState({
                    message: responseMessage
                });
                this.showError()
            });
    }

    showError = () => {
        this.messages.show({severity: "error", detail: this.state.message, closable: false})
    }

    render() {
        return (
            <div style={loginComponentStyle.parentContainer}>
                <img src={StockMarket} style={loginComponentStyle.image} alt={"Stock Market"}/>
                <div className="p-col p-p-6">
                    <div className="p-card p-p-5">
                        <h2>Welcome back!</h2>
                        <h3>Login to FinTrust:</h3>
                        <Form
                        onSubmit={this.handleLogin}
                        ref={c => {
                            this.form = c;
                        }}
                    >
                        <div className="p-field p-grid">
                            <label className="p-col-fixed" style={{width:'100px'}}>Username</label>
                            <div className="p-col">
                                <InputText
                                    id="userName"
                                    type="text"
                                    className="p-inputtext-lg p-d-block"
                                    name="username"
                                    required={true}
                                    pattern="^[A-Za-z0-9_-]{2,50}$"
                                    value={this.state.username}
                                    onChange={(e) => this.setState({username: e.target.value})}/>
                            </div>
                        </div>
                        <div className="p-field p-grid">
                            <label className="p-col-fixed" style={{width:'100px'}}>Password</label>
                            <div className="p-col">
                                <Password
                                    id="password"
                                    feedback={false}
                                    type="text"
                                    className="p-inputtext-lg p-d-block"
                                    name="password"
                                    required={true}
                                    pattern="^[A-Za-z0-9_-]{6,50}$"
                                    value={this.state.password}
                                    onChange={(e) => this.setState({password: e.target.value})}/>
                            </div>
                        </div>
                        <div className="p-field p-grid">
                            <div>
                                <Button label="Login" className="p-mr-4 "/>
                            </div>
                        </div>
                            <Messages ref={(el) => this.messages = el}/>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginComponent