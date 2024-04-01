import express, { Request, Response } from 'express';
import { getAllUsers, createUser, deleteUser, getUser, updateUser, searchUser, filterUsers } from '../actions/userActions';

const route = express.Router();

route.get('/', (req: Request, res: Response) => {
    res.send('Hello Users!');
});

route.get('/users', getAllUsers);
route.post('/users', createUser);
route.get('/users/:id', getUser);
route.put('/users/:id', updateUser);
route.delete('/users/:id', deleteUser);

route.get('/search/:name', searchUser);
route.get('/filter', filterUsers);



export default route;