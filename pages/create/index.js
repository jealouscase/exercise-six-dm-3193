
import { useEffect } from "react";
import { useRouter } from "next/router";
import CreateUserForm from "@/components/CreateUserForm";

const CreateUser = ({ createUserFunction, isLoggedIn }) => {
    const router = useRouter()
    useEffect(() => {
        if (isLoggedIn) router.push("/")
    }, [isLoggedIn])

    return (
        <div style={{ padding: '40px' }}>
            <CreateUserForm createUserFunction={createUserFunction} />
        </div>
    );
}
 
export default CreateUser;