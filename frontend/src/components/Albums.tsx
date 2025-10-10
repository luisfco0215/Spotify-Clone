import { Link } from "react-router-dom";

export interface Albums {
    _id: any,
    title: string,
    artist: string,
    imageUrl: string,
    releaseYear: number,
    song: Songs[]
}

export interface Songs {
    _id: any,
    title: string,
    artist: string,
    imageUrl: string,
    audioUrl: string,
    duration: number,
    albumId: any
}

interface Props {
    album: Albums[]
}

const Albums = ({ album }: Props) => {
    return album.map(({ _id, title, artist, imageUrl }) => (
        <Link
            className="p-2 hover:bg-zinc-800 rounded-md flex items-center gap-3 group cursor-pointer"
            to={`/albums/${_id}`}
            key={_id}>
            <img src={imageUrl}
                className="size-12 rounded-md flex-shrink-0 object-cover"
            />
            <div className="flex-1 min-w-0 hidden md:block">
                <p className="font-medium truncate">{title}</p>
                <p className="text-sm text-zinc-400 truncate"> Album • {artist}</p>
            </div>
        </Link>
    ));
}

export default Albums