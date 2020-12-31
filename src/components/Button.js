import React from 'react'
import {Link} from 'react-router-dom';

export default function Button() {
    return (
        <div className="Button">
            <Link to="/Signin" className="btn">INSTRUCTOR</Link>
            <Link to="/" className="btn">STUDENTS</Link>
        </div>
    )
}
