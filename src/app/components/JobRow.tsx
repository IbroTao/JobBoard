import { faHeart } from "@fortawesome/free-regular-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
export default function JobRow() {
    return(
        <>
            <div className="bg-white p-4 rounded-md shadow-sm relative">
                <div className="absolute top-2 right-4">
                    <FontAwesomeIcon className="size-6 text-gray-500" icon={faHeart}/>
                </div>
                <div className="flex grow gap-4">
                    <div className="content-center">
                        {/* <img className="size-12" src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" alt="" /> */}
                        <img className="size-12" src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"/>
                    </div>
                    <div className="grow sm:flex">
                        <div className="grow">
                            <div className="text-gray-500 text-sm">Microsoft</div>
                            <div className="font-bold text-lg mb-1">Product Designer</div>
                            <div className="text-sm text-gray-400">
                                Remote &middot; New York, USA &middot; Full-time
                            </div>
                        </div>
                        <div className="content-end text-sm text-gray-500">
                            2 weeks ago
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

