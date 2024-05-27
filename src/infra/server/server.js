import express from 'express';
import router from '../api/router/router.js';
import { getErrors } from '../utils/error/errors.js';

const app = express();

app.use(express.json());
app.use(router);

export default app;