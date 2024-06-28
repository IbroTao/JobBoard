import { getUser } from "@workos-inc/authkit-nextjs"

export default async function NewListingPage() {
    const {user} = await getUser();
    return (
        <div className="container">
            {!user && (
                <div>You need to be logged in to post a job</div>
            )}
            {user && (
                <div>{JSON.stringify(user)}</div>
            )
            }
        </div>
    )
}