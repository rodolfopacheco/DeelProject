import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    //LOCATORS.
    public createContractMenu: string = "//a[@href='/create']";
    public acceptCookiesBtn: string = "CybotCookiebotDialogBodyButtonAccept";

    //Tips Modal.
    public nextBtn: string = "(//div[@class='modal-content']//button[@theme='text-primary' and @sizetype='lg'])[2]";

    //METHODS.

    //Clicks Create Contract menu.
    async clickCreateContractMenu(){
        await this.waitForElementToBePresent(this.createContractMenu);
        await this.clickElementXpath(this.createContractMenu);
    }

    //Clicks Accept Cookies button.
    async clickAcceptCookiesBtn(){
        await this.waitForElementToBePresentID(this.acceptCookiesBtn);
        await this.clickElementID(this.acceptCookiesBtn);
    }

    //Accepts and closes the Tips Modal Pop-up.
    async closeTipsModal(){
        await this.waitForElementToBePresent(this.nextBtn);
        await this.clickElementXpath(this.nextBtn);
        await this.clickElementXpath(this.nextBtn);
        await this.clickElementXpath(this.nextBtn);
        await this.clickElementXpath(this.nextBtn);
    }
}