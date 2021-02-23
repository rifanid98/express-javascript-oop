import Helpers from "../utils/helpers/helpers";
import Token from "../utils/helpers/Token";
import Response from "../utils/helpers/MyResponse";
import {verifyTokenSchema} from "../schemas/example";
import {BAD_REQUEST} from "../utils/helpers/status";

class AuthMiddleware {

  async verifyToken (req, res, next) {
    try {
      let token = req.headers.authorization;
      if (!token) {
        const {_, result} = await Helpers.validateBody(verifyTokenSchema, {token: token});
        return res.status(BAD_REQUEST).send(result);
      }
      if (token.split(" ")[0] === "Bearer") {
        token = token.split(" ")[1];
      }
      const decode = Token.verifyToken(token, true);
      if (decode.toString().toLowerCase() == "jsonwebtokenerror: invalid token") {
        return res.status(BAD_REQUEST).send(Response.badrequest({message: "Invalid Token"}));
      }
      req.app.locals.credentials = {user: decode};
      next();
    } catch (error) {
      return error;
    }
  }

}

export default new AuthMiddleware();
