import React from "react";
import {Fieldset} from "primereact/fieldset";
import fieldSetStyle from "../../componentStyles/CompanyInfoStyle.css";

class PerformanceComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ticker: {
                financialsDaily: {},
                financialsQuarterly: {}
            }
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({
            ticker: this.props.tickerSelected
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

        const percentageValue = (percentagePropValue) => {
            if (percentagePropValue === null) {
                return nullValue
            } else {
                return (
                    <span style={{fontWeight: "normal"}}>
                        {(percentagePropValue * 100).toFixed(2)}%
                    </span>
                )
            }
        }

        return (
            <div className="p-mr-2 p-col">
                <Fieldset style={fieldSetStyle} legend="Performance" toggleable collapsed={this.state.panelCollapsed} onToggle={(e) => this.setState({panelCollapsed: e.value})}>
                    <h4>Change: {percentageValue(this.state.ticker.financialsDaily.chg)}</h4>
                    <h4 className="weeklyPerf">Weekly Performance: {percentageValue(this.state.ticker.financialsDaily.weekly_perf)}</h4>
                    <h4>Monthly Performance: {percentageValue(this.state.ticker.financialsDaily.monthly_perf)}</h4>
                    <h4>3 Month Performance: {percentageValue(this.state.ticker.financialsDaily.three_month_perf)}</h4>
                    <h4>6 Month Performance: {percentageValue(this.state.ticker.financialsDaily.six_month_perf)}</h4>
                    <h4>YTD Performance {percentageValue(this.state.ticker.financialsDaily.ytd_perf)}</h4>
                    <h4>1 Year Performance: {percentageValue(this.state.ticker.financialsDaily.yearly_perf)}</h4>
                    <h4 className="oneYearBeta">1 Year Beta: {value(this.state.ticker.financialsDaily.one_year_beta)}</h4>
                    <h4>Volatility: {percentageValue(this.state.ticker.financialsDaily.volatility)}</h4>
                </Fieldset>
            </div>
        )
    }
}
export default PerformanceComponent