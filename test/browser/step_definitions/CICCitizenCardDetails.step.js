const { Given, When, Then, And} = require("@cucumber/cucumber");

const { expect } = require("chai");

const { CitizenCardDetailsPageValid, NameEntryPage} = require("../pages");

  Given(/^the date entered is within accepted CitizenCard expiration window$/, async function () {
    const citizenCardDetails = new CitizenCardDetailsPageValid(await this.page);
  
    await citizenCardDetails.expiryDateDay();

    await citizenCardDetails.expiryDateMonth();

    await citizenCardDetails.expiryDateYear();

  });

  
  When(/^the user clicks the continue button on the CitizenCard details page$/, async function () {
    const citizenCardDetails = new CitizenCardDetailsPageValid(await this.page);
  
    expect(await citizenCardDetails.isCurrentPage()).to.be.true;

    await citizenCardDetails.continue();
  
  });
  

  Then(/^the user is routed to the next screen in the CitizenCard journey - Name Entry$/, async function () {
        const nameEntryPage = new NameEntryPage(await this.page);

        expect(await nameEntryPage.isCurrentPage()).to.be.true;

  });
