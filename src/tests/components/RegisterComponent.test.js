import {shallow} from "enzyme";
import React from "react";
import RegisterComponent from "../../components/RegisterComponent";

describe('RegisterComponent', () => {
    let wrapper;
    let instance;
    beforeEach(() => {
        wrapper = shallow(<RegisterComponent/>);
        instance = wrapper.instance();
        jest.clearAllMocks();
    });

    describe('Firstname onChange event', () => {
        it('should change "firstName" state', () => {
            const expectedValue = "testFirstName";

            const firstNameInput = wrapper.find("#firstName");
            firstNameInput.simulate('change', {
                target: {
                    value: 'testFirstName'
                }
            });
            expect(wrapper.state('firstName')).toEqual(expectedValue)
        })
    })

    describe('Lastname onChange event', () => {
        it('should change "lastName" state', () => {
            const expectedValue = "testLastName";

            const lastNameInput = wrapper.find("#lastName");
            lastNameInput.simulate('change', {
                target: {
                    value: 'testLastName'
                }
            });
            expect(wrapper.state('lastName')).toEqual(expectedValue)
        })
    })

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