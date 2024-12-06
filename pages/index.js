import { useRouter } from "next/router";
import { useEffect } from "react";
import UserProfileCard from "@/components/UserProfileCard";

export default function Home({ isLoggedIn, userInformation }) {
    const router = useRouter()

    useEffect(() => {
        if (!isLoggedIn) router.push('/login')
    }, [isLoggedIn])

    return (
        <div style={{ padding: '40px' }}>
            <UserProfileCard userInformation={userInformation} />
        </div>
    )
}
