import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getUser } from "@workos-inc/authkit-nextjs"

export default async function NewLisitngPage() {
    const {user} = await getUser();
    return(
        <div className="container">
            {user && (
                <div>You need to be logged in to post a job</div>
            )}
            {!user && (
                <div>
                    <h2 className="text-lg">Create a new company</h2>
                    <p className="text-gray-500 text-sm mb-2">To create a job listing your first need to register a company</p>
                    <form action="" className="flex gap-2">
                        <input
                            className="p-2 border border-gray-400 rounded-md"
                            type="text" placeholder="company name"/>
                        <button className="flex gap-2 bg-gray-200 px-4 py-2 rounded-md">
                            Create a company 
                            <FontAwesomeIcon className="h-6" icon={faArrowRight}/>
                        </button>
                    </form>
                </div>
            )}
        </div>
    )
}