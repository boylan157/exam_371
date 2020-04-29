const React = require('react');
const { mount } = require('enzyme');
import {BrowserRouter} from 'react-router-dom';
const {Home} = require("../../src/client/home");

function checkIfMenuIsDisplayed(driver) {

    const welcomeText = driver.find('.welcome-text');
    expect(welcomeText.length).toEqual(1);


}

test("Test rendered menu", () => {

    const driver = mount(
        <BrowserRouter>
            <Home/>
        </BrowserRouter>);
    checkIfMenuIsDisplayed(driver)
});