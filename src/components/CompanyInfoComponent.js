import React from "react";
import axios from "axios"

class CompanyInfoComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            ticker: ""
        }
    }

    componentDidMount() {

        axios.get("http://localhost:8080/tickers/" + this.state.id)
            .then(response => {
                this.setState({
                    ticker: response.data.ticker
                })
            })
    }

    render() {
        return (
            <div>
                <h1>Ticker: {this.state.ticker}</h1>
            </div>
        )
    }
}


export default CompanyInfoComponent