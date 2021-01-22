import Button from "./Button";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import { auth } from "../firebase";
import { useForm } from "react-hook-form";
import "./Signin.css";
export default function Signin({ Instructor, Student }) {
  const { register, errors } = useForm();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/Classroom");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login-page">
      <div class="login-box">
        <div className="login__header">
          <h2>Sign In</h2>
        </div>

        <form>
          <div className="client-box">
          <label>Email</label>
          <input
            name="email"
            placeholder="Email"
            type="email"
            ref={register({ required: true })}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          {errors.email && (
            <p className="error_message">Your email-id is required</p>
          )}
          </div>
          <div className="client-box">
          <label>Password</label>
          <input
            name="password"
            placeholder="Password"
            type="password"
            ref={register({ required: true })}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          {errors.password && (
            <p className="error_message">password is required</p>
          )}
          </div>
          <div className="client__submit" onClick={signIn}>
            <Button buttonName="submit" label="Sign in" />
          </div>
          <div className="login__footer">
            <p className="create">
              Create your Account
              {Instructor && (
                <Link to="/RegisterInstructor" className="linked-item">
                  Sign up
                </Link>
              )}
              {Student && (
                <Link to="/RegisterStudent" className="linked-item">
                  Sign up
                </Link>
              )}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
