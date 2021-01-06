import React from "react";
import {Fieldset} from "primereact/fieldset";
import fieldSetStyle from "../../componentStyles/CompanyInfoStyle.css";

class FinancialsComponent extends React.Component {
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

        return (
            <div className="p-mr-2 p-col">
                <Fieldset style={fieldSetStyle} legend="Financials" toggleable collapsed={this.state.panelCollapsed} onToggle={(e) => this.setState({panelCollapsed: e.value})}>
                    <h4>Annual Revenue: {millionValue(this.state.ticker.financialsQuarterly.annual_revenue)}</h4>
                    <h4 className="assets">Assets: {millionValue(this.state.ticker.financialsQuarterly.assets)}</h4>
                    <h4>Debt: {millionValue(this.state.ticker.financialsQuarterly.debt)}</h4>
                    <h4>EBITDA: {millionValue(this.state.ticker.financialsQuarterly.ebitda)}</h4>
                    <h4>Enterprise Value: {millionValue(this.state.ticker.financialsDaily.ev)}</h4>
                    <h4>Gross Profit (FY): {millionValue(this.state.ticker.financialsQuarterly.gross_profit_fy)}</h4>
                    <h4>Gross Profit (MRQ): {millionValue(this.state.ticker.financialsQuarterly.gross_profit_mrq)}</h4>
                    <h4>Income: {millionValue(this.state.ticker.financialsQuarterly.income)}</h4>
                    <h4>Market Cap: {millionValue(this.state.ticker.financialsDaily.mkt_cap)}</h4>
                    <h4>Net Debt: {millionValue(this.state.ticker.financialsQuarterly.net_debt)}</h4>
                    <h4>Revenue: {millionValue(this.state.ticker.financialsQuarterly.revenue)}</h4>
                </Fieldset>
            </div>
        )
    }
}
export default FinancialsComponent