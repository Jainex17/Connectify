import Team from "../models/teamSchema";
import User from "../models/userSchema";

export const createTeam = async (req: any, res: any) => {
    try {
    const {name, description, members} = req.body;
    
    // check if members are not in same domain and there availability is true if 2 or more member are in same domain or availability is false then return error
    const teammembers = await User.find({ id: { $in: members } });
    const domainSet = new Set();
    let availability = true;
    teammembers.forEach((member: any) => {
        if(domainSet.has(member.domain)) {
            return res.status(400).json({ message: 'Members are not allowed to be in the same domain' });
        }
        domainSet.add(member.domain);
        if (!member.available) {
            availability = false;
        }
    });

    if (domainSet.size === 1 || !availability) {
        return res.status(400).json({ message: 'Members are not allowed to be in the same domain or have Not-Available' });
    }

    // update user availability to false
    await User.updateMany({ id: { $in: members } }, { available: false });

    const newTeam = new Team({ name, description, members });
    
        await newTeam.save();
        res.status(201).json(newTeam);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getTeamById = async (req: any, res: any) => {
    const { id } = req.params;

    try {
        const team = await Team.findOne({
            id
        });
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getTeams = async (req: any, res: any) => {
    try {
        const teams = await Team.find();
        res.status(200).json(teams);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}