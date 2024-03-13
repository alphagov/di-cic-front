const { Controller: BaseController } = require("hmpo-form-wizard");
const { API } = require("../../../lib/config");

class JourneyTypeController extends BaseController {
  async saveValues(req, res, next) {
    console.log("Caitlin: we are in the journeyType controller 🎉");

    try {
      const headers = {
        "x-govuk-signin-session-id": req.session.tokenId,
      };

      const { data } = await req.axios.get(`${API.PATHS.SESSION_CONFIG}`, {
        headers,
      });
      req.sessionModel.set("journeyType", data.journey_type);

      console.log("Caitlin: we have set the journeyType 🎉");
      return next();
    } catch (error) {
      console.log("Caitlin: we couldn't set the journeyType 😔", error);

      console.log("Error fetching journey type", error);
      return next(error);
    }
  }
}

module.exports = JourneyTypeController;
