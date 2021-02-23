/**
 * @description   this helper is use for response method
 * @author        APP DEV Team NashTa
 * @since         2021
 */

import { BAD_REQUEST, CONFLICT, CREATED, ERROR, FORBIDDEN, NOT_FOUND, SUCCESS, UNAUTHORIZED } from "./status";

/**
 * success response function
 * @param {string} message
 * @param {object | array} result
 */
export function successResponse(message, result) {
  if (Array.isArray(result)) {
    return {
      success: true,
      message,
      result,
      total: result.length,
    };
  }

  return {
    success: true,
    message,
    result,
  };
}

/**
 * error response
 * @param {*} message
 * @param {*} errors
 */
export function errorResponse(message, errors = '') {
  return {
    success: false,
    message,
    errors,
  };
}

/**
 * validation error response
 * @param {*} errors
 */
export function validationResponse(errors = '') {
  return {
    success: false,
    message: 'Validation errors',
    errors,
  };
}

/**
 * success response function
 * @param {string} message
 * @param {object | array} result
 */
export function successResponseObj({message = undefined, result = undefined}) {
  if (Array.isArray(result)) {
    return {
      success: SUCCESS,
      message,
      result,
      total: result.length,
    };
  }

  return {
    success: SUCCESS,
    message,
    result,
  };
}

/**
 * success response function
 * @param {string} message
 * @param {object | array} result
 */
export function createdResponseObj({message = undefined, result = undefined}) {
  if (Array.isArray(result)) {
    return {
      status: CREATED,
      message,
      result,
      total: result.length,
    };
  }

  return {
    status: CREATED,
    message,
    result,
  };
}

/**
 * error response
 * @param {*} message
 * @param {*} errors
 */
export function errorResponseObj({
  message = undefined, 
}) {
  return {
    status: ERROR,
    message,
  };
}


/**
 * error response
 * @param {*} message
 * @param {*} errors
 */
export function notfoundResponseObj({message = undefined}) {
  return {
    status: NOT_FOUND,
    message
  };
}

/**
 * validation error response
 * @param {*} errors
 */
export function validationResponseObj({errors = undefined}) {
  return {
    success: false,
    message: 'Validation errors',
    errors,
  };
}

export function printError(error = "", path = "") {
  console.log("#".repeat(50))
  console.log("                    START ERROR")
  console.log("#".repeat(50))
  console.log("Simple:")
  console.log(error.toString() + "\n")
  console.log("Details: ")
  console.log(error);
  console.log()
  console.log("File:")
  console.log(path)
  console.log("#".repeat(50))
  console.log("                    END ERROR")
  console.log("#".repeat(50))
}