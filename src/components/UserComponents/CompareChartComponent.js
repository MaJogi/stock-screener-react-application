import React from "react";
import {Fieldset} from "primereact/fieldset";
import fieldSetStyle from "../../componentStyles/CompanyInfoStyle.css";

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
            <div>
                <div className="p-d-flex p-p-3">
                    <div className="p-mr-2 p-col p-card">
                        <h3>{value(this.state.tickerCompareFirst.name)}</h3>
                        <h4>Ticker: {value(this.state.tickerCompareFirst.ticker_id)}</h4>
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
                    <div className="p-mr-2 p-col">
                        <Fieldset style={fieldSetStyle} legend="Key Ratios" toggleable collapsed={this.state.panelCollapsed} onToggle={(e) => this.setState({panelCollapsed: e.value})}>
                            <h4>Current Ratio: {value(this.state.tickerCompareFirst.financialsQuarterly.current_ratio)}</h4>
                            <h4>Debt/Equity: {value(this.state.tickerCompareFirst.financialsQuarterly.debt_to_equity)}</h4>
                            <h4>EPS (FY): {value(this.state.tickerCompareFirst.financialsQuarterly.eps_fy)}</h4>
                            <h4>EPS (TTM): {value(this.state.tickerCompareFirst.financialsQuarterly.eps_ttm)}</h4>
                            <h4>EPS Diluted (FY): {value(this.state.tickerCompareFirst.financialsQuarterly.eps_diluted_fy)}</h4>
                            <h4>EPS Diluted (TTM): {value(this.state.tickerCompareFirst.financialsQuarterly.eps_diluted_ttm)}</h4>
                            <h4>EV/EBITDA: {value(this.state.tickerCompareFirst.financialsDaily.ev_ebitda)}</h4>
                            <h4>Gross Margin: {percentageValue(this.state.tickerCompareFirst.financialsQuarterly.gross_mrq)}</h4>
                            <h4>Net Margin: {percentageValue(this.state.tickerCompareFirst.financialsQuarterly.net_mrq)}</h4>
                            <h4>Operating Margin: {percentageValue(this.state.tickerCompareFirst.financialsQuarterly.operating_mrq)}</h4>
                            <h4>Pretax Margin: {percentageValue(this.state.tickerCompareFirst.financialsQuarterly.pretax_mrq)}</h4>
                            <h4>Price/Revenue: {value(this.state.tickerCompareFirst.financialsDaily.price_rev)}</h4>
                            <h4>P/B: {value(this.state.tickerCompareFirst.financialsDaily.p_b)}</h4>
                            <h4>P/E: {value(this.state.tickerCompareFirst.financialsDaily.p_e)}</h4>
                            <h4>Quick Ratio: {value(this.state.tickerCompareFirst.financialsQuarterly.quick_ratio)}</h4>
                            <h4>ROA: {percentageValue(this.state.tickerCompareFirst.financialsQuarterly.roa)}</h4>
                            <h4>ROE: {percentageValue(this.state.tickerCompareFirst.financialsQuarterly.roe)}</h4>
                        </Fieldset>
                    </div>
                    <div className="p-mr-2 p-col">
                        <Fieldset style={fieldSetStyle} legend="Key Ratios" toggleable collapsed={this.state.panelCollapsed} onToggle={(e) => this.setState({panelCollapsed: e.value})}>
                            <h4>Current Ratio: {value(this.state.tickerCompareSecond.financialsQuarterly.current_ratio)}</h4>
                            <h4>Debt/Equity: {value(this.state.tickerCompareSecond.financialsQuarterly.debt_to_equity)}</h4>
                            <h4>EPS (FY): {value(this.state.tickerCompareSecond.financialsQuarterly.eps_fy)}</h4>
                            <h4>EPS (TTM): {value(this.state.tickerCompareSecond.financialsQuarterly.eps_ttm)}</h4>
                            <h4>EPS Diluted (FY): {value(this.state.tickerCompareSecond.financialsQuarterly.eps_diluted_fy)}</h4>
                            <h4>EPS Diluted (TTM): {value(this.state.tickerCompareSecond.financialsQuarterly.eps_diluted_ttm)}</h4>
                            <h4>EV/EBITDA: {value(this.state.tickerCompareSecond.financialsDaily.ev_ebitda)}</h4>
                            <h4>Gross Margin: {percentageValue(this.state.tickerCompareSecond.financialsQuarterly.gross_mrq)}</h4>
                            <h4>Net Margin: {percentageValue(this.state.tickerCompareSecond.financialsQuarterly.net_mrq)}</h4>
                            <h4>Operating Margin: {percentageValue(this.state.tickerCompareSecond.financialsQuarterly.operating_mrq)}</h4>
                            <h4>Pretax Margin: {percentageValue(this.state.tickerCompareSecond.financialsQuarterly.pretax_mrq)}</h4>
                            <h4>Price/Revenue: {value(this.state.tickerCompareSecond.financialsDaily.price_rev)}</h4>
                            <h4>P/B: {value(this.state.tickerCompareSecond.financialsDaily.p_b)}</h4>
                            <h4>P/E: {value(this.state.tickerCompareSecond.financialsDaily.p_e)}</h4>
                            <h4>Quick Ratio: {value(this.state.tickerCompareSecond.financialsQuarterly.quick_ratio)}</h4>
                            <h4>ROA: {percentageValue(this.state.tickerCompareSecond.financialsQuarterly.roa)}</h4>
                            <h4>ROE: {percentageValue(this.state.tickerCompareSecond.financialsQuarterly.roe)}</h4>
                        </Fieldset>
                    </div>
                </div>
                <div className="p-d-flex p-p-3">
                    <div className="p-mr-2 p-col">
                        <Fieldset style={fieldSetStyle} legend="Financials" toggleable collapsed={this.state.panelCollapsed3} onToggle={(e) => this.setState({panelCollapsed3: e.value})}>
                            <h4>Annual Revenue: {millionValue(this.state.tickerCompareFirst.financialsQuarterly.annual_revenue)}</h4>
                            <h4>Assets: {millionValue(this.state.tickerCompareFirst.financialsQuarterly.assets)}</h4>
                            <h4>Debt: {millionValue(this.state.tickerCompareFirst.financialsQuarterly.debt)}</h4>
                            <h4>EBITDA: {millionValue(this.state.tickerCompareFirst.financialsQuarterly.ebitda)}</h4>
                            <h4>Enterprise Value: {millionValue(this.state.tickerCompareFirst.financialsDaily.ev)}</h4>
                            <h4>Gross Profit (FY): {millionValue(this.state.tickerCompareFirst.financialsQuarterly.gross_profit_fy)}</h4>
                            <h4>Gross Profit (MRQ): {millionValue(this.state.tickerCompareFirst.financialsQuarterly.gross_profit_mrq)}</h4>
                            <h4>Income: {millionValue(this.state.tickerCompareFirst.financialsQuarterly.income)}</h4>
                            <h4>Market Cap: {millionValue(this.state.tickerCompareFirst.financialsDaily.mkt_cap)}</h4>
                            <h4>Net Debt: {millionValue(this.state.tickerCompareFirst.financialsQuarterly.net_debt)}</h4>
                            <h4>Revenue: {millionValue(this.state.tickerCompareFirst.financialsQuarterly.revenue)}</h4>
                        </Fieldset>
                    </div>
                    <div className="p-mr-2 p-col">
                        <Fieldset style={fieldSetStyle} legend="Financials" toggleable collapsed={this.state.panelCollapsed3} onToggle={(e) => this.setState({panelCollapsed3: e.value})}>
                            <h4>Annual Revenue: {millionValue(this.state.tickerCompareSecond.financialsQuarterly.annual_revenue)}</h4>
                            <h4>Assets: {millionValue(this.state.tickerCompareSecond.financialsQuarterly.assets)}</h4>
                            <h4>Debt: {millionValue(this.state.tickerCompareSecond.financialsQuarterly.debt)}</h4>
                            <h4>EBITDA: {millionValue(this.state.tickerCompareSecond.financialsQuarterly.ebitda)}</h4>
                            <h4>Enterprise Value: {millionValue(this.state.tickerCompareSecond.financialsDaily.ev)}</h4>
                            <h4>Gross Profit (FY): {millionValue(this.state.tickerCompareSecond.financialsQuarterly.gross_profit_fy)}</h4>
                            <h4>Gross Profit (MRQ): {millionValue(this.state.tickerCompareSecond.financialsQuarterly.gross_profit_mrq)}</h4>
                            <h4>Income: {millionValue(this.state.tickerCompareSecond.financialsQuarterly.income)}</h4>
                            <h4>Market Cap: {millionValue(this.state.tickerCompareSecond.financialsDaily.mkt_cap)}</h4>
                            <h4>Net Debt: {millionValue(this.state.tickerCompareSecond.financialsQuarterly.net_debt)}</h4>
                            <h4>Revenue: {millionValue(this.state.tickerCompareSecond.financialsQuarterly.revenue)}</h4>
                        </Fieldset>
                    </div>
                </div>
                <div className="p-d-flex p-p-3">
                    <div className="p-mr-2 p-col">
                        <Fieldset style={fieldSetStyle} legend="Performance" toggleable collapsed={this.state.panelCollapsed4} onToggle={(e) => this.setState({panelCollapsed4: e.value})}>
                            <h4>Change: {percentageValue(this.state.tickerCompareFirst.financialsDaily.chg)}</h4>
                            <h4>Weekly Performance: {percentageValue(this.state.tickerCompareFirst.financialsDaily.weekly_perf)}</h4>
                            <h4>Monthly Performance: {percentageValue(this.state.tickerCompareFirst.financialsDaily.monthly_perf)}</h4>
                            <h4>3 Month Performance: {percentageValue(this.state.tickerCompareFirst.financialsDaily.three_month_perf)}</h4>
                            <h4>6 Month Performance: {percentageValue(this.state.tickerCompareFirst.financialsDaily.six_month_perf)}</h4>
                            <h4>YTD Performance {percentageValue(this.state.tickerCompareFirst.financialsDaily.ytd_perf)}</h4>
                            <h4>1 Year Performance: {percentageValue(this.state.tickerCompareFirst.financialsDaily.yearly_perf)}</h4>
                            <h4>1 Year Beta: {value(this.state.tickerCompareFirst.financialsDaily.one_year_beta)}</h4>
                            <h4>Volatility: {percentageValue(this.state.tickerCompareFirst.financialsDaily.volatility)}</h4>
                        </Fieldset>
                    </div>
                    <div className="p-mr-2 p-col">
                        <Fieldset style={fieldSetStyle} legend="Performance" toggleable collapsed={this.state.panelCollapsed4} onToggle={(e) => this.setState({panelCollapsed4: e.value})}>
                            <h4>Change: {percentageValue(this.state.tickerCompareSecond.financialsDaily.chg)}</h4>
                            <h4>Weekly Performance: {percentageValue(this.state.tickerCompareSecond.financialsDaily.weekly_perf)}</h4>
                            <h4>Monthly Performance: {percentageValue(this.state.tickerCompareSecond.financialsDaily.monthly_perf)}</h4>
                            <h4>3 Month Performance: {percentageValue(this.state.tickerCompareSecond.financialsDaily.three_month_perf)}</h4>
                            <h4>6 Month Performance: {percentageValue(this.state.tickerCompareSecond.financialsDaily.six_month_perf)}</h4>
                            <h4>YTD Performance {percentageValue(this.state.tickerCompareSecond.financialsDaily.ytd_perf)}</h4>
                            <h4>1 Year Performance: {percentageValue(this.state.tickerCompareSecond.financialsDaily.yearly_perf)}</h4>
                            <h4>1 Year Beta: {value(this.state.tickerCompareSecond.financialsDaily.one_year_beta)}</h4>
                            <h4>Volatility: {percentageValue(this.state.tickerCompareSecond.financialsDaily.volatility)}</h4>
                        </Fieldset>
                    </div>
                </div>
                <div className="p-d-flex p-p-3">
                    <div className="p-mr-2 p-col">
                        <Fieldset style={fieldSetStyle} legend="Dividends" toggleable collapsed={this.state.panelCollapsed5} onToggle={(e) => this.setState({panelCollapsed5: e.value})}>
                            <h4>Dividend Yield: {percentageValue(this.state.tickerCompareFirst.financialsDaily.div_yield)}</h4>
                            <h4>Dividends Paid: {millionValue(this.state.tickerCompareFirst.financialsQuarterly.div_paid)}</h4>
                            <h4>Dividends Per Share (FY): {value(this.state.tickerCompareFirst.financialsQuarterly.div_per_share)}</h4>
                            <h4>Shares: {millionValue(this.state.tickerCompareFirst.financialsQuarterly.shares)}</h4>
                        </Fieldset>
                    </div>
                    <div className="p-mr-2 p-col">
                        <Fieldset style={fieldSetStyle} legend="Dividends" toggleable collapsed={this.state.panelCollapsed5} onToggle={(e) => this.setState({panelCollapsed5: e.value})}>
                            <h4>Dividend Yield: {percentageValue(this.state.tickerCompareSecond.financialsDaily.div_yield)}</h4>
                            <h4>Dividends Paid: {millionValue(this.state.tickerCompareSecond.financialsQuarterly.div_paid)}</h4>
                            <h4>Dividends Per Share (FY): {value(this.state.tickerCompareSecond.financialsQuarterly.div_per_share)}</h4>
                            <h4>Shares: {millionValue(this.state.tickerCompareSecond.financialsQuarterly.shares)}</h4>
                        </Fieldset>
                    </div>
                </div>
            </div>
        )
    }
}

export default CompareChartComponent