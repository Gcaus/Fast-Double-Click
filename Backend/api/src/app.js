import express from 'express';
import cors from 'cors';

import Home from '../routes/home.routes.js';
import HistRecords from '../routes/histRecords.routes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', Home);
app.use('/records', HistRecords)

export default app;