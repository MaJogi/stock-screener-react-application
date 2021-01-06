import {shallow} from "enzyme";
import React from "react";
import KeyRatiosComponent from "../../../components/CompanyComponents/KeyRatiosComponent";

describe('KeyRatiosComponent', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<KeyRatiosComponent />);
        wrapper.setState({
            ticker: {
                financialsDaily: {},
                financialsQuarterly: {
                    current_ratio: 0.51,
                    gross_mrq: 0.2027
                }
            }
        })
        jest.clearAllMocks();
    });

    describe('Render the component', () => {
        it('should render and display current ratio properly', () => {
            const currentRatio = wrapper.find('h4.currentRatio').text();

            expect(currentRatio).toBe('Current Ratio: 0.51');
        })

        it('should render and display gross margin properly', () => {
            const grossMargin = wrapper.find('h4.grossMargin').text();

            expect(grossMargin).toBe('Gross Margin: 20.27%');
        })
    })

})