/**
 * 
 */
import {
  BAD_REQUEST,
  CONFLICT,
  CREATED,
  ERROR,
  FORBIDDEN,
  GONE,
  NOT_FOUND,
  SUCCESS,
  UNAUTHORIZED,
  NO_CONTENT
} from "./status";

 class Response {
  
  static resp = {};

  /**
   * Created Response
   * 
   * @param {object} {message?, data?} 
   * @returns {object}
   */
  static created({message = "", data = ""} = {}) {
    this.clear();
    this.resp.status = CREATED;
    this.resp.message = message ? message : "Created";
    data ? (this.resp.data = data) : false;
    return this.resp;
  }

  /**
   * Success Response
   * 
   * @param {object} {message?, data?} 
   * @returns {object}
   */
  static success({message = "", data = ""} = {}) {
    this.clear();
    this.resp.status = SUCCESS;
    this.resp.message = message ? message : "Success";
    data ? (this.resp.data = data) : false;
    return this.resp;
  }

  /**
   * Success Response
   * 
   * @param {object} {message?, data?} 
   * @returns {object}
   */
  static deleted({message = ""} = {}) {
    this.clear();
    this.resp.status = NO_CONTENT;
    this.resp.message = message ? message : "Deleted";
    return this.resp;
  }

  /**
   * Error Response
   * 
   * @param {object} {message?, data?} 
   * @returns {object}
   */
  static error({error = ""} = {}) {
    this.clear();
    this.resp.status = ERROR;
    this.resp.error = error ? error : "Internal Server Error";
    return this.resp
  }

  /**
   * Bad Request Response
   * 
   * @param {object} {message?, data?} 
   * @returns {object}
   */
  static badrequest({message = ""} = {}) {
    this.clear();
    this.resp.status = BAD_REQUEST;
    this.resp.message = message ? message : "Bad Request";
    return this.resp;
  }

  /**
   * Not Found Response
   * 
   * @param {object} {message?, data?} 
   * @returns {object}
   */
  static notfound({message = ""} = {}) {
    this.clear();
    this.resp.status = NOT_FOUND;
    this.resp.message = message ? message : "No Data Found";
    return this.resp;
  }

  /**
   * Unauthorized Response
   * 
   * @param {object} {message?, data?} 
   * @returns {object}
   */
  static unauthorized({message = ""} = {}) {
    this.clear();
    this.resp.status = UNAUTHORIZED;
    this.resp.message = message ? message : "Unauthorized";
    return this.resp;
  }

  /**
   * Forbidden Response
   * 
   * @param {object} {message?, data?} 
   * @returns {object}
   */
  static forbidden({message = ""} = {}) {
    this.clear();
    this.resp.status = FORBIDDEN;
    this.resp.message = message ? message : "Forbidden";
    return this.resp;
  }

  /**
   * Conflict Response
   * 
   * @param {object} {message?, data?} 
   * @returns {object}
   */
  static conflict({message = ""} = {}) {
    this.clear();
    this.resp.status = CONFLICT;
    this.resp.message = message ? message : "Conflict";
    return this.resp;
  }

  /**
   * Gone Response
   * 
   * @param {object} {message?, data?} 
   * @returns {object}
   */
  static gone({message = ""} = {}) {
    this.clear();
    this.resp.status = GONE;
    this.resp.message = message ? message : "Created";
    return this.resp;
  }

  /**
   * Clearing response for new use
   */
  static clear() {
    this.resp = {};
  }

 }

 export default Response;