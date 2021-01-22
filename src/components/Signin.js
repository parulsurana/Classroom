import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import "./Signin.css";
export default function Signin({ Instructor, Student }) {
  return (
    <div className="login-page">
      <div class="login-box">
        <div className="login__header">
        <h2>Sign in</h2>
        </div>

        <form>
          <div className="client-box">
            <label>Email</label>
            <input placeholder="Email" type="email"></input>
          </div>
          <div className="client-box">
            <label>Password</label>
            <input placeholder="Password" type="password"></input>
          </div>
          <div className="client__submit">
            <Button buttonName="submit" label="Sign up" />
          </div>
          <div className="login__footer">
            <p>
              Create an Account
              {Instructor && (
                <Link to="/registerasainstructor" className="linked-item">
                  Sign up
                </Link>
              )}
              {Student && (
                <Link to="/registerasastudent" className="linked-item">
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
