import React from "react";
import {Messages} from "primereact/messages";
import inputStyle from "../componentStyles/HomeComponentStyle.css";
import homeComponentStyle from "../componentStyles/HomeComponentStyle.css.js";
import StockMarket from "../image/StockMarket.PNG";
import {AutoComplete} from "primereact/autocomplete";
import {Button} from "primereact/button";
import CompanyService from "../services/CompanyService";

class HomeComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            tickers: [],
            filteredTickers: [],
            ticker: ""
        }
    }

    componentDidMount() {
        document.body.style.overflow = "hidden"
        CompanyService.getAllCompanies()
            .then(response => {
                this.setState({
                    tickers: response.data.map(obj => obj.ticker_id)
                })
            })
    }

    componentWillUnmount() {
        document.body.style.overflow = null
    }

    filterTickers = (event) => {
        setTimeout(() => {
            let results = this.state.tickers.filter((ticker) => {
                return ticker.toLowerCase().startsWith(event.query.toLowerCase());
            })
            this.setState({
                filteredTickers: results
            })
        }, 250)
    }

    onSearch = () => {
        if (this.state.tickers.includes(this.state.ticker.toUpperCase())) {
            window.open(("screener/" + this.state.ticker.toUpperCase()), "_blank")
        } else {
            this.showError()
        }
    }

    showError = () => {
        this.messages.show({severity: "error", summary: "Error message", detail: "Enter a valid ticker symbol!", closable: false})
    }

    render() {
        return (
            <div style={homeComponentStyle.parentContainer}>
                <img src={StockMarket} style={homeComponentStyle.image} alt={"Stock Market"}/>
                <div style={homeComponentStyle.upperContainer}>
                    <h1 style={homeComponentStyle.h1}>
                        Welcome to FinTrust!
                    </h1>
                    <h2 style={homeComponentStyle.h2}>
                        Your guide to the Tallinn Stock Exchange
                    </h2>
                    <Messages ref={(el) => this.messages = el}/>
                    <div style={homeComponentStyle.inputGroup}>
                        <div style={inputStyle} className="p-inputgroup">
                            <AutoComplete value={this.state.ticker}
                                          suggestions={this.state.filteredTickers}
                                          completeMethod={this.filterTickers}
                                          size={this.state.tickers.size}
                                          placeholder={"Search"}
                                          minLength={1}
                                          onChange={(e) => this.setState({ticker: e.value})}/>
                            <Button icon={"pi pi-search"} onClick={this.onSearch}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeComponent