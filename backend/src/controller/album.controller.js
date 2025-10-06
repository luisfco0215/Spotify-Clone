import Album from "../models/album.model.js";


export const getAllAlbums = async (req, res, next) => {
    try {
        res.json(await Album.find());
    } catch (error) {
        next(error);
    }
}

export const getAlbumById = async (req, res, next) => {
    try {
        const album = await Album.findById(req.params.id).populate("songs");

        if (!album)
            res.status(400).json({ message: "Album not found by the provided ID" });

        res.json(album);
    } catch (error) {
        next(error);
    }
}

