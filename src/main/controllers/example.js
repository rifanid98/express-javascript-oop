
import Response from "../utils/helpers/MyResponse";
import Helpers from "../utils/helpers/helpers";
import {
  exampleGetSchema, 
  examplePostSchema, 
  exampleUpdateSchema, 
  exampleDeleteSchema
} from "../schemas/example";
import ExampleService from "../services/example";
import Token from "../utils/helpers/Token";
import { SUCCESS } from "../utils/helpers/status";

class ExampleController {

  table = "";

  constructor(table = "") {
    this.table = table;
  }

  /**
   * Test Method for test route
   * @route GET /example
   * @param {*} req Express.Request
   * @param {*} res Exprees.Response
   */
  async exampleLogin(req, res) {
    try {
      const token = Token.generateToken({field: "value"});
      return res.status(SUCCESS).send(Response.success({data: {token}}));
    } catch (error) {
      return Response.error({error});
    }
  }

  /**
   * Test Method for test route
   * @route GET /example
   * @param {*} req Express.Request
   * @param {*} res Exprees.Response
   */
  async exampleGet(req, res) {
    try {
      const query = req.query;

      const {invalid, result} = await Helpers.validateBody(exampleGetSchema, query);
      if (invalid) return res.status(result.status).send(result);

      const get = await ExampleService.exampleGet();
      return res.status(get.status).send(get);
    } catch (error) {
      return Response.error({error});
    }
  }

  /**
   * Test Method for test route
   * @route POST /example
   * @param {*} req Express.Request
   * @param {*} res Exprees.Response
   */
  async examplePost(req, res) {
    try {
      const body = req.body;

      const {invalid, result} = await Helpers.validateBody(examplePostSchema, body);
      if (invalid) return res.status(result.status).send(result);

      const post = await ExampleService.examplePost(body);
      return res.status(post.status).send(post);
    } catch (error) {
      return Response.error({error});
    }
  }

  /**
   * Test Method for test route
   * @route POST /example/:id
   * @param {*} req Express.Request
   * @param {*} res Exprees.Response
   */
  async exampleUpdate(req, res) {
    try {
      const body = req.body;
      const id = req.params.id;

      const {invalid, result} = await Helpers.validateBody(exampleUpdateSchema, body);
      if (invalid) return res.status(result.status).send(result);

      const update = await ExampleService.exampleUpdate(body, id);
      return res.status(update.status).send(update);
    } catch (error) {
      return Response.error({error});
    }
  }

  /**
   * Test Method for test route
   * @route GET /example
   * @param {*} req Express.Request
   * @param {*} res Exprees.Response
   */
  async exampleDelete(req, res) {
    try {
      const id = req.params.id;

      const {invalid, result} = await Helpers.validateBody(exampleDeleteSchema, {id});
      if (invalid) return res.status(result.status).send(result);

      const delete_ = await ExampleService.exampleDelete(id);
      return res.status(delete_.status).send(delete_);
    } catch (error) {
      return Response.error({error});
    }
  }

}

export default new ExampleController("Examples");