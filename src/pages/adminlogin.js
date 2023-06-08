import React from "react";
import './student.css';
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bg from '../img/bg.svg';
import wave from '../img/wave.png';
import avatar from '../img/avatar.svg';

const Admin = () => (
    <>
    
    <div className="student">
    
       <img src={wave} className="wave" alt='' />
       <div class="container">
		<div class="img">
			<img src={bg} alt='' />
		</div>
		<div class="login-content">
			<form method="POST">
				<img src={avatar} alt='' />
				<h2 class="title">Welcome, Admin</h2>
           		<div class="input-div one">
           		   <div class="i">
           		   		<FontAwesomeIcon icon="fas fa-user" />
           		   </div>
           		   <div class="div">
           		   		<input type="text" class="input" name="user" placeholder="Username" />
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<FontAwesomeIcon icon="fas fa-lock" />
           		   </div>
           		   <div class="div">
           		    	<input type="password" className="input" name="password" placeholder="Password" />
            	   </div>
            	</div>
                   <h3>Forgot Password</h3>
            	<Button className="btn">Login</Button>
            </form>
        </div>
    </div>
    </div>
    </>
  );
  
export default Admin;