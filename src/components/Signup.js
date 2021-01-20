import "./Signup.css";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "./Button";
import { useForm } from "react-hook-form";


export default function Register({ Education, Section, instructor, student}) {

  const {register, handleSubmit, watch, error} = useForm();
  // const history = useHistory();
  // const [userName, setUserName] = useState("");
  // const [education, setEducation] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [gender, setGender] = useState("");
  // const [section, setSection] = useState("");

  // const signUp = e => {
  //   e.preventDefault()
  //   history.push('/home');
  // }

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="register-page">
      <form className="register-box" onSubmit={handleSubmit(onSubmit)}>
        <h2>Create Account</h2>
        <div className="user-box">
           <label>UserName</label>
           <input
           name="username"
            placeholder="UserName"
            type="text"
            ref={register({required: true})}
            // value={userName}
            // onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>

        <div className="user-box">
          <label>Gender</label>
          <input
            name="gender"
            placeholder="Gender"
            type="text"
            ref={register({required: true})}

            // value={gender}
            // onChange={(e) => setGender(e.target.value)}
          ></input>
        </div>

        <div className="user-box">
          {Education && <label>Education</label>}
          {Education && <input
            name="education"
            placeholder="Education"
            type="text"
            ref={register({required: true})}

            // value={education}
            // onChange={(e) => setEducation(e.target.value)}
          ></input>}
        </div>

        <div className="user-box">
          {Section && <label>Section</label>}
          {Section && <input
            name="section"
            placeholder="Section"
            type="text"
            ref={register({required: true})}

            // value={section}
            // onChange={(e) => setSection(e.target.value)}
          ></input>}
        </div>

        <div className="user-box">
          <label>Email</label>
          <input
            name="email"
            placeholder="Email"
            type="email"
            ref={register({required: true})}

            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div className="user-box">
          <label>Password</label>
          <input
            name="password"
            placeholder="Password"
            type="password"
            ref={register({required: true})}

            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>


        {/* onClick={signUp} */}
        <div className="user-box" >                         
          <Button buttonName="submit" label="Sign up"/>
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
