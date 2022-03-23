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
const cucumber_1 = require("cucumber");
const HomePage_1 = require("../pages/HomePage");
const ContractsPage_1 = require("../pages/ContractsPage");
const homePage = new HomePage_1.HomePage();
const contractsPage = new ContractsPage_1.ContractsPage();
(0, cucumber_1.Given)(/^I Select Fixed Rate Contract Option$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield homePage.clickAcceptCookiesBtn();
    yield homePage.closeTipsModal();
    yield homePage.clickCreateContractMenu();
    yield contractsPage.clickFixedRateBtn();
}));
(0, cucumber_1.Given)(/^I Add a Fix Contract$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield contractsPage.selectContractorStartDate();
    yield contractsPage.enterContractName();
    yield contractsPage.selectContractorTaxRes("United States");
    yield contractsPage.selectContractorTaxState("Colorado");
    yield contractsPage.selectJobTitle("Accountant");
    yield contractsPage.selectSeniorityLevel("Junior (Individual Contributor Level 1)");
    yield contractsPage.selectPredefinedWorkScope("Account Executive");
    yield contractsPage.clicksNextBtn();
    yield contractsPage.selectCurrency("GBP - British Pound");
    yield contractsPage.enterRate("1000");
    yield contractsPage.selectPaymentFreq("Weekly");
    yield contractsPage.clicksNextBtn();
    yield contractsPage.clicksNextBtn();
    yield contractsPage.enterSpecialClause();
    yield contractsPage.clicksNextBtn();
    yield contractsPage.clickCreatesContractBtn();
}));
//# sourceMappingURL=ContractsSteps.js.map