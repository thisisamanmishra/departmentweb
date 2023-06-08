import React from 'react';
import './home.css';
import background from '../img/hit.jpg'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const Home = () => (
  <div className="home">
     <div className="button">
      <Link to="/"><Button className="glow-on-hover">Admin Login</Button></Link>
      <Link to="/studentlogin"><Button className="glow-on-hover">Student Login</Button></Link>
    </div>
  </div>
);

export default Home;