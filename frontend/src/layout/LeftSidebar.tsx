import Albums from "@/components/Albums"
import PlaylistSkeleton from "@/components/skeletons.tsx/PlaylistSkeleton"
import { buttonVariants } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import useMusicStore from "@/stores/useMusicStore"
import { SignedIn } from "@clerk/clerk-react"
import { HomeIcon, Library, MessageCircle } from "lucide-react"
import { useEffect } from "react"
import { Link } from "react-router-dom"

function LeftSidebar() {
    const { albums, fetchAlbums, isLoading } = useMusicStore();

    useEffect(() => {
        fetchAlbums();
    }, [fetchAlbums]);

    return (
        <div className="h-full flex flex-col gap-2">
            {/* Navigation Setcion */}
            <div className="rounded-lg bg-zinc-900 p-4">
                <Link to={"/"}
                    className={cn(buttonVariants({
                        variant: "ghost",
                        className: "w-full justify-start text-white hover:bg-zinc-700"
                    }))}
                >
                    <HomeIcon className="mr-2 size-5" />
                    <span className="hidden md:inline" >Home</span>
                </Link>
                <SignedIn>
                    <Link to={"/chat"}
                        className={cn(buttonVariants({
                            variant: "ghost",
                            className: "w-full justify-start text-white hover:bg-zinc-700"
                        }))}
                    >
                        <MessageCircle className="mr-2 size-5" />
                        <span className="hidden md:inline" >Message</span>
                    </Link>
                </SignedIn>
            </div>

            {/* Library Section */}
            <div className="flex-1 rounded-lg bg-zinc-900 p-4">
                <div className="flex items-center justify-between mb-4" >
                    <div className="flex items-center justify-between px-2">
                        <Library className="size-5 mr-2" />
                        <span className="hidden md:inline font-bold"> Playlist</span>
                    </div>
                </div>
                <ScrollArea className="h-[calc(100vh-300px)]">
                    <div className="space-y-2">
                        {isLoading ? (
                            <PlaylistSkeleton />
                        ) : (
                            <Albums album={albums} />
                        )}
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}

export default LeftSidebar