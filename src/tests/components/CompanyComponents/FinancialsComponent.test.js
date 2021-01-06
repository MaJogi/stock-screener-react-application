import {shallow} from "enzyme";
import React from "react";
import FinancialsComponent from "../../../components/CompanyComponents/FinancialsComponent";

describe('FinancialsComponent', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<FinancialsComponent />);
        wrapper.setState({
            ticker: {
                financialsDaily: {},
                financialsQuarterly: {
                    assets: 1564000
                }
            }
        })
        jest.clearAllMocks();
    });

    describe('Render the component', () => {
        it('should render and display assets properly', () => {
            const assets = wrapper.find('h4.assets').text();

            expect(assets).toBe('Assets: 1564M');
        })
    })
})