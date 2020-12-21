import React from "react";
import {AutoComplete} from "primereact/autocomplete";
import {Button} from "primereact/button";
import UserService from "../../services/UserService";
import {Messages} from "primereact/messages";
import CompareChartComponent from "./CompareChartComponent";

class CompareHeaderComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tickerFirstSelected: {
                financialsDaily: {},
                financialsQuarterly: {}
            },
            tickerSecondSelected: {
                financialsDaily: {},
                financialsQuarterly: {}
            },
            allTickers: [],
            filteredTickers: [],
            tickerFirstValue: "",
            tickerSecondValue: "",
            displayComparison: false
        }
    }

    componentDidMount() {
        UserService.getPublicContent()
            .then(response => {
                this.setState({
                    allTickers: response.data.map(obj => obj.ticker_id)
                })
            });
    }

    filterTickers = (event) => {
        setTimeout(() => {
            let results = this.state.allTickers.filter((addTicker) => {
                return addTicker.toLowerCase().startsWith(event.query.toLowerCase());
            })
            this.setState({
                filteredTickers: results
            })
        }, 250)
    }

    onCompare = () => {
        if (this.state.allTickers.includes(this.state.tickerFirstValue.toUpperCase()) && this.state.allTickers.includes(this.state.tickerSecondValue.toUpperCase())
        && this.state.tickerFirstValue.toUpperCase() !== this.state.tickerSecondValue.toUpperCase()) {

            UserService.getCompanyById(this.state.tickerFirstValue)
                .then(response => {
                    this.setState({tickerFirstSelected: response.data})
                })

            UserService.getCompanyById(this.state.tickerSecondValue)
                .then(response => {
                    this.setState({tickerSecondSelected: response.data})
                })
            this.setState({ displayComparison: true })
        } else {
            this.showError()
        }
    }

    onClear = () => {
        this.setState(
            { displayComparison: false, tickerFirstValue: "", tickerSecondValue: "" }
        )
    }

    showError = () => {
        this.messages.show({severity: "error", summary: "Error message", detail: "Enter valid ticker values!", closable: false})
    }

    render() {
        const displayComparison = this.state.displayComparison;
        return (
            <div>
                <div className="p-d-flex p-p-3 card">
                    <h2>Compare the companies!</h2>
                </div>
                <div className="p-d-flex p-p-2">
                    <div className="p-mr-2 p-mb-2 p-col">
                        <AutoComplete value={this.state.tickerFirstValue}
                                      suggestions={this.state.filteredTickers}
                                      completeMethod={this.filterTickers}
                                      minLength={1}
                                      className="p-mr-4 p-mb-3"
                                      onChange={(e) => this.setState({tickerFirstValue: e.value})}/>
                        <AutoComplete value={this.state.tickerSecondValue}
                                      suggestions={this.state.filteredTickers}
                                      completeMethod={this.filterTickers}
                                      minLength={1}
                                      className="p-mr-4 p-mb-3"
                                      onChange={(e) => this.setState({tickerSecondValue: e.value})}/>
                        <Button type="Button" label="Compare!" className="p-button-success p-mr-4 p-mb-3" onClick={this.onCompare} />
                        <Button type="Button" label="Clear" className="p-mr-4 p-mb-3" onClick={this.onClear}/>
                    </div>
                </div>
                <Messages ref={(el) => this.messages = el}/>
                {displayComparison && <CompareChartComponent tickerFirstSelected={this.state.tickerFirstSelected} tickerSecondSelected={this.state.tickerSecondSelected}/>}
            </div>
        )
    }
}
export default CompareHeaderComponent