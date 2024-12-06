const LoginForm = ({ loginUserFunction }) => {
    return (
        <div>
            <form
                onSubmit={(e) => loginUserFunction(e)}
                style={{ display: 'flex', flexDirection: 'column', gap: '20px', }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required></input>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required></input>
                </div>

                <button type="submit" style={{ width: '100px', padding: '4px' }}>Login</button>
            </form>
        </div>
    );
}
 
export default LoginForm