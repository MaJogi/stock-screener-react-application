import React from "react";
import KeyRatiosComponent from "../CompanyComponents/KeyRatiosComponent";
import FinancialsComponent from "../CompanyComponents/FinancialsComponent";
import PerformanceComponent from "../CompanyComponents/PerformanceComponent";
import DividendsComponent from "../CompanyComponents/DividendsComponent";

class CompareChartComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tickerCompareFirst: {
                financialsDaily: {},
                financialsQuarterly: {}
            },
            tickerCompareSecond: {
                financialsDaily: {},
                financialsQuarterly: {}
            }
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({
            tickerCompareFirst: this.props.tickerFirstSelected,
            tickerCompareSecond: this.props.tickerSecondSelected
        }), 500)
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
                <div className="p-d-flex p-p-3">
                    <div className="p-mr-2 p-col p-card">
                        <h3>{value(this.state.tickerCompareFirst.name)}</h3>
                        <h4 className="tickerId">Ticker: {value(this.state.tickerCompareFirst.ticker_id)}</h4>
                        <h4>Sector: {value(this.state.tickerCompareFirst.sector)}</h4>
                        <h4>Industry: {value(this.state.tickerCompareFirst.industry)}</h4>
                        <h4>Employees: {value(this.state.tickerCompareFirst.employees)}</h4>
                    </div>
                    <div className="p-mr-2 p-col p-card">
                        <h3>{value(this.state.tickerCompareSecond.name)}</h3>
                        <h4>Ticker: {value(this.state.tickerCompareSecond.ticker_id)}</h4>
                        <h4>Sector: {value(this.state.tickerCompareSecond.sector)}</h4>
                        <h4>Industry: {value(this.state.tickerCompareSecond.industry)}</h4>
                        <h4>Employees: {value(this.state.tickerCompareSecond.employees)}</h4>
                    </div>
                </div>
                <div className="p-d-flex p-p-3">
                    <KeyRatiosComponent tickerSelected={this.props.tickerFirstSelected}/>
                    <KeyRatiosComponent tickerSelected={this.props.tickerSecondSelected}/>
                </div>
                <div className="p-d-flex p-p-3">
                    <FinancialsComponent tickerSelected={this.props.tickerFirstSelected}/>
                    <FinancialsComponent tickerSelected={this.props.tickerSecondSelected}/>
                </div>
                <div className="p-d-flex p-p-3">
                    <PerformanceComponent tickerSelected={this.props.tickerFirstSelected}/>
                    <PerformanceComponent tickerSelected={this.props.tickerSecondSelected}/>
                </div>
                <div className="p-d-flex p-p-3">
                    <DividendsComponent tickerSelected={this.props.tickerFirstSelected}/>
                    <DividendsComponent tickerSelected={this.props.tickerSecondSelected}/>
                </div>
            </div>
        )
    }
}

export default CompareChartComponent