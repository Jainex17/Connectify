import express, { Request, Response } from 'express';
import { createTeam, getTeamById } from '../actions/teamAction';

const route = express.Router();

// create a team 
route.post('/team', createTeam);

// get a team by id
route.get('/team/:id', getTeamById);


export default route;