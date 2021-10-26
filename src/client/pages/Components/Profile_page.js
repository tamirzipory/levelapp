import React, { Component } from "react";
import {User} from "../services/apiService"

class Profile_page extends React.Component {
 state = {
   
    name: this.props.user.name,
	email: this.props.user.email,
    score: this.props.user.score,

 
   
  };

  

  render() {
    console.log('props', this.props)
    const { score , name, email} = this.state;

      return (

     
			
					<div className="Api">
       <h1>  The profile page<br/> </h1>
			  name: {name}<br/>
			  email: {email}<br/>
			  score: {score}<br/>
			  </div>
		  
			
			
			
  
		  
      
          
          
  
  
        

  
      );
    }
}
 
export default Profile_page;