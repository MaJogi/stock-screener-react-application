import React from "react";
import {TabPanel, TabView} from "primereact/tabview";
import WatchListComponent from "./WatchListComponent";
import CompareHeaderComponent from "./CompareHeaderComponent";


class ProfileTabsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };
    }

    render() {
        return (
            <TabView activeIndex={this.state.activeIndex} renderActiveOnly={false} onTabChange={(e) => this.setState({activeIndex: e.index})}>
                <TabPanel header="Ticker watchlist" leftIcon="pi pi-table">
                    <WatchListComponent/>
                </TabPanel>
                <TabPanel header="Compare the companies" leftIcon="pi pi-table">
                    <CompareHeaderComponent/>
                </TabPanel>
            </TabView>
        )}
}
export default ProfileTabsComponent