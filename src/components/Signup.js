import "./Signup.css";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "./Button";


export default function Register({ Education, Section, instructor, student}) {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [education, setEducation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [section, setSection] = useState("");

  const signUp = e => {
    e.preventDefault()
    history.push('/')
  }

  return (
    <div className="register-page">
      <form className="register-box">
        <h2>Create Account</h2>
        <div className="user-box">
           <label>UserName</label>
           <input
            placeholder="UserName"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>

        <div className="user-box">
          <label>Gender</label>
          <input
            placeholder="Gender"
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          ></input>
        </div>

        <div className="user-box">
          {Education && <label>Education</label>}
          {Education && <input
            placeholder="Education"
            type="text"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          ></input>}
        </div>

        <div className="user-box">
          {Section && <label>Section</label>}
          {Section && <input
            placeholder="Section"
            type="text"
            value={section}
            onChange={(e) => setSection(e.target.value)}
          ></input>}
        </div>

        <div className="user-box">
          <label>Email</label>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div className="user-box">
          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <div className="user-box">
          <Button buttonName="submit" label="Sign up" onClick={signUp} />
        </div>

        <div className="user-box">
          <p>
            Already registered
            {instructor && <Link to="/loginasInstructor" className="link-item">
              Sign in
            </Link>}
            {student && <Link to="/loginasStudent" className="link-item">
              Sign in
            </Link>}
          </p>
        </div>
      </form>
    </div>
  );
}
