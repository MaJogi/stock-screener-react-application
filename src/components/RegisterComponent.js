import React from "react";
import registerComponentStyle from "../componentStyles/RegisterComponentStyle.css";
import StockMarket from "../image/StockMarket.PNG";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Password} from "primereact/password";
import AuthenticationService from "../services/AuthenticationService";
import Form from "react-validation/build/form";
import {Messages} from "primereact/messages";

class RegisterComponent extends React.Component {

    constructor(props) {
        super(props);
        this.registerUser = this.registerUser.bind(this);

        this.state = {
            username: "",
            firstName: "",
            lastName: "",
            password: "",
            isFormDisplayed: true,
            isLoginButtonDisplayed: false,
            message: ""
        };
    }

    registerUser(e) {
        e.preventDefault();

        AuthenticationService.registerUser(
            this.state.username,
            this.state.firstName,
            this.state.lastName,
            this.state.password
        ).then(
            response => {
                this.setState({
                    message: response.data.message,
                    isFormDisplayed: false,
                    isLoginButtonDisplayed: true
                });
                this.showSuccess()
            },
            error => {
                const responseMessage = error.response.data.message;
                this.setState({
                    message: responseMessage
                });
                this.showError()
            });
    }

    showSuccess = () => {
        this.messages.show({severity: "success", summary: "Success", detail: this.state.message, closable: false})
    }

    showError = () => {
        this.messages.show({severity: "error", detail: this.state.message, closable: false})
    }

    render() {
        const isFormDisplayed = this.state.isFormDisplayed;
        const isLoginButtonDisplayed = this.state.isLoginButtonDisplayed;
        return (
            <div style={registerComponentStyle.parentContainer}>
                <img src={StockMarket} style={registerComponentStyle.image} alt={"Stock Market"}/>
                <div className="p-col p-p-6">
                    <div className="p-card p-p-5">
                        <h2>Create your FinTrust account</h2>
                        <div>
                            {isFormDisplayed && <Form id="registerForm"
                                onSubmit={this.registerUser}
                            >
                            <h3>Fill in the details:</h3>
                            <div className="p-fluid p-formgrid p-grid">
                                <div className="p-field p-col-12 p-md-3">
                                    <label>Firstname</label>
                                    <InputText id="firstName"
                                               type="text"
                                               className="p-inputtext-lg p-d-block"
                                               value={this.state.firstName}
                                               required={true}
                                               pattern="^[a-z0-9_-]{2,50}$"
                                               title="Use alphanumeric characters, underscore or dash."
                                               onChange={(e) => this.setState({firstName: e.target.value})}/>
                                </div>
                                <div className="p-field p-col-12 p-md-3">
                                    <label>Lastname</label>
                                    <InputText id="lastName"
                                               type="text"
                                               className="p-inputtext-lg p-d-block"
                                               value={this.state.lastName}
                                               onChange={(e) => this.setState({lastName: e.target.value})}
                                               pattern="^[a-z0-9_-]{2,50}"
                                               title="Use alphanumeric characters, underscore or dash."
                                               required={true}/>
                                </div>
                            </div>
                            <div className="p-fluid p-formgrid p-grid">
                                <div className="p-field p-col-12 p-md-3">
                                    <label>Username</label>
                                    <InputText id="userName"
                                               type="text"
                                               className="p-inputtext-lg p-d-block"
                                               value={this.state.username}
                                               onChange={(e) => this.setState({username: e.target.value})}
                                               pattern="^[a-z0-9_-]{5,20}"
                                               title="Use alphanumeric characters, underscore or dash."
                                               required={true}/>
                                </div>
                                <div className="p-field p-col-12 p-md-3">
                                    <label>Password</label>
                                    <Password id="password"
                                              className="p-inputtext-lg p-d-block"
                                              value={this.state.password}
                                              onChange={(e) => this.setState({password: e.target.value})}
                                              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,50}"
                                              title="Password must contain at least one uppercase and lowercase letter and one number, minimum 6 characters."
                                              required={true}/>
                                </div>
                            </div>
                            <div className="p-field p-grid">
                                <div>
                                    <Button label="Create Account" className="p-button-success"></Button>
                                </div>
                            </div>
                            </Form> }
                        </div>
                        <Messages ref={(el) => this.messages = el}/>
                        <div>
                            {isLoginButtonDisplayed && <Button label="Proceed to login?" className="p-button-success" onClick= {() => (this.props.history.push("/login"))}></Button>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default RegisterComponent