import { browser, element, by, protractor, ElementFinder, Locator } from 'protractor';
import * as EnvData from '../config/user.json'

var expect = require('chai').expect

export class BasePage {
  protected TIMEOUT_MILLIS = 40 * 1000;
  protected SHORT_TIMEOUT_MILLIS = 30 * 1000;
  public lastActionCallback: any;

  //Open Browser.
  async openBrowser(url: string) {
    await this.navigateTo(url);
  }

  //Tries to click the specified element.
  public async tryClick(elementXPath: string): Promise<boolean> {
    if (!await this.waitForElementToBePresent(elementXPath)) { //TODO: Base callback executions in number of attempts
      return false;
    }

    await this.clickButton(by.xpath(elementXPath)).then(() => {
      console.info('Clicked element: ' + elementXPath)
    }
    );
    return true;
  }

  public async tryClickID(elementID: string): Promise<boolean> {
    if (!await this.waitForElementToBePresentID(elementID)) { //TODO: Base callback executions in number of attempts
      return false;
    }

    await this.clickButton(by.id(elementID)).then(() => {
      console.info('Clicked element: ' + elementID)
    }
    );

    return true;
  }

  public async tryClickname(elementName: string): Promise<boolean> {
    if (!await this.waitForElementToBePresentName(elementName)) {
      return false;
    }

    await this.clickButton(by.name(elementName)).then(() => {
      console.info('Clicked element: ' + elementName)
    }
    );

    return true;
  }

  //Sends the text to the specified element.
  public async sendKeysElement(elementXPath: string, keys: string, maxAttempts: number = 3) {
    let elementReceivedKeys = false;
    let i = 1;
    do {
      console.log(`[${i}] Retrying to send keys: ${elementXPath}`);
      if (i > maxAttempts) {
        if (!await this.reExecuteLastActionIfDefined()) {
          throw `Not able to send keys: ${elementXPath} after ${maxAttempts} attempts.`;
        }
        elementReceivedKeys = await this.retrySendkey(elementXPath, keys);
        return;
      }
      elementReceivedKeys = await this.retrySendkey(elementXPath, keys);
      i++;
    } while (elementReceivedKeys == false);
    //await this.WaitForJsAndJQuery();
  }

  public async sendKeysElementName(elementName: string, keys: string, maxAttempts: number = 3) {
    let elementReceivedKeys = false;
    let i = 1;
    do {
      console.log(`[${i}] Retrying to send keys: ${elementName}`);
      if (i > maxAttempts) {
        if (!await this.reExecuteLastActionIfDefined()) {
          throw `Not able to send keys: ${elementName} after ${maxAttempts} attempts.`;
        }
        elementReceivedKeys = await this.retrySendkeyName(elementName, keys);
        return;
      }
      elementReceivedKeys = await this.retrySendkeyName(elementName, keys);
      i++;
    } while (elementReceivedKeys == false);
  }

  //Clicks the element using the specified locator.
  public async clickElementXpath(elementXPath: string, maxAttempts: number = 2): Promise<void> {
    let elementClicked = false;
    let i = 1;
    do {
      if (i != 1)
        console.log(`[${i}] Retrying to click: ${elementXPath}`);
      if (i > maxAttempts) {
        if (!await this.reExecuteLastActionIfDefined()) {
          throw `Not able to click: ${elementXPath} after ${maxAttempts} attempts.`;
        }
        elementClicked = await this.tryClick(elementXPath);
        return;
      }
      elementClicked = await this.tryClick(elementXPath);
      i++;
    } while (elementClicked == false);
  }

  public async clickElementID(elementID: string, maxAttempts: number = 2): Promise<void> {
    let elementClicked = false;
    let i = 1;
    do {
      if (i != 1)
        console.log(`[${i}] Retrying to click: ${elementID}`);
      if (i > maxAttempts) {
        if (!await this.reExecuteLastActionIfDefined()) {
          throw `Not able to click: ${elementID} after ${maxAttempts} attempts.`;
        }
        elementClicked = await this.tryClickID(elementID);
        return;
      }
      elementClicked = await this.tryClickID(elementID);
      i++;
    } while (elementClicked == false);
  }

  public async clickElementName(elementName: string, maxAttempts: number = 2): Promise<void> {
    let elementClicked = false;
    let i = 1;
    do {
      if (i != 1)
        console.log(`[${i}] Retrying to click: ${elementName}`);
      if (i > maxAttempts) {
        if (!await this.reExecuteLastActionIfDefined()) {
          throw `Not able to click: ${elementName} after ${maxAttempts} attempts.`;
        }
        elementClicked = await this.tryClickname(elementName);
        return;
      }
      elementClicked = await this.tryClickname(elementName);
      i++;
    } while (elementClicked == false);
  }

  //Re-executes the last action defined.
  public async reExecuteLastActionIfDefined() {
    let lastActionDefined = this.lastActionCallback != null;
    let success = true;
    if (lastActionDefined) {
      console.info("Re-executing last action...")
      try {
        await this.lastActionCallback();
      } catch (error) {
        console.error(
          `Something went wrong when executing lastAction: ${error}`);
        console.debug(`On: ${this.lastActionCallback.toString()}`);
        success = false;
      }
      this.lastActionCallback = null;
    }
    else {
      console.error(
        `No last action defined.`);
    }
    return success;
  }

  //This methods are to clear and send the corresponding keys to a field.
  public async retrySendkey(elementLocator: string, keys: string) {
    if (!await this.waitForElementToBePresent(elementLocator)) {
      return false;
    }

    try {
      await element(by.xpath(elementLocator)).clear();
      await this.pause(450);
      await element(by.xpath(elementLocator)).sendKeys(keys);
      return true;
    } catch (error) {
      console.error(`Element: ${elementLocator} - ${error}`);
      return false;
    }
  }

  public async retrySendkeyName(elementLocator: string, keys: string) {
    if (!await this.waitForElementToBePresentName(elementLocator)) {
      return false;
    }
    try {
      await element(by.name(elementLocator)).clear();
      await this.pause(450);
      await element(by.name(elementLocator)).sendKeys(keys);
      return true;
    } catch (error) {
      console.error(`Element: ${elementLocator} - ${error}`);
      return false;
    }
  }

  //Clicks a specified button.
  private async clickButton(elementLocator: Locator) {
    const elem: ElementFinder = element(elementLocator)
    await elem.click();
  }

  //This methods wait until the elements are present on the DOM.
  public async waitForElementToBePresent(elementXPath: string): Promise<boolean> {
    const EC = protractor.ExpectedConditions;
    try {
      await browser.wait(EC.visibilityOf(element(by.xpath(elementXPath))), this.TIMEOUT_MILLIS);
      await browser.wait(EC.elementToBeClickable(element(by.xpath(elementXPath))), this.TIMEOUT_MILLIS);
      await browser.wait(element(by.xpath(elementXPath)).isEnabled(), this.SHORT_TIMEOUT_MILLIS);
      await browser.wait(EC.presenceOf(element(by.xpath(elementXPath))), this.TIMEOUT_MILLIS);
      console.info(`Element: ${elementXPath} is present.`);
      return true;
    } catch (error) {
      console.info(`Element: ${elementXPath} - ${error}`);
      return false;
    }
  }

  public async waitForElementToBePresentID(elementID: string): Promise<boolean> {
    const EC = protractor.ExpectedConditions;
    //await this.WaitForJsAndJQuery();
    try {
      await browser.wait(EC.visibilityOf(element(by.id(elementID))), this.TIMEOUT_MILLIS);
      await browser.wait(EC.elementToBeClickable(element(by.id(elementID))), this.TIMEOUT_MILLIS);
      await browser.wait(element(by.id(elementID)).isEnabled(), this.SHORT_TIMEOUT_MILLIS);
      await browser.wait(EC.presenceOf(element(by.id(elementID))), this.TIMEOUT_MILLIS);
      console.info(`Element: ${elementID} is present.`);
      return true;
    } catch (error) {
      console.info(`Element: ${elementID} - ${error}`);
      return false;
    }
  }

  public async waitForElementToBePresentName(elementName: string): Promise<boolean> {
    const EC = protractor.ExpectedConditions;
    try {
      await browser.wait(EC.visibilityOf(element(by.name(elementName))), this.TIMEOUT_MILLIS);
      await browser.wait(EC.elementToBeClickable(element(by.name(elementName))), this.TIMEOUT_MILLIS);
      await browser.wait(element(by.name(elementName)).isEnabled(), this.SHORT_TIMEOUT_MILLIS);
      await browser.wait(EC.presenceOf(element(by.name(elementName))), this.TIMEOUT_MILLIS);
      console.info(`Element: ${elementName} is present.`);
      return true;
    } catch (error) {
      console.info(`Element: ${elementName} - ${error}`);
      return false;
    }
  }

  //This method pauses the test.
  public async pause(millisecondsToSleep: number) {
    return await new Promise(resolve =>
      setTimeout(resolve, millisecondsToSleep)
    );
  }

  /**
   * This method checks if the page is angular or non-angular and configure it for non-angular pages
   */
  public async navigateTo(pageURL: string) {
    await browser.driver
      .manage()
      .window()
      .maximize();
    await browser.driver.get(pageURL);
    await browser
      .executeScript('return !!(window.angular || window.ng);')
      .then(async function (isAngular) {
        if (!isAngular) {
          await browser.waitForAngularEnabled(false);
        }
      });
  }

  //Gets the user's username.
  public async getUser() {
    var userName = '';
    userName = EnvData["deel_users"]["user"].email;
    return userName;
  }

  //Gets the user's password.
  public async getPassword() {
    var pass = '';
    pass = EnvData["deel_users"]["user"].password;
    return pass;
  }

  //Generates a random name.
  public async generateRandomName(length: number) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }

  //Returns the day from current date minus one.
  async generateDateMinusOne() {
    let d = new Date();
    d.setDate(d.getDate() - 1);
    let dM = d.getDate();
    return dM;
  }
}


