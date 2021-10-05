import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="wrapper">
            <h1>404 - Not Found!</h1>
            <Link to="/">
                Go Register
            </Link>
        </div>
    )
}

export default NotFound;