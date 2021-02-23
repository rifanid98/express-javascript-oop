import ExampleRepository from "../repositories/example";
import Response from "../utils/helpers/MyResponse";

class ExampleServices {

  /**
   * Example Get Data
   * @returns {Promise<Response>} MySQL rows or some object
   */
  async exampleGet() {
    try {
      const exampleGet = await ExampleRepository.exampleGetData();
      return Response.success({data: exampleGet})
    } catch (error) {
      console.log(error, `<<< ${__filename} | exampleGet()`);
      return Response.error();
    }
  }

  /**
   * Example Post Data
   * @param {object} data
   * @returns {Promise<Response>} MySQL rows or some object
   */
  async examplePost(data) {
    try {
      await ExampleRepository.examplePostData(data);
      return Response.created({message: "Dummy data inserted"});
    } catch (error) {
      console.log(error, `<<< ${__filename} | examplePost()`);
      return Response.error();
    }
  }

  /**
   * Example Update Data
   * @returns {Promise<Response>} MySQL rows or some object
   */
  async exampleUpdate(data, id) {
    try {
      if (id != 1) {
        return Response.notfound({message: "Id not found"});
      }
      const update = await ExampleRepository.exampleUpdateData(data, id);
      if (!update) {
        return Response.error({error: "Dummy data failed to update"});
      }
      return Response.success({message: "Dummy data updated"});
    } catch (error) {
      console.log(error, `<<< ${__filename} | exampleUpdate()`);
      return Response.error();
    }
  }

  /**
   * Example Delete Data
   * @returns {Promise<Response>} MySQL rows or some object
   */
  async exampleDelete(id) {
    try {
      if (id != 1) {
        return Response.notfound({message: "Id not found"});
      }
      const Delete = await ExampleRepository.exampleDeleteData(id);
      if (!Delete) {
        return Response.error({error: "Dummy data failed to Delete"});
      }
      return Response.success({message: "Dummy data Deleted"});
    } catch (error) {
      console.log(error, `<<< ${__filename} | exampleDelete()`);
      return Response.error();
    }
  }
  
}

export default new ExampleServices();