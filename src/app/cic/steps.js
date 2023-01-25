const photoIdSelect = require("./controllers/photoIdSelection");
const passportDetails = require("./controllers/passportDetails");
const nonUKPassportDetails = require('./controllers/nonUKPassportDetails')
const brpDetails = require("./controllers/brpDetails");
const photocardDlDetails = require('./controllers/photocardDl');
const eeaPermanentResidencyCard = require("./controllers/eeaPermanentResidencyCardDetails");
const euPhotocardDlDetails = require('./controllers/euPhotocardDlDetails')
const citizenCardDetails = require("./controllers/citizenCardDetails");
const euIdentityCardDetails = require("./controllers/euIdentityCardDetails");
const youngScotNationalEntitlementCardDetails = require('./controllers/youngScotNationalEntitlementCardDetails');
const nameEntry = require("./controllers/nameEntry");
const dobEntry = require("./controllers/dateOfBirth");
const root = require("./controllers/root");

module.exports = {

  "/": {
    resetJourney: true,
    reset: true,
    entryPoint: true,
    skip: true,
    controller: root,
    next: "landingPage",
  },
  "/landingPage": {

    next: "photoIdSelection",
  },
  "/photoIdSelection": {
    fields: ['photoIdChoice'],
    controller: photoIdSelect,
    next: photoIdSelect.prototype.next
  },
  "/passportDetails": {
    fields: ["passportExpiryDate"],
    controller: passportDetails,
    next: passportDetails.prototype.next
  },
  "/nonUKPassportDetails": {
    fields: ["nonUKPassportExpiryDate"],
    controller: nonUKPassportDetails,
    next: passportDetails.prototype.next
  },
  "/photocardDlDetails": {
    fields: ["photocardDlExpiryDate"],
    controller: photocardDlDetails,
    next: photocardDlDetails.prototype.next
  },
  "/brpDetails": {
    fields: ["brpExpiryDate"],
    controller: brpDetails,
    next: brpDetails.prototype.next
  },
  "/euIdentityCardDetails": {
    fields: ["euIdCardExpiryDate"],
    controller: euIdentityCardDetails,
    next: euIdentityCardDetails.prototype.next
  },
  "/youngScotNecDetails": {
    fields: ["youngScotNationalEntitlementCardExpiryDate"],
    controller: youngScotNationalEntitlementCardDetails,
    next: youngScotNationalEntitlementCardDetails.prototype.next
  },
  "/citizenCardDetails": {
    fields: ["citizenCardExpiryDate"],
    controller: citizenCardDetails,
    next: citizenCardDetails.prototype.next
  },
  "/eeaPermanentResidencyCardDetails": {
    fields: ["eeaPrCardExpiryDate"],
    controller: eeaPermanentResidencyCard,
    next: eeaPermanentResidencyCard.prototype.next
  },
  "/euPhotocardDlDetails": {
    fields: ["euPhotocardDlExpiryDate"],
    controller: euPhotocardDlDetails,
    next: euPhotocardDlDetails.prototype.next
  },
  '/photoIdExpiry': {

    next: "/photoIdSelection"
  },
  "/nameEntry": {
    fields: ["surname", "firstName", "middleName"],
    controller: nameEntry,
    next: nameEntry.prototype.next
  },
  "/dateOfBirth": {
    fields: ["dateOfBirth"],
    controller: dobEntry,
    next: dobEntry.prototype.next
  },
  "/checkDetails": {
    
    next: "/done",
  },
  '/done': {

  },

};
