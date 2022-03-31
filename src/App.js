import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import SchoolImage from './school.png';
import Login from "./components/login.components";
import SignUp from "./components/signup.components";
function App() {
  return (<Router>
    <>
    <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="/">HKBK College</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        
                    <Link className="nav-link active text-white" to={"/sign-in"}>Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active text-white" to={"/sign-up"}>About Us</Link>                        
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active text-white" to={"/sign-up"}>Sign Up</Link>
                    </li>
                </ul>
                </div>
            </div>
    </nav>
      <div className='row'>
      <div className='col-md-6 justify-content-center;'>
      <p className='para'>For an improved learning and
            teaching experience!</p>
            <img className="image" src={SchoolImage} alt="Logo" />;
      </div>
      <div className='col-md-6 imag'>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route exact path='/' element={<Login/>} />
            <Route path="/sign-in" element={<Login/>} />
            <Route path="/sign-up" element={<SignUp/>} />
          </Routes>
        </div>
      </div>
      </div>
      </div>
    </>
    </Router>
  );
}

    
export default App;