const moment = require('moment');
const BaseController = require("hmpo-form-wizard").Controller;
const DateControllerMixin = require("hmpo-components").mixins.Date;

const DateController = DateControllerMixin(BaseController);

class YoungScotNationalEntitlementCardDetailsController extends DateController {

  locals(req, res, callback) {
    super.locals(req, res, (err, locals) => {
      if (err) {
        return callback(err, locals);
      }

      locals.youngScotNationalEntitlementCardExpiryDate = req.sessionModel.get("youngScotNationalEntitlementCardExpiryDate");

      callback(err, locals);
    });
  }

  async saveValues(req, res, next) {
    try {
      //User input 
      const youngScotNationalEntitlementCardExpiryDate = req.form.values.youngScotNationalEntitlementCardExpiryDate;
      const inputDate = moment(youngScotNationalEntitlementCardExpiryDate, 'YYYY-MM-DD');
      const inputDateUTC = inputDate.utc()

      // Lower limit for date input
      const lowerUTC = new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      )
      .toISOString()
      //.split("T")[0];

      //Upper limit for date input  
      const upperUTC = new Date(
        new Date().getFullYear() + 15,
        new Date().getMonth(),
        new Date().getDate()
      )
      .toISOString()
      //.split("T")[0];
      
      // Compare user input between upper and lower limits
      const isOutsideExpireWindow = inputDateUTC.isBetween(  
        lowerUTC, upperUTC,'days','[]'
      )

      req.sessionModel.set("isOutsideExpireWindow", isOutsideExpireWindow);
      req.sessionModel.set("expiryDate", youngScotNationalEntitlementCardExpiryDate);
      req.sessionModel.set("photoIdChoice", "Young Scot National Entitlement Card");
      req.sessionModel.set("changeUrl", "youngScotNecDetails");

      return next();
    } catch (err) {
      return next(err);
    }
  }

  next(req) {
    if (req.sessionModel.get("isOutsideExpireWindow")) {
      return "/nameEntry"
    } else{
      return "/photoIdExpiry"
    }
  }
}
module.exports = YoungScotNationalEntitlementCardDetailsController;
