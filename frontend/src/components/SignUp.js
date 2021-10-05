import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import Services from "../services/Services"

const SignUp = () => {
    const history = useHistory();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const res = await Services.registerUser({
            username,
            email,
            password
        });
        if (res.status === 200) { history.push("/login"); }
    }
    return (
        <form onSubmit={handleSubmit} className="wrapper">
            <div className="wrapper">
                <h1>Register</h1>
                <label htmlFor="username"><b>Username</b></label>
                <input type="text" placeholder="Username" name="username" onChange={e => setUsername(e.target.value)} required></input>
                <br />
                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" onChange={e => setEmail(e.target.value)} required></input>
                <br />
                <label htmlFor="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" onChange={e => setPassword(e.target.value)} required></input>
                <br />
                <button type="submit" >Register</button>
                <div className="wrapper">
                    <p>Already have an account? <Link to="/login">Login</Link> </p>
                </div>
            </div>
        </form>
    )
}

export default SignUp;