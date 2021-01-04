import React from "react";
import {Fieldset} from "primereact/fieldset";
import fieldSetStyle from "../../componentStyles/CompanyInfoStyle.css";

class KeyRatiosComponent extends React.Component {
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
                <Fieldset style={fieldSetStyle} legend="Key Ratios" toggleable collapsed={this.state.panelCollapsed} onToggle={(e) => this.setState({panelCollapsed: e.value})}>
                    <h4>Current Ratio: {value(this.state.ticker.financialsQuarterly.current_ratio)}</h4>
                    <h4>Debt/Equity: {value(this.state.ticker.financialsQuarterly.debt_to_equity)}</h4>
                    <h4>EPS (FY): {value(this.state.ticker.financialsQuarterly.eps_fy)}</h4>
                    <h4>EPS (TTM): {value(this.state.ticker.financialsQuarterly.eps_ttm)}</h4>
                    <h4>EPS Diluted (FY): {value(this.state.ticker.financialsQuarterly.eps_diluted_fy)}</h4>
                    <h4>EPS Diluted (TTM): {value(this.state.ticker.financialsQuarterly.eps_diluted_ttm)}</h4>
                    <h4>EV/EBITDA: {value(this.state.ticker.financialsDaily.ev_ebitda)}</h4>
                    <h4>Gross Margin: {percentageValue(this.state.ticker.financialsQuarterly.gross_mrq)}</h4>
                    <h4>Net Margin: {percentageValue(this.state.ticker.financialsQuarterly.net_mrq)}</h4>
                    <h4>Operating Margin: {percentageValue(this.state.ticker.financialsQuarterly.operating_mrq)}</h4>
                    <h4>Pretax Margin: {percentageValue(this.state.ticker.financialsQuarterly.pretax_mrq)}</h4>
                    <h4>Price/Revenue: {value(this.state.ticker.financialsDaily.price_rev)}</h4>
                    <h4>P/B: {value(this.state.ticker.financialsDaily.p_b)}</h4>
                    <h4>P/E: {value(this.state.ticker.financialsDaily.p_e)}</h4>
                    <h4>Quick Ratio: {value(this.state.ticker.financialsQuarterly.quick_ratio)}</h4>
                    <h4>ROA: {percentageValue(this.state.ticker.financialsQuarterly.roa)}</h4>
                    <h4>ROE: {percentageValue(this.state.ticker.financialsQuarterly.roe)}</h4>
                </Fieldset>
            </div>
        )
    }
}
export default KeyRatiosComponent