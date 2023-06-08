import React from 'react';
import './home.css';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const Home = () => (
  <div className="app" style={{"backgroundImage":{}}}>
     <div class="button">
      <Link to="/"><Button className="glow-on-hover" type="button">Admin Login</Button></Link>
      <Link to="/studentlogin"><Button className="glow-on-hover" type="button">Student Login</Button></Link>
    </div>
  </div>
);

export default Home;