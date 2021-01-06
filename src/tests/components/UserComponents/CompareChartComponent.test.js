import {shallow} from "enzyme";
import KeyRatiosComponent from "../../../components/CompanyComponents/KeyRatiosComponent";
import FinancialsComponent from "../../../components/CompanyComponents/FinancialsComponent";
import PerformanceComponent from "../../../components/CompanyComponents/PerformanceComponent";
import DividendsComponent from "../../../components/CompanyComponents/DividendsComponent";
import React from "react";
import CompareChartComponent from "../../../components/UserComponents/CompareChartComponent";

describe('CompareChartComponent', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CompareChartComponent />);
        wrapper.setState({
            tickerCompareFirst: {
                ticker_id: "TAL1T",
                financialsDaily: {},
                financialsQuarterly: {}
            }
        })
        jest.clearAllMocks();
    });

    describe('Render the component', () => {
        it('should render and ticker id value properly', () => {
            const tickerId = wrapper.find('h4.tickerId').text();

            expect(tickerId).toBe('Ticker: TAL1T');
        })
    })

    describe('CompareChart subcomponents rendering', () => {
        it('should render KeyRatiosComponent', async () => {
            const keyRatiosFieldSet = wrapper.find(KeyRatiosComponent);
            expect(keyRatiosFieldSet.exists()).toBe(true);
        })

        it('should render FinancialsComponent', async () => {
            const financialsFieldSet = wrapper.find(FinancialsComponent);
            expect(financialsFieldSet.exists()).toBe(true);
        })

        it('should render PerformanceComponent', async () => {
            const performanceFieldSet = wrapper.find(PerformanceComponent);
            expect(performanceFieldSet.exists()).toBe(true);
        })

        it('should render DividendsComponent', async () => {
            const dividendsFieldSet = wrapper.find(DividendsComponent);
            expect(dividendsFieldSet.exists()).toBe(true);
        })
    })
})