"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePage = void 0;
const protractor_1 = require("protractor");
const EnvData = __importStar(require("../config/user.json"));
var expect = require('chai').expect;
class BasePage {
    constructor() {
        this.TIMEOUT_MILLIS = 40 * 1000;
        this.SHORT_TIMEOUT_MILLIS = 30 * 1000;
    }
    openBrowser(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.navigateTo(url);
        });
    }
    tryClick(elementXPath) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(yield this.waitForElementToBePresent(elementXPath))) {
                return false;
            }
            yield this.clickButton(protractor_1.by.xpath(elementXPath)).then(() => {
                console.info('Clicked element: ' + elementXPath);
            });
            return true;
        });
    }
    tryClickID(elementID) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(yield this.waitForElementToBePresentID(elementID))) {
                return false;
            }
            yield this.clickButton(protractor_1.by.id(elementID)).then(() => {
                console.info('Clicked element: ' + elementID);
            });
            return true;
        });
    }
    tryClickname(elementName) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(yield this.waitForElementToBePresentName(elementName))) {
                return false;
            }
            yield this.clickButton(protractor_1.by.name(elementName)).then(() => {
                console.info('Clicked element: ' + elementName);
            });
            return true;
        });
    }
    sendKeysElement(elementXPath, keys, maxAttempts = 3) {
        return __awaiter(this, void 0, void 0, function* () {
            let elementReceivedKeys = false;
            let i = 1;
            do {
                console.log(`[${i}] Retrying to send keys: ${elementXPath}`);
                if (i > maxAttempts) {
                    if (!(yield this.reExecuteLastActionIfDefined())) {
                        throw `Not able to send keys: ${elementXPath} after ${maxAttempts} attempts.`;
                    }
                    elementReceivedKeys = yield this.retrySendkey(elementXPath, keys);
                    return;
                }
                elementReceivedKeys = yield this.retrySendkey(elementXPath, keys);
                i++;
            } while (elementReceivedKeys == false);
        });
    }
    sendKeysElementName(elementName, keys, maxAttempts = 3) {
        return __awaiter(this, void 0, void 0, function* () {
            let elementReceivedKeys = false;
            let i = 1;
            do {
                console.log(`[${i}] Retrying to send keys: ${elementName}`);
                if (i > maxAttempts) {
                    if (!(yield this.reExecuteLastActionIfDefined())) {
                        throw `Not able to send keys: ${elementName} after ${maxAttempts} attempts.`;
                    }
                    elementReceivedKeys = yield this.retrySendkeyName(elementName, keys);
                    return;
                }
                elementReceivedKeys = yield this.retrySendkeyName(elementName, keys);
                i++;
            } while (elementReceivedKeys == false);
        });
    }
    clickElementXpath(elementXPath, maxAttempts = 2) {
        return __awaiter(this, void 0, void 0, function* () {
            let elementClicked = false;
            let i = 1;
            do {
                if (i != 1)
                    console.log(`[${i}] Retrying to click: ${elementXPath}`);
                if (i > maxAttempts) {
                    if (!(yield this.reExecuteLastActionIfDefined())) {
                        throw `Not able to click: ${elementXPath} after ${maxAttempts} attempts.`;
                    }
                    elementClicked = yield this.tryClick(elementXPath);
                    return;
                }
                elementClicked = yield this.tryClick(elementXPath);
                i++;
            } while (elementClicked == false);
        });
    }
    clickElementID(elementID, maxAttempts = 2) {
        return __awaiter(this, void 0, void 0, function* () {
            let elementClicked = false;
            let i = 1;
            do {
                if (i != 1)
                    console.log(`[${i}] Retrying to click: ${elementID}`);
                if (i > maxAttempts) {
                    if (!(yield this.reExecuteLastActionIfDefined())) {
                        throw `Not able to click: ${elementID} after ${maxAttempts} attempts.`;
                    }
                    elementClicked = yield this.tryClickID(elementID);
                    return;
                }
                elementClicked = yield this.tryClickID(elementID);
                i++;
            } while (elementClicked == false);
        });
    }
    clickElementName(elementName, maxAttempts = 2) {
        return __awaiter(this, void 0, void 0, function* () {
            let elementClicked = false;
            let i = 1;
            do {
                if (i != 1)
                    console.log(`[${i}] Retrying to click: ${elementName}`);
                if (i > maxAttempts) {
                    if (!(yield this.reExecuteLastActionIfDefined())) {
                        throw `Not able to click: ${elementName} after ${maxAttempts} attempts.`;
                    }
                    elementClicked = yield this.tryClickname(elementName);
                    return;
                }
                elementClicked = yield this.tryClickname(elementName);
                i++;
            } while (elementClicked == false);
        });
    }
    reExecuteLastActionIfDefined() {
        return __awaiter(this, void 0, void 0, function* () {
            let lastActionDefined = this.lastActionCallback != null;
            let success = true;
            if (lastActionDefined) {
                console.info("Re-executing last action...");
                try {
                    yield this.lastActionCallback();
                }
                catch (error) {
                    console.error(`Something went wrong when executing lastAction: ${error}`);
                    console.debug(`On: ${this.lastActionCallback.toString()}`);
                    success = false;
                }
                this.lastActionCallback = null;
            }
            else {
                console.error(`No last action defined.`);
            }
            return success;
        });
    }
    retrySendkey(elementLocator, keys) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(yield this.waitForElementToBePresent(elementLocator))) {
                return false;
            }
            try {
                yield (0, protractor_1.element)(protractor_1.by.xpath(elementLocator)).clear();
                yield this.pause(450);
                yield (0, protractor_1.element)(protractor_1.by.xpath(elementLocator)).sendKeys(keys);
                return true;
            }
            catch (error) {
                console.error(`Element: ${elementLocator} - ${error}`);
                return false;
            }
        });
    }
    retrySendkeyName(elementLocator, keys) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(yield this.waitForElementToBePresentName(elementLocator))) {
                return false;
            }
            try {
                yield (0, protractor_1.element)(protractor_1.by.name(elementLocator)).clear();
                yield this.pause(450);
                yield (0, protractor_1.element)(protractor_1.by.name(elementLocator)).sendKeys(keys);
                return true;
            }
            catch (error) {
                console.error(`Element: ${elementLocator} - ${error}`);
                return false;
            }
        });
    }
    clickButton(elementLocator) {
        return __awaiter(this, void 0, void 0, function* () {
            const elem = (0, protractor_1.element)(elementLocator);
            yield elem.click();
        });
    }
    waitForElementToBePresent(elementXPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const EC = protractor_1.protractor.ExpectedConditions;
            try {
                yield protractor_1.browser.wait(EC.visibilityOf((0, protractor_1.element)(protractor_1.by.xpath(elementXPath))), this.TIMEOUT_MILLIS);
                yield protractor_1.browser.wait(EC.elementToBeClickable((0, protractor_1.element)(protractor_1.by.xpath(elementXPath))), this.TIMEOUT_MILLIS);
                yield protractor_1.browser.wait((0, protractor_1.element)(protractor_1.by.xpath(elementXPath)).isEnabled(), this.SHORT_TIMEOUT_MILLIS);
                yield protractor_1.browser.wait(EC.presenceOf((0, protractor_1.element)(protractor_1.by.xpath(elementXPath))), this.TIMEOUT_MILLIS);
                console.info(`Element: ${elementXPath} is present.`);
                return true;
            }
            catch (error) {
                console.info(`Element: ${elementXPath} - ${error}`);
                return false;
            }
        });
    }
    waitForElementToBePresentID(elementID) {
        return __awaiter(this, void 0, void 0, function* () {
            const EC = protractor_1.protractor.ExpectedConditions;
            try {
                yield protractor_1.browser.wait(EC.visibilityOf((0, protractor_1.element)(protractor_1.by.id(elementID))), this.TIMEOUT_MILLIS);
                yield protractor_1.browser.wait(EC.elementToBeClickable((0, protractor_1.element)(protractor_1.by.id(elementID))), this.TIMEOUT_MILLIS);
                yield protractor_1.browser.wait((0, protractor_1.element)(protractor_1.by.id(elementID)).isEnabled(), this.SHORT_TIMEOUT_MILLIS);
                yield protractor_1.browser.wait(EC.presenceOf((0, protractor_1.element)(protractor_1.by.id(elementID))), this.TIMEOUT_MILLIS);
                console.info(`Element: ${elementID} is present.`);
                return true;
            }
            catch (error) {
                console.info(`Element: ${elementID} - ${error}`);
                return false;
            }
        });
    }
    waitForElementToBePresentName(elementName) {
        return __awaiter(this, void 0, void 0, function* () {
            const EC = protractor_1.protractor.ExpectedConditions;
            try {
                yield protractor_1.browser.wait(EC.visibilityOf((0, protractor_1.element)(protractor_1.by.name(elementName))), this.TIMEOUT_MILLIS);
                yield protractor_1.browser.wait(EC.elementToBeClickable((0, protractor_1.element)(protractor_1.by.name(elementName))), this.TIMEOUT_MILLIS);
                yield protractor_1.browser.wait((0, protractor_1.element)(protractor_1.by.name(elementName)).isEnabled(), this.SHORT_TIMEOUT_MILLIS);
                yield protractor_1.browser.wait(EC.presenceOf((0, protractor_1.element)(protractor_1.by.name(elementName))), this.TIMEOUT_MILLIS);
                console.info(`Element: ${elementName} is present.`);
                return true;
            }
            catch (error) {
                console.info(`Element: ${elementName} - ${error}`);
                return false;
            }
        });
    }
    pause(millisecondsToSleep) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield new Promise(resolve => setTimeout(resolve, millisecondsToSleep));
        });
    }
    navigateTo(pageURL) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.driver
                .manage()
                .window()
                .maximize();
            yield protractor_1.browser.driver.get(pageURL);
            yield protractor_1.browser
                .executeScript('return !!(window.angular || window.ng);')
                .then(function (isAngular) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (!isAngular) {
                        yield protractor_1.browser.waitForAngularEnabled(false);
                    }
                });
            });
        });
    }
    getUser() {
        return __awaiter(this, void 0, void 0, function* () {
            var userName = '';
            userName = EnvData["deel_users"]["user"].email;
            return userName;
        });
    }
    getPassword() {
        return __awaiter(this, void 0, void 0, function* () {
            var pass = '';
            pass = EnvData["deel_users"]["user"].password;
            return pass;
        });
    }
    generateRandomName(length) {
        return __awaiter(this, void 0, void 0, function* () {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        });
    }
    generateDateMinusOne() {
        return __awaiter(this, void 0, void 0, function* () {
            let d = new Date();
            d.setDate(d.getDate() - 1);
            let dM = d.getDate();
            return dM;
        });
    }
}
exports.BasePage = BasePage;
//# sourceMappingURL=BasePage.js.map