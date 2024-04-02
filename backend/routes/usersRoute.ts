import express from 'express';
import { getAllUsers, createUser, deleteUser, getUser, updateUser, searchUser, filterUsers } from '../actions/userActions';

const route = express.Router();

// get all users 20 at a time
route.get('/users', getAllUsers);

// create a user
route.post('/users', createUser);

// get a user by id
route.get('/users/:id', getUser);

// update a user by id
route.put('/users/:id', updateUser);

// delete a user by id
route.delete('/users/:id', deleteUser);

// search a user by name
route.get('/search/:name', searchUser);

// filter users by availability, domain, and gender
route.get('/filter', filterUsers);

export default route;