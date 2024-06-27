import { getUser } from "@workos-inc/authkit-nextjs"

export default async function NewListingPage() {
    const {user} = await getUser();
    return (
        <div>
            new listing
        </div>
    )
}