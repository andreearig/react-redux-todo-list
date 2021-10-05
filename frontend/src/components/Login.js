
import { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import Services from "../services/Services"

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async e => {
        e.preventDefault();
        const res = await Services.loginUser({
            email,
            password
        });
        if (res.status === 200) {
            history.push("/todo");
        }
    }
    return (
        <form onSubmit={handleSubmit} className="wrapper">
            <div className="wrapper">
                <h1>Login</h1>
                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" onChange={e => setEmail(e.target.value)} required></input>
                <br />
                <label htmlFor="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" onChange={e => setPassword(e.target.value)} required></input>
                <br />
                <button type="submit" >Login</button>
                <div className="wrapper">
                    <p>Don't have an account? <Link to="/">Register</Link></p>
                    <p>Already logged in? <Link to="/todo">Go to TODO List</Link></p>
                </div>
            </div>
        </form>
    )
}

export default Login;