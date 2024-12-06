import LoginForm from "@/components/LoginForm"
import { useRouter } from "next/router"
import { useEffect } from "react"

const Login = ({ isLoggedIn, loginUserFunction }) => {
    const router = useRouter()
    useEffect(() => {
        if (isLoggedIn) router.push('/')
    }, [isLoggedIn])

    return (
        <div style={{ padding: '40px' }}>
            <h2>Login</h2>
            <LoginForm loginUserFunction={loginUserFunction} />
        </div>
    )
}
 
export default Login