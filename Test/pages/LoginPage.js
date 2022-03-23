"use strict";
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
exports.LoginPage = void 0;
const BasePage_1 = require("./BasePage");
var expect = require('chai').expect;
class LoginPage extends BasePage_1.BasePage {
    constructor() {
        super(...arguments);
        this.emailFieldLocator = "//input[@name='email']";
        this.passFieldLocator = "//input[@name='password']";
        this.loginBtnLocator = "//button[@type='submit']";
    }
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.sendKeysElement(this.emailFieldLocator, yield this.getUser());
            yield this.sendKeysElement(this.passFieldLocator, yield this.getPassword());
            yield this.clickElementXpath(this.loginBtnLocator);
        });
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=LoginPage.js.map