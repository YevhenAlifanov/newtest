// import {Given} from 'cucumber';
require('chromedriver');
const assert = require('assert');
const {Given, When, Then, After} = require('@cucumber/cucumber');
const locator = require('../locators/locator');
const page = require('../page/page');
const timeout = 5000;

Given(/^Maximize browser window$/, async function () {
 // await page.maximizeWindow()
    await this.driver.manage().window().maximize()
});

Given(/^User goes to AimChat$/, async function () {
    const chat = 'https://chat-demo.aimprosoft.com/loginPage/index.html#/';
    await page.visit(chat);
});

When(/^User click on 'Send Request' button$/, async function () {
    await page.sendRequestLinkClick()
});
Then(/^'Sign up' page is open$/, async function () {
    const text = await page.getElementText(locators.signUpButton);
    const expected = "Sign Up";
    assert.strictEqual(text, expected);
});