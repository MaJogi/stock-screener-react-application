import {shallow} from "enzyme";
import React from "react";
import PerformanceComponent from "../../../components/CompanyComponents/PerformanceComponent";

describe('PerformanceComponent', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<PerformanceComponent />);
        wrapper.setState({
            ticker: {
                financialsDaily: {
                    weekly_perf: 0.003728606,
                    one_year_beta: 1.11
                },
                financialsQuarterly: {
                }
            }
        })
        jest.clearAllMocks();
    });

    describe('Render the component', () => {
        it('should render and display weekly performance properly', () => {
            const weeklyPerf = wrapper.find('h4.weeklyPerf').text();

            expect(weeklyPerf).toBe('Weekly Performance: 0.37%');
        })

        it('should render and display one year beta properly', () => {
            const oneYearBeta = wrapper.find('h4.oneYearBeta').text();

            expect(oneYearBeta).toBe('1 Year Beta: 1.11');
        })
    })

})