import User from "../models/user.model.js";


const authCallback = async (req, res, next) => {
    try {
        const { id, firsName, lastName, imageUrl } = req.body;

        const user = await User.findOne({ clerkId: id });

        if (!user) {
            await User.create({
                clerkId: id,
                fullName: `${firsName} ${lastName}`,
                imageUrl
            });
        }

        res.status(200).json({ message: "Sucess!" });
    } catch (error) {
        next(error);
    }
}

export default authCallback;