import React from "react";
import '../App.css';
import Button from "react-bootstrap/Button";

const Student = () => (
    <>
    <div className="student" style={{"backgroundImage":"../img/wave.png"}}>
       <div class="container">
		<div class="img">
			<img src="../img/bg.svg" alt='' />
		</div>
		<div class="login-content">
			<form method="POST">
				<img src="../img/avatar.svg" alt='' />
				<h2 class="title">Welcome</h2>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5>Username</h5>
           		   		<input type="text" class="input" name="user" />
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>Password</h5>
           		    	<input type="password" class="input" name="password" />
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
  
export default Student;