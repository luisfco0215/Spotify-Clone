import User from "../models/user.model.js";

const getAllUsers = async (req, res, next) => {
    try {
        const currentUserId = req.auth.userId;
        res.json(await User.find({ clerkId: { $ne: currentUserId } }));
    } catch (error) {
        next(error);
    }
}

export default getAllUsers;