import "./Signup.css";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { auth } from "../firebase";

export default function Register({ Education, Section, instructor, student }) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [section, setSection] = useState("");
  const signUpI = (e) => {
    e.preventDefault()

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/Instructor")
        }
      })
      .catch(error => alert(error.message))
  };
  const signUpS = (e) => {
    e.preventDefault()

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/Student")
        }
      })
      .catch(error => alert(error.message))
  };

  return (
    <div className="register-page">
      <div className="lapiImage"></div>

      <form className="register-box" onSubmit={handleSubmit(onSubmit)}>
        <div className="register__header">
          <h2>Create Account</h2>
        </div>

        <div className="user-box">
          <label>UserName</label>
          <input
            name="username"
            placeholder="UserName"
            type="text"
            ref={register({ required: true })}
          ></input>
          {errors.username && (
            <p className="error_message">UserName is required</p>
          )}
        </div>

        <div className="user-box">
          <label>Gender</label>
          <input
            name="gender"
            placeholder="Gender"
            type="text"
            ref={register({ required: false })}
          ></input>
        </div>

        <div className="user-box">
          {Education && <label>Education</label>}
          {Education && (
            <input
              name="education"
              placeholder="Education"
              type="text"
              ref={register({ required: true })}
            />
          )}{" "}
          {errors.education && (
            <p className="error_message">Your education is required</p>
          )}
          {Section && <label>Section</label>}
          {Section && (
            <input
              name="section"
              placeholder="Section"
              type="text"
              ref={register({ required: true })}
              // value={section}
              // onChange={(e) => setSection(e.target.value)}
            />
          )}{" "}
          {errors.section && (
            <p className="error_message">section is required</p>
          )}
        </div>

        <div className="user-box">
          <label>Email</label>
          <input
            name="email"
            placeholder="Email"
            type="email"
            ref={register({ required: true })}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          {errors.email && (
            <p className="error_message">Your email-id is required</p>
          )}
        </div>

        <div className="user-box">
          <label>Password</label>
          <input
            name="password"
            placeholder="Password"
            type="password"
            ref={register({ required: true })}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          {errors.password && (
            <p className="error_message">password is required</p>
          )}
        </div>

        {instructor && <div className="userSubmit" onClick={signUpI}>
          <Button buttonName="submit" label="Sign up" />
        </div>}
        {student && <div className="userSubmit" onClick={signUpS}>
          <Button buttonName="submit" label="Sign up" />
        </div>}

        <div className="register__footer">
          <p className="already">
            Already registered
            {instructor && (
              <Link to="/Instructor" className="link-item">
                Sign in
              </Link>
            )}
            {student && (
              <Link to="/Student" className="link-item">
                Sign in
              </Link>
            )}
          </p>
        </div>
      </form>
    </div>
  );
}