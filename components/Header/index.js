import Link from "next/link"

const Header = ({ isLoggedIn, logoutUserFunction }) => {
    return (
        <div>
            <nav>
                <ul style={{ "list-style-type": "none", display: 'flex', gap: '20px', fontWeight: 'bold', fontSize: '20px' }}>
                    {isLoggedIn && (
                        <>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <a onClick={logoutUserFunction}>Log Out</a>
                            </li>
                        </>
                    )}
                    {!isLoggedIn && (
                        <>
                            <li>
                                <Link href="/login">Login</Link>
                            </li>
                            <li>
                                <Link href="/create">Create User</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default Header

// const Header = ({ isLoggedIn, logoutUser }) => {
//     return (
//       <header>
//         <nav>
//           {isLoggedIn && (
//             <>
//               <Link href="/">User Profile</Link>
//               <a onClick={logoutUser}>Log Out</a>
//             </>
//           )}
//           {!isLoggedIn && (
//             <>
//               <Link href="/login">Login</Link>
//               <Link href="/create">Create User</Link>
//             </>
//           )}
//         </nav>
//       </header>
//     );
//   };