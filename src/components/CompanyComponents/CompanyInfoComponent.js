import React from "react";
import KeyRatiosComponent from "./KeyRatiosComponent";
import FinancialsComponent from "./FinancialsComponent";
import PerformanceComponent from "./PerformanceComponent";
import DividendsComponent from "./DividendsComponent";
import CompanyService from "../../services/CompanyService";

class CompanyInfoComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            ticker: {
                financialsDaily: {},
                financialsQuarterly: {}
            }
        }
    }

    componentDidMount() {
        CompanyService.getCompanyById(this.state.id)
            .then(response => {
                if (response.data !== null) {
                    this.setState({
                        ticker: response.data
                    })
                }
            })
    }

    render() {

        const nullValue = (
            <span style={{fontWeight: "normal"}}>
                -
            </span>
        )

        const value = (propValue) => {
            if (propValue === null) {
                return nullValue
            } else {
                return (
                    <span style={{fontWeight: "normal"}}>
                         {propValue}
                    </span>
                )
            }
        }

        return (
            <div>
                <h1>Ticker: {value(this.state.ticker.ticker_id)}</h1>
                <h2>Name: {value(this.state.ticker.name)}</h2>
                <h3>Sector: {value(this.state.ticker.sector)}</h3>
                <h3>Industry: {value(this.state.ticker.industry)}</h3>
                <h3>Employees: {value(this.state.ticker.employees)}</h3>
                <div>
                    <div className="p-d-flex p-p-3">
                        <KeyRatiosComponent tickerSelected={this.state.ticker}/>
                        <FinancialsComponent tickerSelected={this.state.ticker}/>
                    </div>
                    <div className="p-d-flex p-p-3">
                        <PerformanceComponent tickerSelected={this.state.ticker}/>
                        <DividendsComponent tickerSelected={this.state.ticker}/>
                    </div>
                </div>
            </div>
        )
    }
}


export default CompanyInfoComponent