import './Componentcss/PracticeQuizzes_Exercises.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Container from 'react-bootstrap/Container';
import { NavLink } from "react-router-dom";
import { useState,useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import QuestionsAndAnswer from './Questionandanswer';
const PracticeQuizzes_Exercises = () => {

const [Answerlist,setAnwserlist] = useState([0,0,0,0,0,0,0,0])

const OnchangeShowAnwser = (id) => {   
    let count=0;
    let copyarray=[0,0,0,0,0,0,0,0]    

            copyarray[id]=1;
            setAnwserlist(copyarray)

}

    return(<div>
        <h1 className='HeadertextPractice'>Take a Quick Quiz to Test Your Subnetting Skills!</h1>
        
   
        <div className='lineardividerQuiz'></div>
        {QuestionsAndAnswer.map(Quizz => {
            return (
            




<div className='ContainerforQuestion'> 
    {Quizz.question}
    {Quizz.option.map(options =>{       
        return (
        <div>
                    <input
                            type="radio"
                            name="option"
                           
                            className="form-check-input"
                        />
                        <label> {options}</label>
        </div>
    )      })}
    
    {Answerlist[Quizz.id] ? (<div style={{color:"white" , whiteSpace:"pre-line"}}>{Quizz.answer}</div>):(<div></div>)}  
    <br/>
    <Button  className='Submitbutton' variant="primary"  onClick={()=>{OnchangeShowAnwser(Quizz.id)}} >
             Answer?
           </Button>

           

            </div>     

            )
        })}
        


        
        </div>)
}
export default PracticeQuizzes_Exercises