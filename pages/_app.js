import Header from "@/components/Header"
import { useCallback, useEffect, useState } from "react"
import { initializeApp } from 'firebase/app'
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth'

export default function App({ Component, pageProps }) {
    const [appInitialized, setAppInitialized] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [userInformation, setUserInformation] = useState(null)

    const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: "exercise-six-792f8.firebaseapp.com",
        projectId: "exercise-six-792f8",
        storageBucket: "exercise-six-792f8.firebasestorage.app",
        messagingSenderId: "551156468890",
        appId: "1:551156468890:web:0b46880e487ef59f0fe323"
    }

    const createUserFunction = useCallback(
        (e) => {
            e.preventDefault()

            const email = e.currentTarget.email.value
            const password = e.currentTarget.password.value
            const auth = getAuth()

            createUserWithEmailAndPassword(auth, email,
                password)
                .then((userCredential) => {
                    const user = userCredential.user
                    setIsLoggedIn(true)
                    setUserInformation(user)
                    setError(null)
                })
                .catch((error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    console.warn({ error, errorCode, errorMessage })
                    setError(errorMessage)
                })
        },
        [setError, setIsLoggedIn, setUserInformation]
    )

    const loginUserFunction = useCallback(
        (e) => {
            e.preventDefault()
            const email = e.currentTarget.email.value
            const password = e.currentTarget.password.value

            const auth = getAuth()
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user
                    setIsLoggedIn(true)
                    setUserInformation(user)
                    setError(null)
                })
                .catch((error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    console.warn({ error, errorCode, errorMessage })
                    setError(errorMessage)
                })
        },
        [setError, setIsLoggedIn, setUserInformation]
    )

    const logoutUserFunction = useCallback(() => {
        const auth = getAuth()

        signOut(auth)
            .then(() => {
                setUserInformation(null)
                setIsLoggedIn(false)
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.warn({ error, errorCode, errorMessage })
                setError(errorMessage)
            })
    }, [setError, setIsLoggedIn, setUserInformation, signOut])

    useEffect(() => {
        const app = initializeApp(firebaseConfig)
        setAppInitialized(app)
    }, [])

    useEffect(() => {
        if (appInitialized) {
            const auth = getAuth()
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUserInformation(user)
                    setIsLoggedIn(false)
                } else {
                    setUserInformation(null)
                    setIsLoggedIn(false)
                }
                setIsLoading(false)
            })
        }
    }, [appInitialized])

    if (isLoading) return null
    console.log(isLoggedIn)
    return (
        <div>
            <Header
                isLoggedIn={isLoggedIn}
                logoutUserFunction={logoutUserFunction}
            />
            <Component
                {...pageProps}
                createUserFunction={createUserFunction}
                isLoggedIn={isLoggedIn}
                loginUserFunction={loginUserFunction}
                userInformation={userInformation}
            />
            <p>{error}</p>
        </div>
    )
}