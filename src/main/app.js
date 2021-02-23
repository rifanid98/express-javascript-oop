import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import swaggerUi from 'swagger-ui-express';
import specs from './utils/helpers/swagger';
// import connectDB from './utils/configs/mysql/database';

dotenv.config();
const app = express();
// connectDB();

/** Middlewares */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(cookieParser());

/** Test Route */
app.get('/', function (_, res) {
  return res.status(200).json({
    status: 200,
    message: "Okedok API already to war."
  });
});

/** Swager Route */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

/** Routers */
import AppRouter from "./routes";
app.use('/v2', AppRouter);

export default app;