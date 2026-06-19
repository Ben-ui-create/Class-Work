import 'dotenv/config';
import morgan from 'morgan';
import {createServer} from 'http';
import express from 'express';
import cookieParser from 'cookie-parser';

import './migrate.js';

import errorHandler from './middlewares/errorHandler.js';
import sessionMiddleware from './config/session.js';

const app = express();

const {PORT, COOKIE_SECRET} = process.env;

app.use(morgan('dev'));
app.use(express.json());
app.use(sessionMiddleware);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(COOKIE_SECRET));


app.use(errorHandler.notFount);
app.use(errorHandler.errors);

const server = createServer(app);

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
