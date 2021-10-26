import React, { Component } from "react";
 import {User} from "../services/apiService"
import item1 from "../item1.png"
 import "./Components/shop_style.css";
class Shop extends Component {
	
	state = {
    name: this.props.user.name,
    score: this.props.user.score,
    
   
  };
	
	
	 buy = () => {
		 const { name, score } = this.state;
		 if (score > 5){
			   alert("Thank's");
			 const newScore = score - 5
			 this.setState({
             score: newScore,
      })
	   User.update(this.props.user._id, {score: newScore})
	  
	  
		 }
	else{
		alert("You don't have enough coins");
		
	}
		 
		 
		 
	 };
	
  render() {
	  
	   const { name, score } = this.state;
    return (
   <div className="row mt-5">
  <h1> The shop</h1>
  <h> your score is: {score}</h>
    <p className="item">
   5 points
  <img src={item1} style={{ display: 'block', marginRight: 'auto'}} alt= "item1"/>
    <button class="buy"  onClick={this.buy}>buy</button>
  </p>
  </div>
  
  
  
  
    );
  }
}
 
export default Shop;