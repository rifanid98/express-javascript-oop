import Models from "../models";

class ExampleRepository {

  table = "";

  constructor(table) {
    this.table = table;
  }

  /**
   * Example Get Custom Data
   * @returns MySQL rows
   */
  async exampleGetData() {
    return new Promise(async (resolve, reject) => {
      try {
        // const get = await Models.Examples.findAll();
        // console.log(get);
        resolve({
          example1: "value1",
          example2: "value2"
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Example Post Custom Data
   * @returns MySQL rows
   */
  async examplePostData(data) {
    return new Promise(async (resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(data);
        }, 1000);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Example Update Custom Data
   * @returns MySQL rows
   */
  async exampleUpdateData(data, id) {
    return new Promise(async (resolve, reject) => {
      try {
        if (id != 1) {
          resolve(false);
        }
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }
  
  /**
   * Example Delete Custom Data
   * @returns MySQL rows
   */
  async exampleDeleteData(id) {
    return new Promise(async (resolve, reject) => {
      try {
        if (id != 1) {
          resolve(false);
        }
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  }

}

export default new ExampleRepository("Examples");