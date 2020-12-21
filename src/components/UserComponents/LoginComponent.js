import React from "react";
import {Button} from "primereact/button";
import StockMarket from "../../image/StockMarket.PNG";
import loginComponentStyle from "../../componentStyles/LoginComponentStyle.css.js";
import AuthenticationService from "../../services/AuthenticationService";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {Password} from "primereact/password";
import {InputText} from "primereact/inputtext";

const required = value => {
    if (!value) {
        return (
            <div className="p-text-bold" role="alert">
                This field is required!
            </div>
        );
    }
};

class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
            message: ""
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            message: "",
            loading: true
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthenticationService.login(this.state.username, this.state.password).then(
                () => {
                    this.props.history.push("user/" + this.state.username);
                    window.location.reload();
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );
        } else {
            this.setState({
                loading: false
            });
        }
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
                            <label htmlFor="username" className="p-col-fixed" style={{width:'100px'}}>Username</label>
                            <div className="p-col">
                                <InputText type="text" className="p-inputtext-lg p-d-block" name="username"
                                       value={this.state.username} onChange={this.onChangeUsername} validations={[required]}/>
                            </div>
                        </div>
                        <div className="p-field p-grid">
                            <label htmlFor="password" className="p-col-fixed" style={{width:'100px'}}>Password</label>
                            <div className="p-col">
                                <Password feedback={false} type="text" className="p-inputtext-lg p-d-block" name="password"
                                       value={this.state.password} onChange={this.onChangePassword} validations={[required]}/>
                            </div>
                        </div>
                        <div className="p-field p-grid">
                            <div>
                                <Button label="Login" className="p-mr-4 "/>
                            </div>
                        </div>
                            {this.state.message && (
                                <div className="form-group">
                                    <div className="alert alert-danger" role="alert">
                                        {this.state.message}
                                    </div>
                                </div>
                            )}
                            <CheckButton
                                style={{ display: "none" }}
                                ref={c => {
                                    this.checkBtn = c;
                                }}
                            />
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginComponent