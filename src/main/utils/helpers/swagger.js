/**
 * swagger configuration
 */
import swaggerJsdoc from 'swagger-jsdoc';

const option = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Okedok RESTful API",
      version: "2.0.0",
      description:
        "This is a REST API application made with MEN (Mongo, Express, NodeJS) and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Okedok",
        url: "https://okedok.co.id",
        email: "customercare@okedok.co.id",
      },
    },
    servers: [
      {
        url: "http://localhost:4849/v2",
      },
    ],
  },
  apis: ["./src/utils/swagger/*.yml"],
}

const specs = swaggerJsdoc(option);
export default specs;