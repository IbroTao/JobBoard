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
                    <form action=""></form>
                    <button className="bg-gray-200 px-4 py-2 rounded-md">
                        Create a company
                    </button>
                </div>
            )}
            <div>{JSON.stringify(user)}</div>
        </div>
    )
}