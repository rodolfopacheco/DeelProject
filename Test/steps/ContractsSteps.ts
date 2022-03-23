import { Given } from 'cucumber';
import { HomePage } from '../pages/HomePage';
import { ContractsPage } from '../pages/ContractsPage';

const homePage = new HomePage();
const contractsPage = new ContractsPage();

Given(/^I Select Fixed Rate Contract Option$/, async () => {
    await homePage.clickAcceptCookiesBtn();
    await homePage.closeTipsModal();
    await homePage.clickCreateContractMenu();
    await contractsPage.clickFixedRateBtn();
});

Given(/^I Add a Fix Contract$/, async () => {
    await contractsPage.selectContractorStartDate();
    await contractsPage.enterContractName();
    await contractsPage.selectContractorTaxRes("United States");
    await contractsPage.selectContractorTaxState("Colorado");
    await contractsPage.selectJobTitle("Accountant");
    await contractsPage.selectSeniorityLevel("Junior (Individual Contributor Level 1)");
    await contractsPage.selectPredefinedWorkScope("Account Executive");
    await contractsPage.clicksNextBtn();
    await contractsPage.selectCurrency("GBP - British Pound");
    await contractsPage.enterRate("1000");
    await contractsPage.selectPaymentFreq("Weekly");
    await contractsPage.clicksNextBtn();
    await contractsPage.clicksNextBtn();
    await contractsPage.enterSpecialClause();
    await contractsPage.clicksNextBtn();
    await contractsPage.clickCreatesContractBtn();
});