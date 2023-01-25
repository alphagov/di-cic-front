const BaseController = require("hmpo-form-wizard").Controller;
const DateControllerMixin = require("hmpo-components").mixins.Date;

const DateController = DateControllerMixin(BaseController);

class DateOfBirthController extends DateController {

  locals(req, res, callback) {
    super.locals(req, res, (err, locals) => {
      if (err) {
        return callback(err, locals);
      }

      locals.dateOfBirth = req.sessionModel.get("dateOfBirth");

      callback(err, locals);
    });
  }

    next(req) {
      console.log("!!!!!DATE OF BIRTH!!!!!")
      console.log(req.form.values);
      return "/checkDetails"
    } 
}
module.exports = DateOfBirthController; 
