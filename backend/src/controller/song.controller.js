import Song from "../models/song.model.js";

export const getAllSongs = async (req, res, next) => {
    try {
        res.json(await Song.find().sort({ createdAt: -1 }));
    } catch (error) {
        next(error);
    }
}

export const getFeaturedSongs = async (req, res, next) => {
    try {
        const songs = await Song.aggregate([
            { $sample: { size: 6 } },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    artist: 1,
                    imageUrl: 1,
                    audioUrl: 1,
                }
            }
        ]);

        res.json(songs);
    } catch (error) {
        next(error);
    }
}

export const getMadeForYouSongs = async (req, res, next) => {
    try {
        const songs = await Song.aggregate([
            { $sample: { size: 4 } },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    artist: 1,
                    imageUrl: 1,
                    audioUrl: 1,
                }
            }
        ]);

        res.json(songs);
    } catch (error) {

    }
}

export const getTrendingSongs = async (req, res, next) => {
    try {
        const songs = await Song.aggregate([
            { $sample: { size: 4 } },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    artist: 1,
                    imageUrl: 1,
                    audioUrl: 1,
                }
            }
        ]);

        res.json(songs);
    } catch (error) {

    }
}

export const getSongById = async (req, res, next) => {
    try {
        const song = await Song.findById(req.params.id);

        if (!song)
            res.status(400).json({ message: "Song not found by the provided ID" });

        res.json(song);
    } catch (error) {
        next(error);
    }
}
