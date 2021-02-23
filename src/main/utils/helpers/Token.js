import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

class Token {

  /**
   * Generate JWT Token
   * 
   * @param {object} data user data or other data
   * @returns any
   */
  generateToken(data) {
    try {
      if (typeof data != "object") {
        return "data must be an object";
      }
      if (Array.isArray(data)) {
        return "data must be an object";
      }
  
      const secret = process.env.JWT_SECRET || "mysecret";
      const token = jwt.sign({...data}, secret, {expiresIn: process.env.JWT_EXPIRES || "300d"});
      const verify = this.verifyToken(token);
      if (!verify) {
        return "Generate token failed. Cannot verify generated token.";
      }
      return token;
    } catch (error) {
      return error;
    }
  }

  /**
   * Verify JWT Token
   * 
   * @param {string} token jsonwebtoken
   * @param {boolean} decode decode data
   * @returns any
   */
  verifyToken(token, decode) {
    try {
      const secret = process.env.JWT_SECRET || "mysecret";
      const verify = jwt.verify(token, secret);
      if (!verify) {
        return false;
      }
      if (!decode) {
        return true;
      }
      return verify;
    } catch (error) {
      return error;
    }
  }

}

export default new Token();