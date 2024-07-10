'use server';
import { getUser } from "@workos-inc/authkit-nextjs"
import { WorkOS } from "@workos-inc/node";


export default async function NewLisitngPage() {
    const {user} = await getUser();

    if(!user) {
        return(
            <div className="container">
                <div>You need to be logged in to post a job</div>
            </div>
        )
    }
    const workos = new WorkOS(process.env.WORKOS_API_KEY)

    const organizationMemberships = await workos.userManagement.listOrganizationMemberships({
            userId: user?.id,  
        })

    return(
        <div className="container">
                <div>
                    <pre>
                        {JSON.stringify(organizationMemberships, null)}
                    </pre>
                    <h2 className="text-lg mt-6">Your companies</h2>
                    <p className="text-sm text-gray-500 mb-2">Select a company</p>
                    <div className="border border-blue-2 00 bg-blue-50 p-4 rounded-md">
                        No companies found assigned to your user
                    </div>

                    <h2 className="text-lg mt-6">Create a new company</h2>
                    <p className="text-gray-500 text-sm mb-2">To create a job listing your first need to register a company</p>
                    <form 
                        action={() => {
                            'use server';
                            
                        }} className="flex gap-2">
                        <input
                            className="p-2 border border-gray-400 rounded-md"
                            type="text" placeholder="company name"/>
                        <button type="submit" className="flex gap-2 bg-gray-200 px-4 py-2 rounded-md">
                            Create company 
                        </button>
                    </form>
                </div>
        </div>
    )
}
    