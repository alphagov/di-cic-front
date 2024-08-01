const nameEntry = require("./controllers/nameEntry");
const dobEntry = require("./controllers/dateOfBirth");
const checkDetails = require("./controllers/checkDetails");
const root = require("./controllers/root");
const journeyType = require("./controllers/journeyType");

module.exports = {
  "/": {
    resetJourney: true,
    reset: true,
    entryPoint: true,
    skip: true,
    controller: root,
    next: "journey-type",
  },
  "/journey-type": {
    entryPoint: true,
    skip: true,
    controller: journeyType,
    next: [
      {
        field: "journeyType",
        value: "FACE_TO_FACE",
        next: "enter-name"
      },
      {
        field: "journeyType",
        value: "NO_PHOTO_ID",
        next: "enter-name-no-photo-id",
      },
    ],
  },
  "/enter-name": {
    editable: true,
    editBackStep: "confirm-details",
    fields: ["surname", "firstName", "middleName"],
    controller: nameEntry,
    next: "enter-date-birth",
  },
  "/enter-name-no-photo-id": {
    editable: true,
    editBackStep: "confirm-details",
    fields: ["surname", "firstName", "middleName"],
    controller: nameEntry,
    next: "enter-date-birth-no-photo-id",
  },
  "/enter-date-birth": {
    editable: true,
    editBackStep: "confirm-details",
    fields: ["dateOfBirth"],
    controller: dobEntry,
    next: "confirm-details",
  },
  "/enter-date-birth-no-photo-id": {
    editable: true,
    editBackStep: "confirm-details",
    fields: ["dateOfBirth"],
    controller: dobEntry,
    next: "confirm-details-no-photo-id",
  },
  "/confirm-details": {
    controller: checkDetails,
    next: "done",
  },
  "/confirm-details-no-photo-id": {
    controller: checkDetails,
    next: "done",
  },
  "/done": {
    skip: true,
    noPost: true,
    next: "/oauth2/callback",
  },
  "/error": {
    entryPoint: true,
  },
};
