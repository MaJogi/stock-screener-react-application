import React from "react";
import {shallow} from "enzyme";
import CompanyInfoComponent from "../../components/CompanyComponents/CompanyInfoComponent";
import DividendsComponent from "../../components/CompanyComponents/DividendsComponent";
import KeyRatiosComponent from "../../components/CompanyComponents/KeyRatiosComponent";
import FinancialsComponent from "../../components/CompanyComponents/FinancialsComponent";
import PerformanceComponent from "../../components/CompanyComponents/PerformanceComponent";

describe('CompanyInfoComponent', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CompanyInfoComponent match={{params: {id: 0}, isExact: true, path: "", url: ""}}/>);
        wrapper.setState({
            ticker: {
                ticker_id: null,
                financialsDaily: {
                    chg: null
                },
                financialsQuarterly: {
                    annual_revenue: null,
                }
            }
        })
        jest.clearAllMocks();
    });

    describe('conditional rendering', () => {
        it('should render null object value', async () => {
            expect(wrapper.find('h1').contains([
                    <h1>
                        Ticker: <span>-</span>
                    </h1>
                ]),
            );
        })
    })

    describe('CompanyInfo subcomponents rendering', () => {
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