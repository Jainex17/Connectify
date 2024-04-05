import express, { Request, Response } from 'express';
import { createTeam, getTeamById, getTeams } from '../actions/teamAction';

const route = express.Router();

// create a team 
route.post('/team', createTeam);

// get all teams
route.get('/team', getTeams);

// get a team by id
route.get('/team/:id', getTeamById);

export default route;