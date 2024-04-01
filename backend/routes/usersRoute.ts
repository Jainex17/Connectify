import express, { Request, Response } from 'express';
import { getAllUsers, createUser, deleteUser, getUser, updateUser } from '../actions/userActions';

const route = express.Router();

route.get('/', (req: Request, res: Response) => {
    res.send('Hello Users!');
});

route.get('/getallusers', getAllUsers);
route.post('/createuser', createUser);
route.get('/user/:id', getUser);
route.patch('/update/:id', updateUser);
route.delete('/:id', deleteUser);


export default route;