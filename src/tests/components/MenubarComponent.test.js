import React from "react";
import MenubarComponent from "../../components/MenubarComponent";
import {shallow} from "enzyme";

describe('MenubarComponent', () => {
    it('should navigate on menuitem click', () => {
        const mockProps = {
            history: {
                push: jest.fn()
            }
        };
        const wrapper = shallow(<MenubarComponent.WrappedComponent {...mockProps}/>);
        const items = wrapper.state('items');
        items[0].command();
        expect(mockProps.history.push).toBeCalledWith('/');
        items[1].command();
        expect(mockProps.history.push).toBeCalledWith('/screener');
        items[2].command();
        expect(mockProps.history.push).toBeCalledWith('/register');
    })
})
