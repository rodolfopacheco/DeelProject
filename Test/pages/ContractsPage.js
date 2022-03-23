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
exports.ContractsPage = void 0;
const BasePage_1 = require("./BasePage");
class ContractsPage extends BasePage_1.BasePage {
    constructor() {
        super(...arguments);
        this.fixedRateBtn = "//a[@href='/create/fixed']";
        this.contractorStartDateDdl = "//div[@class='deel-ui__calendar-input-container__input']";
        this.contractNameInput = "name";
        this.contractorTaxResSel = "//div[@data-qa='contractor-tax-residence' and @class='deel-ui__select__input-container']";
        this.contractorStateSel = "//div[@data-qa='contractor-tax-residence-province']";
        this.jobTitleSel = "jobTitle";
        this.seniorityLevelSel = "//div[@data-qa='selector-seniority-level']";
        this.predefinedScopesSel = "//div[@class='flex scopes-dropdown-toggle align-items-center']";
        this.nextBtn = "//button[@data-qa='next']";
        this.currencySel = "//div[@data-qa='currency-select']";
        this.rateInput = "rate";
        this.paymentFreq = "//div[@data-qa='cycle-select']";
        this.specialClauseBtn = "//button[@data-qa='add-a-special-clause']";
        this.specialClauseTxtArea = "//div[@data-qa='special-clause-card']//textarea";
        this.createContractBtn = "//button[@data-qa='create-contract']";
    }
    clickFixedRateBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForElementToBePresent(this.fixedRateBtn);
            yield this.clickElementXpath(this.fixedRateBtn);
        });
    }
    selectContractorStartDate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForElementToBePresent(this.contractorStartDateDdl);
            yield this.clickElementXpath(this.contractorStartDateDdl);
            yield this.clickElementXpath("//abbr[text()='" + (yield this.generateDateMinusOne()) + "']/ancestor::button");
        });
    }
    enterContractName() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForElementToBePresentName(this.contractNameInput);
            yield this.sendKeysElementName(this.contractNameInput, yield this.generateRandomName(10));
        });
    }
    selectContractorTaxRes(countryXPath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForElementToBePresent(this.contractorTaxResSel);
            yield this.clickElementXpath(this.contractorTaxResSel);
            yield this.clickElementXpath("//*[text() = '" + countryXPath + "']");
        });
    }
    selectContractorTaxState(stateXPath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForElementToBePresent(this.contractorStateSel);
            yield this.clickElementXpath(this.contractorStateSel);
            yield this.clickElementXpath("//*[text() = '" + stateXPath + "']");
        });
    }
    selectJobTitle(jobTitleXPath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForElementToBePresentName(this.jobTitleSel);
            yield this.clickElementName(this.jobTitleSel);
            yield this.clickElementXpath("//*[text() = '" + jobTitleXPath + "']");
        });
    }
    selectSeniorityLevel(seniorityXPath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForElementToBePresent(this.seniorityLevelSel);
            yield this.clickElementXpath(this.seniorityLevelSel);
            yield this.clickElementXpath("//*[text() = '" + seniorityXPath + "']");
        });
    }
    selectPredefinedWorkScope(predefScope) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForElementToBePresent(this.predefinedScopesSel);
            yield this.clickElementXpath(this.predefinedScopesSel);
            yield this.clickElementXpath("//span[text()='" + predefScope + "']/ancestor::button");
        });
    }
    clicksNextBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForElementToBePresent(this.nextBtn);
            yield this.clickElementXpath(this.nextBtn);
        });
    }
    selectCurrency(currency) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForElementToBePresent(this.currencySel);
            yield this.clickElementXpath(this.currencySel);
            yield this.clickElementXpath("//*[text() = '" + currency + "']");
        });
    }
    enterRate(rate) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForElementToBePresentName(this.rateInput);
            yield this.sendKeysElementName(this.rateInput, rate);
        });
    }
    selectPaymentFreq(paymentFreq) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForElementToBePresent(this.paymentFreq);
            yield this.clickElementXpath(this.paymentFreq);
            yield this.clickElementXpath("//*[text() = '" + paymentFreq + "']");
        });
    }
    enterSpecialClause() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForElementToBePresent(this.specialClauseBtn);
            yield this.clickElementXpath(this.specialClauseBtn);
            yield this.waitForElementToBePresent(this.specialClauseTxtArea);
            yield this.sendKeysElement(this.specialClauseTxtArea, yield this.generateRandomName(20));
        });
    }
    clickCreatesContractBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForElementToBePresent(this.createContractBtn);
            yield this.clickElementXpath(this.createContractBtn);
        });
    }
}
exports.ContractsPage = ContractsPage;
//# sourceMappingURL=ContractsPage.js.map