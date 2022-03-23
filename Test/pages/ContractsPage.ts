import { BasePage } from './BasePage';

export class ContractsPage extends BasePage {
    //LOCATORS.
    //Main Page.
    public fixedRateBtn: string = "//a[@href='/create/fixed']";

    //Fixed Rate.
    public contractorStartDateDdl: string = "//div[@class='deel-ui__calendar-input-container__input']";
    public contractNameInput: string = "name";
    public contractorTaxResSel: string = "//div[@data-qa='contractor-tax-residence' and @class='deel-ui__select__input-container']";
    public contractorStateSel: string = "//div[@data-qa='contractor-tax-residence-province']";
    public jobTitleSel: string = "jobTitle";
    public seniorityLevelSel: string = "//div[@data-qa='selector-seniority-level']";
    public predefinedScopesSel: string = "//div[@class='flex scopes-dropdown-toggle align-items-center']";
    public nextBtn: string = "//button[@data-qa='next']";
    public currencySel: string = "//div[@data-qa='currency-select']";
    public rateInput: string = "rate";
    public paymentFreq: string = "//div[@data-qa='cycle-select']";
    public specialClauseBtn: string = "//button[@data-qa='add-a-special-clause']";
    public specialClauseTxtArea: string = "//div[@data-qa='special-clause-card']//textarea";
    public createContractBtn: string = "//button[@data-qa='create-contract']";

    //METHODS.

    //Clicks on Fixed Rate option.
    async clickFixedRateBtn() {
        await this.waitForElementToBePresent(this.fixedRateBtn);
        await this.clickElementXpath(this.fixedRateBtn);
    }

    //Sets the Contractor's Start Date to Today Minus 1.
    async selectContractorStartDate() {
        await this.waitForElementToBePresent(this.contractorStartDateDdl);
        await this.clickElementXpath(this.contractorStartDateDdl);
        await this.clickElementXpath("//abbr[text()='" + await this.generateDateMinusOne() + "']/ancestor::button");
    }

    //Enters a new contract name.
    async enterContractName() {
        await this.waitForElementToBePresentName(this.contractNameInput);
        await this.sendKeysElementName(this.contractNameInput, await this.generateRandomName(10));
    }

    //Selects a Contractor's Tax Residence.
    async selectContractorTaxRes(countryXPath: string) {
        await this.waitForElementToBePresent(this.contractorTaxResSel);
        await this.clickElementXpath(this.contractorTaxResSel);
        await this.clickElementXpath("//*[text() = '" + countryXPath + "']");
    }

    //Selects a Contractor's State.
    async selectContractorTaxState(stateXPath: string) {
        await this.waitForElementToBePresent(this.contractorStateSel);
        await this.clickElementXpath(this.contractorStateSel);
        await this.clickElementXpath("//*[text() = '" + stateXPath + "']");
    }

    //Selects a Job Title.
    async selectJobTitle(jobTitleXPath: string) {
        await this.waitForElementToBePresentName(this.jobTitleSel);
        await this.clickElementName(this.jobTitleSel);
        await this.clickElementXpath("//*[text() = '" + jobTitleXPath + "']");
    }

    //Selects a Seniority Level.
    async selectSeniorityLevel(seniorityXPath: string) {
        await this.waitForElementToBePresent(this.seniorityLevelSel);
        await this.clickElementXpath(this.seniorityLevelSel);
        await this.clickElementXpath("//*[text() = '" + seniorityXPath + "']");
    }

    //Selects a Predefined Work Scope Level.
    async selectPredefinedWorkScope(predefScope: string) {
        await this.waitForElementToBePresent(this.predefinedScopesSel);
        await this.clickElementXpath(this.predefinedScopesSel);
        await this.clickElementXpath("//span[text()='" + predefScope + "']/ancestor::button");
    }

    //Clicks Next Button.
    async clicksNextBtn() {
        await this.waitForElementToBePresent(this.nextBtn);
        await this.clickElementXpath(this.nextBtn);
    }

    //Selects a Currency.
    async selectCurrency(currency: string) {
        await this.waitForElementToBePresent(this.currencySel);
        await this.clickElementXpath(this.currencySel);
        await this.clickElementXpath("//*[text() = '" + currency + "']");
    }

    //Enters a new rate.
    async enterRate(rate: string) {
        await this.waitForElementToBePresentName(this.rateInput);
        await this.sendKeysElementName(this.rateInput, rate);
    }

    //Selects a Payment Frequency.
    async selectPaymentFreq(paymentFreq: string) {
        await this.waitForElementToBePresent(this.paymentFreq);
        await this.clickElementXpath(this.paymentFreq);
        await this.clickElementXpath("//*[text() = '" + paymentFreq + "']");
    }

    //Enters a special clause.
    async enterSpecialClause() {
        await this.waitForElementToBePresent(this.specialClauseBtn);
        await this.clickElementXpath(this.specialClauseBtn);

        await this.waitForElementToBePresent(this.specialClauseTxtArea);
        await this.sendKeysElement(this.specialClauseTxtArea, await this.generateRandomName(20));
    }

    //Clicks Create Contract button.
    async clickCreatesContractBtn() {
        await this.waitForElementToBePresent(this.createContractBtn);
        await this.clickElementXpath(this.createContractBtn);
    }
}
