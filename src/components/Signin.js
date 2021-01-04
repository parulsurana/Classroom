import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import "./Signin.css";

export default function Signin() {
  return (
    <div className="Signin">
      <div class="signin-box">
        <h1>Sign in</h1>

        <form>
          <div class="user-box">
            <input type="text" name="" required="" />
            <label>Email Address</label>
          </div>

          <div class="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>

          {/* <button class="signin_btn">
          <Link to="/Toolbar" className="signin_submit">Sign in</Link>
          </button> */}
          <Link to="/Toolbar">
            <Button buttonName="signin_submit" label="Sign in" />
          </Link>

          <p class="signin_comment">
            Not registered yet ?
            <Link to="/Signup" className="signin_link">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
