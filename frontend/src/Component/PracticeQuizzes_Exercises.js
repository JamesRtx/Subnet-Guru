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

const [ShowAnwser,setShowAnwser] =  useState(false)

const OnchangeShowAnwser = () => {   
    setShowAnwser(true)
}

    return(<div>
        <h1 className='Headertext'>Take a Quick Quiz to Test Your Subnetting Skills!</h1>
        
        <br/>
        <br/>
        <div className='lineardivider'></div>
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
    

    <br/>


           {ShowAnwser ? (<div>{Quizz.answer}</div>):(<div></div>)}  

            </div>     

            )
        })}
        

        <Button  className='Submitbutton' variant="primary"  onClick={OnchangeShowAnwser} >
             Answer?
           </Button>
        
        </div>)
}
export default PracticeQuizzes_Exercises