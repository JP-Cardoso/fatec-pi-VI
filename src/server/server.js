import express from 'express';
import router from '../router/router.js';
import { getErrors } from '../utils/error/errors.js';

const app = express();

app.use(express.json());
app.use(router);
app.use(getErrors);

export default app;