import {LoginPage } from '../pages/LoginPage';
import { Given, Then } from 'cucumber';

const loginPage = new LoginPage();

Given(/^I Login to Deel Page$/, async () => {
    await loginPage.login();
});