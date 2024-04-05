import User from "../models/userSchema";

export const getAllUsers = async (req: any, res: any) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 20;
    const skip = (page - 1) * limit;
    try {
        const users = await User.find().limit(limit).skip(skip);
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createUser = async (req: any, res: any) => {
    const user = req.body;
    const newUser = new User(user);
    
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const getUser = async (req: any, res: any) => {
    const { id } = req.params;
    try {
        const user = await User.findOne({
            id
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const updateUser = async (req: any, res: any) => {
    const { id } = req.params;
    const user = req.body;
    if (!User.exists({ id })) {
        return res.status(404).json({ message: "User not found" });
    }
    try {
        await User.updateOne({ id }, user);
        res.status(200).json(user);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const deleteUser = async (req: any, res: any) => {
    const { id } = req.params;
    if (!User.exists({ id })) {
        return res.status(404).json({ message: "User not found" });
    }
    try {
        await User.deleteOne({ id });
        res.status(200).json({ message: "User deleted" });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const searchUser = async (req: any, res: any) => {
    const { name } = req.params;
    try {
        const users = await User.find({
            $or: [
            { first_name: { $regex: name, $options: "i" } },
            { last_name: { $regex: name, $options: "i" } }
            ]
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const filterUsers = async (req: any, res: any) => {
    const { domain, gender, available } = req.query;

    const page = parseInt(req.query.page) || 1;
    const limit = 20;
    const skip = (page - 1) * limit;
    
    const query: { [key: string]: any } = {};
    const andQuery: { [key: string]: any } = {};

    if (domain !== "default") {
      andQuery.domain = new RegExp(domain, "i");
    }
  
    if (gender !== "default") {
      andQuery.gender = { $regex: new RegExp(`^${gender}$`, "i") };
    }
  
    if (available !== "default") {      
      query.available = available === "True";
    }
  
    if (Object.keys(andQuery).length > 0) {
      query.$and = [andQuery];
    }

    try {
        const users = await User.find({ $or: [query] })
      .limit(limit)
      .skip(skip);
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    };
};

export const getUsersByMultipleIds = async (req: any, res: any) => {
    const { ids } = req.body;
    try {
        const users = await User.find({
            id: { $in: ids }
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}