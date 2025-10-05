import User from "../models/user.model.js";


const authCallback = async (req, res) => {
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

        res.status(200).json("Sucess!");
    } catch (error) {
        console.log("Error in auth callback");
        res.json("internal server error");
    }
}

export default authCallback;