import {shallow} from "enzyme";
import React from "react";
import DividendsComponent from "../../../components/CompanyComponents/DividendsComponent";

describe('DividendsComponent', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<DividendsComponent />);
        wrapper.setState({
            ticker: {
                ticker_id: null,
                financialsDaily: {
                    div_yield: 0.15
                },
                financialsQuarterly: {
                    shares: 669882
                }
            }
        })
        jest.clearAllMocks();
    });

    describe('Render the component', () => {
        it('should render and display dividend yield properly', () => {
            const findDividendYield = wrapper.find('h4.dividendYield').text();

            expect(findDividendYield).toBe('Dividend Yield: 15.00%');
        })

        it('should render and display shares properly', () => {
            const shares = wrapper.find('h4.shares').text();

            expect(shares).toBe('Shares: 669.882M');
        })
    })

})