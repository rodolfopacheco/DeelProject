import { browser, element, Locator, by } from 'protractor';
import { BasePage } from './BasePage';
var expect = require('chai').expect;

export class LoginPage extends BasePage {
    public emailFieldLocator: string = "//input[@name='email']";
    public passFieldLocator: string = "//input[@name='password']";
    public loginBtnLocator: string = "//button[@type='submit']";

    //METHODS.

    //Login into the Application.
    async login() {
        await this.sendKeysElement(this.emailFieldLocator, await this.getUser());
        await this.sendKeysElement(this.passFieldLocator, await this.getPassword());
        await this.clickElementXpath(this.loginBtnLocator);
    }
}

