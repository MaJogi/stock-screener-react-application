import React from "react";
import inputStyle from "../../componentStyles/ProfileComponentStyle.css";
import {AutoComplete} from "primereact/autocomplete";
import {Button} from "primereact/button";
import {Messages} from "primereact/messages";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import UserService from "../../services/UserService";
import AuthenticationService from "../../services/AuthenticationService";

class WatchListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: AuthenticationService.getCurrentUser(),
            ticker_id:"",
            tickerData: [],
            addTicker: "",
            allTickers: [],
            filteredTickers: []
        };
        this.updateTickerList = this.updateTickerList.bind(this);
        this.deleteTicker = this.deleteTicker.bind(this);
        this.getRowBody = this.getRowBody.bind(this);
    }

    componentDidMount() {

        UserService.getPublicContent()
            .then(response => {
                this.setState({
                    allTickers: response.data.map(obj => obj.ticker_id)
                })
            });

        const { currentUser } = this.state;

        UserService.getUserBoard(currentUser.id)
            .then(
                response => {
                    if (response.data !== null) {
                        this.setState({ tickerData: response.data.tickers })
                    };
                }
            );
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

    deleteTicker(ticker_id) {
        const {currentUser} = this.state;
        UserService.deleteTicker(currentUser.id, ticker_id).then(
            () => {
                window.location.reload();
            });
    }

    updateTickerList(ticker_id) {
        const {currentUser} = this.state;

        if (this.state.allTickers.includes(this.state.addTicker.toUpperCase())) {
            UserService.addTicker(currentUser.id, ticker_id).then(
                () => {
                    window.location.reload();
                });
        } else {
            this.showError()
        }
    }

    showError = () => {
        this.messages.show({severity: "error", summary: "Error message", detail: "Enter a valid ticker symbol!", closable: false})
    }

    getRowBody(rowData) {
        return (
            <React.Fragment>
                <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={() => this.deleteTicker(rowData.ticker_id)} />
            </React.Fragment>
        );
    }

    render() {
        return (
            <div>
                <div style={inputStyle} className="p-col p-p-2 p-d-flex p-jc-end">
                    <AutoComplete value={this.state.addTicker}
                                  suggestions={this.state.filteredTickers}
                                  completeMethod={this.filterTickers}
                                  placeholder={"Enter ticker"}
                                  minLength={1}
                                  className="p-mr-2 p-mb-2"
                                  onChange={(e) => this.setState({addTicker: e.value})}/>
                    <Button label="Add" icon="pi pi-plus" className="p-button-success p-mr-2 p-mb-2" onClick={() => this.updateTickerList(this.state.addTicker)} />
                </div>
                <Messages ref={(el) => this.messages = el}/>
                <div className="card">
                    <DataTable value={this.state.tickerData} resizableColumns columnResizeMode="fit">
                        <Column field="ticker_id" header="Ticker" style={{width:'25%'}}></Column>
                        <Column field="name" header="Company Name" style={{width:'25%'}}></Column>
                        <Column field="financialsDaily.price" header="Price" style={{width:'15%'}}></Column>
                        <Column field="industry" header="Industry" style={{width:'25%'}}></Column>
                        <Column body={this.getRowBody} style={{width:'10%'}}></Column>
                    </DataTable>
                </div>
            </div>
        )}
}
export default WatchListComponent