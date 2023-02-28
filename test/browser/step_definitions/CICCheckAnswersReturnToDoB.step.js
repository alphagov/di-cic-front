const { Given, When, Then} = require("@cucumber/cucumber");

const { expect } = require("chai");

const { CheckDetailsPage, DateOfBirthPage }  = require("../pages");

Given(/^the user has navigated to the Check My Answers page$/, async function () {
    const cdPage = new CheckDetailsPage(await this.page);

    expect(await cdPage.isCurrentPage()).to.be.true;

});

When(/^the Back link is clicked on the Check My Answers page$/, async function () {
  const cdPage = new CheckDetailsPage(await this.page);

  await cdPage.back();

})

Then(/^the user is navigated back to the DOB Entry page$/, async function () {
  const doBPage = new DateOfBirthPage(await this.page);

  expect(await doBPage.isCurrentPage()).to.be.true;
});

