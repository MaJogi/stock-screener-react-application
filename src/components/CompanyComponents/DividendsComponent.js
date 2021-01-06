import React from "react";
import {Fieldset} from "primereact/fieldset";
import fieldSetStyle from "../../componentStyles/CompanyInfoStyle.css";

class DividendsComponent extends React.Component {
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

        const millionValue = (numericPropValue) => {
            if (numericPropValue === null) {
                return nullValue
            } else {
                return (
                    <span style={{fontWeight: "normal"}}>
                        {numericPropValue / 1000}M
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
                <Fieldset style={fieldSetStyle} legend="Dividends" toggleable collapsed={this.state.panelCollapsed} onToggle={(e) => this.setState({panelCollapsed: e.value})}>
                    <h4 className="dividendYield">Dividend Yield: {percentageValue(this.state.ticker.financialsDaily.div_yield)}</h4>
                    <h4>Dividends Paid: {millionValue(this.state.ticker.financialsQuarterly.div_paid)}</h4>
                    <h4>Dividends Per Share (FY): {value(this.state.ticker.financialsQuarterly.div_per_share)}</h4>
                    <h4 className="shares">Shares: {millionValue(this.state.ticker.financialsQuarterly.shares)}</h4>
                </Fieldset>
            </div>
        )
    }
}export default DividendsComponent