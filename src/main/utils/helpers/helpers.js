import FormValidation from "./formValidation";
import Response from "./MyResponse";

class Helpers {

  /**
   * Validate payload body
   * 
   * @param {{}}} schema 
   * @param {{}} body 
   */
  static async validateBody(schema, body) {
    return new Promise(async (resolve, reject) => {
      const validation = await new FormValidation(schema, body);
      if (validation.invalid) {
        const message = validation.message;
        resolve({
          invalid: true,
          result: Response.badrequest({message})
        })
      } 
      resolve(true);
    })
  }
  
}

export default Helpers;