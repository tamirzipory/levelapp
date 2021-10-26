import React, { Component } from "react";
import "./Components/style_login.css";
import {
  NavLink, Link
} from "react-router-dom";


//יבוא האלמנטים של העיצוב
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';



import login_button from "../login_button.png"
import login_image from "../login_image.png"
import register_img from "../register_img.png"

class LoginPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        form: {}
      }
    }

	
	
	//שליחת בקשת ההתחברות לשרת
	
    login() {
      fetch('/api/users/login', {     //לך למופע איפיאיי לתכנית משתמשים לפונקציה התחברות
        method: 'POST',   //עשה זאת באמצעות פעולה פוסט
        headers: {
          'Content-Type': 'application/json'  //הודעה לשרת שהמידע עובר בתבנית של גייסון
        },
      body: JSON.stringify(this.state.form)})
      .then(res => res.json())
      .then(data => {
        if (data.user) {
          window.location.href = '/'
        }
      });
    }

	
	
    handleValueChange(evt, fieldName) {  //הפעולה מקבלת אירוע ואת השדה שבו השתנה האירוע ומשתנה אותו בהתאם
      this.state.form[fieldName] = evt.target.value
    }

    render() {
		
	const mystyle = {
      color: "white",
	  textAlign: 'center', 
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
	
    };
	
	
	const mystyle2 = {
      color: "yellow",
	  textAlign: 'center', 
      backgroundColor: "black",
      padding: "10px",
      fontFamily: "Arial",
	  
	
    };
	
	
	const mystyle3 = {
      color: "blue",
	  textAlign: 'center', 
      backgroundColor: "danger",
      padding: "10px",
      fontFamily: "Arial",
	  border:0,

	
    };

		
      return (
	  
	  
	  
	
	  
        <div className="row mt-5">
		<img src={login_image }style={{ display: 'block', marginLeft: 'auto', marginRight: "auto"}} alt = "login" /> 
                <div className="col-md-6 m-auto">
                  <div className="card card-body">
	              
                    <form>
                      <div style={mystyle3} className="form-group">
                        <label for="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter Email"
                          value={this.state.email} 
                          onChange={(evt) => this.handleValueChange(evt, 'email')}
                        />
                      </div>
                      <div style={mystyle2} className="form-group">
                        <label for="password">Password</label>
                        <input
                          type="password"
                          id="password"
                          name="password"
						  color = "danger"
                          className="form-control"
                          placeholder="Enter Password"
                          value={this.state.password} 
                          onChange={(evt) => this.handleValueChange(evt, 'password')} //עבור כל שינוי בתיבת הסיסמא תעדכן את השינוי בתוך הסטייט
                        />
                      </div>
					  
					 
                    </form>
					
                   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
				   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
				   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
				   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
				    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
				   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				   
		
				 
				   
				   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
				  
				   &nbsp; &nbsp; &nbsp;
				   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				   &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
				   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
				   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  
				   <button className="btn" variant="primary" activeClassName="main-nav-active" onClick={() => this.login()}><img src={login_button}  style={{ display: 'block', marginRight: 'auto', marginLeft: 'auto'}} alt="login"/></button>
		
                    <p className="lead mt-4">
                     <NavLink to="/register" className="main-nav" activeClassName="main-nav-active"><img src={register_img} style={{ display: 'block', marginRight: 'auto', marginLeft: 'auto'}} alt= "register"/></NavLink>
                    </p>
                    <p>
                      <Link to="/">home</Link>
                    </p>
					
                  </div>
                </div>
              </div>
      );
    }
  }
   
  export default LoginPage;