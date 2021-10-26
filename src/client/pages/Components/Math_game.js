import React from "react";
import mongoose from "mongoose";
import { quizDataMath } from "./Components/quizDataMath";
let User = require("../../server/models/User.js");
import { idud } from "./Components/idud";
import "./Components/style_quiz_math.css";


class Math_game extends React.Component {
 
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: User.score ,
    disabled: true,
    right_before:'',
	idud_sen: '',
	idud_num:0,
   
  };
  
  





  loadQuizData = () => {
    // console.log(quizDataMath[0].question)
    this.setState(() => {
      return {
        questions: quizDataMath[this.state.currentQuestion].question,
        answer: quizDataMath[this.state.currentQuestion].answer,
        options: quizDataMath[this.state.currentQuestion].options,
		idud_sen: idud[this.state.idud_num].sentence
      };
    });
  };

  componentDidMount() {
    this.loadQuizData();
  }
  nextQuestionHandler = () => {
    // console.log('test')
	this.setState({disabled:false});
    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1,
		right_before: idud_sen
      }
	  )
	  
	  ;
	
	  
    }
else{
	
	this.setState({
		right_before:'no, the answer is: '+ answer
	}
	)
	;
		
	}
	

    this.setState({
      currentQuestion: Math.floor(Math.random() * 4) + 1,
	  idud_num: Math.floor(Math.random() * 4) + 1
	  
    });
    console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: quizDataMath[this.state.currentQuestion].question,
          options: quizDataMath[this.state.currentQuestion].options,
          answer: quizDataMath[this.state.currentQuestion].answer,
		  idud_sen: idud[this.state.idud_num].sentence
        };
      });
    }
  }
  //check answer
  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false });
  };

  render() {
    const { options, myAnswer , score , right_before, idud_sen} = this.state;
	

   
      return (
        <div className="Api">
          <h1>{this.state.questions} </h1>
			  {right_before}<br/>
			  your score is: {score}<br/>
  
		  
          <span>{}</span>
          {options.map(option => (
            <p
              key={option.id}
              className={`ui floating message options
         ${myAnswer === option ? "selected" : null}
         `}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </p>
          ))}
          { (
            <button className="ui inverted button"  disabled={this.state.disabled} onClick={this.nextQuestionHandler}>Next</button>
          )}
      
       
            
          
        </div>
      );
    }
  }


export default Math_game;