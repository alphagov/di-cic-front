const { Given, When, Then, And} = require("@cucumber/cucumber");

const { expect } = require("chai");

const { EuDrivingLicenceDetailsPage, NameEntryPage } = require("../pages");

  Given(/^the EU Driving Licence date entered is within accepted expiration window$/, async function () {
    const euDrivingLicenceDetailsPage = new EuDrivingLicenceDetailsPage(await this.page);
  
    await euDrivingLicenceDetailsPage.expiryDateDay();

    await euDrivingLicenceDetailsPage.expiryDateMonth();

    await euDrivingLicenceDetailsPage.expiryDateYear();

  });


  When(/^the user clicks the continue button on the EU Driving Licence details page$/, async function () {
    const euDrivingLicenceChoice = new EuDrivingLicenceDetailsPage(await this.page);

    await euDrivingLicenceChoice.continue();
  
  });
  

  Then(/^the user is routed from EU DL Details to Name Entry Screen$/, async function () {
    const nameEntryPage = new NameEntryPage(await this.page);

    expect(await nameEntryPage.isCurrentPage()).to.be.true;

  });