const assert = require('assert');
// const {Given, When, Then, After} = require('@cucumber/cucumber');
const {Builder, By, Key, until} = require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome').build();

class Basepage{
    constructor(){
        this.driver = driver;
    }

    async maximizeWindow() {
        await this.driver.manage().window().maximize()
    }

    async visit(url) {
        await this.driver.get(url)
    }

    async sendRequestLinkClick(){
        await this.click(locators.sendRequestButton, 5000)
    }

    async find(locator, timeout) {
        await this.driver.wait(until.elementLocated(By.xpath(locator)), timeout); //TODO check is it really need
        return this.driver.findElement(By.xpath(locator));
    }

    async click(locator, timeout) {
        await this.driver.wait(until.elementLocated(By.xpath(locator)), timeout);
        await this.driver.findElement(By.xpath(locator)).click()
    }

    async type(locator, timeout, inputText) {
        await this.driver.wait(until.elementLocated(By.xpath(locator)), timeout);
        await this.driver.findElement(By.xpath(locator)).sendKeys(inputText, Key.TAB)
    }

    async getText(locator, timeout) {
        let el = await this.driver.wait(until.elementLocated(By.xpath(locator)), timeout)
        return await el.getText();
    }

    async clickOnTheElement(xpath, Timeout) {
        await driver.wait(until.elementLocated(By.xpath(xpath)), Timeout).click();
    };


}

module.exports = Basepage;
module.exports = driver;
