export default function JobRow() {
    return(
        <>
            <div className="bg-white p-6 rounded-md shadow-sm flex gap-4">
                <div className="content-center">
                    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" alt="" /> */}
                    <img 
                        className="size-12"
                        src="../images/me.jpg" alt="" />
                </div>
                <div className="grow">
                    <div className="text-gray-500 text-sm">Spotify</div>
                    <div className="font-bold text-lg">Product Designer</div>
                    <div className="text-sm text-gray-400 mb-1">
                        Remote &middot; New York, USA &middot; Full-time
                    </div>
                </div>
                <div className="content-end text-sm text-gray-500">
                    2 weeks ago
                </div>
            </div>
        </>
    )
}

