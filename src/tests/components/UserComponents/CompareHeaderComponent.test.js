import {act} from "react-dom/test-utils";
import axios from "axios";
import {shallow} from "enzyme";
import React from "react";
import CompareHeaderComponent from "../../../components/UserComponents/CompareHeaderComponent";

jest.mock('axios');

const whenStable = async () => {
    await act(async () => {
        await new Promise(resolve => setTimeout(resolve, 0))
    })
}

describe('CompareHeaderComponent', () => {
    describe('when rendered', () => {
        it('should fetch a list of companies', async () => {
            const getSpy = jest.spyOn(axios, 'get');
            const wrapper = shallow(<CompareHeaderComponent/>);
            await whenStable();
            expect(getSpy).toBeCalled();
            getSpy.mockRestore();
        });
    });
});