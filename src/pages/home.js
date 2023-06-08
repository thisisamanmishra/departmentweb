import React from 'react';
import './home.css';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const Home = () => (
  <div className="home">
     <div className="button">
      <Link to="/adminlogin"><Button className="glow-on-hover">Admin Login</Button></Link>
      <Link to="/studentlogin"><Button className="glow-on-hover px-2">Student Login</Button></Link>
    </div>
  </div>
);

export default Home;