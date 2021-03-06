import React, { Component } from "react";
import '../App.css';

export default class SignUp extends Component {
    render() {
        return (
            <>
            <form>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter your full name" />
                </div>
                <div className="form-group">
                    <label>USN</label>
                    <input type="text" className="form-control" placeholder="USN" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="./login.components.js">sign in?</a>
                </p>
            </form>
            </>
        );
    }
}