import express from 'express';

/** Controllers */
import ExampleController from '../controllers/example';

/** Middleware */
import AuthMiddleware from "../middlewares/auth";

class ExampleRouter {
  
  /**
   * Init express.Router inistance 
   * and use the routes
   */
  constructor() {
    this.router = express.Router()
    this.routes();
  }

  /**
   * Routes
   */
  routes() {
    this.router.get('/login', (r,s)=>ExampleController.exampleLogin(r,s));
    this.router.get('/',      AuthMiddleware.verifyToken, (r,s)=>ExampleController.exampleGet(r,s));
    this.router.post('/',     AuthMiddleware.verifyToken, (r,s)=>ExampleController.examplePost(r,s));
    this.router.put('/:id',   AuthMiddleware.verifyToken, (r,s)=>ExampleController.exampleUpdate(r,s));
    this.router.delete('/:id',AuthMiddleware.verifyToken, (r,s)=>ExampleController.exampleDelete(r,s));
  }

}

export default new ExampleRouter().router;