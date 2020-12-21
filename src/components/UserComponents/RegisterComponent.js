import React from "react";
import registerComponentStyle from "../../componentStyles/RegisterComponentStyle.css";
import StockMarket from "../../image/StockMarket.PNG";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Password} from "primereact/password";
import AuthenticationService from "../../services/AuthenticationService";
import Form from "react-validation/build/form";
import {Messages} from "primereact/messages";

class RegisterComponent extends React.Component {

    constructor(props) {
        super(props);
        this.registerUser = this.registerUser.bind(this);

        this.state = {
            username: "",
            first_name: "",
            last_name: "",
            password: "",
            isFormDisplayed: true,
            isLoginButtonDisplayed: false,
            message: ""
        };
    }

    registerUser(e) {
        e.preventDefault();

        AuthenticationService.register(
            this.state.username,
            this.state.first_name,
            this.state.last_name,
            this.state.password
        ).then(
            response => {
                this.setState({
                    message: response.data.message,
                    isFormDisplayed: false,
                    isLoginButtonDisplayed: true
                });
                this.showSuccess()
            })
            .catch(
                error => {
                    console.log(error)
        })
    }

    showSuccess = () => {
        this.messages.show({severity: "success", summary: "Success", detail: this.state.message, closable: false})
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
                            {isFormDisplayed && <Form
                                onSubmit={this.registerUser}
                            >
                            <h3>Fill in the details:</h3>
                            <div className="p-fluid p-formgrid p-grid">
                                <div className="p-field p-col-12 p-md-3">
                                    <label htmlFor="firstname">Firstname</label>
                                    <InputText type="text" className="p-inputtext-lg p-d-block" value={this.state.first_name}
                                               minLength={2}
                                               maxLength={50}
                                               required={true}
                                               onChange={(e) => this.setState({first_name: e.target.value})}/>
                                </div>
                                <div className="p-field p-col-12 p-md-3">
                                    <label htmlFor="lastname">Lastname</label>
                                    <InputText type="text" className="p-inputtext-lg p-d-block" value={this.state.last_name}
                                               onChange={(e) => this.setState({last_name: e.target.value})}
                                               minLength={2}
                                               maxLength={50}
                                               required={true}/>
                                </div>
                            </div>
                            <div className="p-fluid p-formgrid p-grid">
                                <div className="p-field p-col-12 p-md-3">
                                    <label htmlFor="username">Username</label>
                                    <InputText type="text" className="p-inputtext-lg p-d-block" value={this.state.username}
                                               onChange={(e) => this.setState({username: e.target.value})}
                                               minLength={5}
                                               maxLength={20}
                                               required={true}/>
                                </div>
                                <div className="p-field p-col-12 p-md-3">
                                    <label htmlFor="password">Password</label>
                                    <Password className="p-inputtext-lg p-d-block" value={this.state.password}
                                              onChange={(e) => this.setState({password: e.target.value})}
                                              minLength={6}
                                              maxLength={50}
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