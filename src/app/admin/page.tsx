import { redirect } from 'next/navigation'
import { auth, currentUser } from "@clerk/nextjs";

export default async function Page() {
    // Get the userId from auth() -- if null, the user is not signed in
    const { userId } = auth();
    console.log(userId)
    const AdminId = process.env.CLERK_ADMIN_ID;

    // Get the Backend API User object when you need access to the user's information
    const user = await currentUser()
    //console.log(user)
    // Check if the user is signed in
    if (!user) {
        // Redirect to home page if user is not signed in
        redirect('/')
    }

    if (userId !== AdminId) {
        // Redirect to home page if user is not the admin
        redirect('/')
    }



    // Use `user` to render user details or create UI elements

    return (
        <div>
            An Admin Page
        </div>
    );
}