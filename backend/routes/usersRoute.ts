import express, { Request, Response } from 'express';

const route = express.Router();

route.get('/', (req: Request, res: Response) => {
    res.send('Hello Users!');
});

route.get('/user', (req: Request, res: Response) => {
    res.send({
        name: 'John Doe',
        age: 25
    });
});

export default route;