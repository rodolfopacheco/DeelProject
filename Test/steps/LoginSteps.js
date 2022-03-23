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
const LoginPage_1 = require("../pages/LoginPage");
const cucumber_1 = require("cucumber");
const loginPage = new LoginPage_1.LoginPage();
(0, cucumber_1.Given)(/^I Login to Deel Page$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield loginPage.login();
}));
//# sourceMappingURL=LoginSteps.js.map