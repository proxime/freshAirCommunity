import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <h1>Logowanie</h1>
            <h2>Nie masz konta? <Link to="/auth/register">Zarejestruj się</Link></h2>
            <form>
                <label>
                    <p>Login</p>
                    <input type="text" name="login" />
                </label>
                <label>
                    <p>Hasło</p>
                    <input type="password" name="password" />
                </label>
                <button>Zaloguj się</button>
            </form>
        </>
    );
}

export default Login;