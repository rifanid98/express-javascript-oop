import express from 'express';

/** Routers */
import ExampleRouter from "./example";

class AppRouter {
  
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
    this.router.use('/example', ExampleRouter);
    // more routes here
  }

}

export default new AppRouter().router;