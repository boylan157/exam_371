const React = require('react');
const { mount } = require('enzyme');
import {BrowserRouter} from 'react-router-dom';
const {Home} = require("../../src/client/home");



const needToLogInMsg = "You need to log-in to get lootboxes!";

test("Test not logged in", async () => {

    const driver = mount(<BrowserRouter initialEntries={["/home"]}><Home/> </BrowserRouter>);

    const html = driver.html();
    expect(html.includes(needToLogInMsg)).toEqual(true);
});


test("Test logged in", async () => {

    const victories = 42;
    const defeats = 77;

    const user = {id: "Foo", victories, defeats};
    const fetchAndUpdateUserInfo = () => new Promise(resolve => resolve());

    const driver = mount(
        <BrowserRouter initialEntries={["/home"]}>
            <Home fetchAndUpdateUserInfo={fetchAndUpdateUserInfo} user={user}/>
        </BrowserRouter>
    );

    const html = driver.html();
    expect(html.includes(needToLogInMsg)).toEqual(false);
});