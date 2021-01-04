import React from "react";
import {shallow} from "enzyme";
import CompanyInfoComponent from "../../components/CompanyComponents/CompanyInfoComponent";

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
})