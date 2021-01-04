import {shallow} from "enzyme";
import React from "react";
import LoginComponent from "../../components/LoginComponent";

describe('LoginComponent', () => {
    let wrapper;
    let instance;
    beforeEach(() => {
        wrapper = shallow(<LoginComponent/>);
        instance = wrapper.instance();
        jest.clearAllMocks();
    });

    describe('Username onChange event', () => {
        it('should change "username" state', () => {
            const expectedValue = "testUserName";

            const usernameInput = wrapper.find("#userName");
            usernameInput.simulate('change', {
                target: {
                    value: 'testUserName'
                }
            });
            expect(wrapper.state('username')).toEqual(expectedValue)
        })
    })

    describe('Password onChange event', () => {
        it('should change "password" state', () => {
            const expectedValue = "testPassword";

            const passwordInput = wrapper.find("#password");
            passwordInput.simulate('change', {
                target: {
                    value: 'testPassword'
                }
            });
            expect(wrapper.state('password')).toEqual(expectedValue)
        })
    })
})