const React = require('react');
const { mount } = require('enzyme');
import {BrowserRouter} from 'react-router-dom';
const {Home} = require("../../src/client/home");

// code extended from https://github.com/arcuri82/web_development_and_api_design/blob/master/exercise-solutions/quiz-game/part-10/tests/client/home-test.jsx

const needToLogInMsg = "You need to log-in to get lootboxes!";

test("Test not logged in", async () => {

    const driver = mount(<BrowserRouter initialEntries={["/home"]}><Home/> </BrowserRouter>);

    const html = driver.html();
    expect(html.includes(needToLogInMsg)).toEqual(true);
});


test("Test logged in", async () => {



    const user = {id: "Foo"};
    const fetchAndUpdateUserInfo = () => new Promise(resolve => resolve());

    const driver = mount(
        <BrowserRouter initialEntries={["/home"]}>
            <Home fetchAndUpdateUserInfo={fetchAndUpdateUserInfo} user={user}/>
        </BrowserRouter>
    );

    const html = driver.html();
    expect(html.includes(needToLogInMsg)).toEqual(false);
});