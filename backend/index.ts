import express from 'express';
const app = express();
const port = 5000;
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './db_connect/database';

dotenv.config();
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnect();

import usersRoute from './routes/usersRoute';
app.use('/api/v1', usersRoute);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`backend listening at http://localhost:${port}`);
});