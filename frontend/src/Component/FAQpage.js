import './Componentcss/FAQpage.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Container from 'react-bootstrap/Container';
import { NavLink } from "react-router-dom";
import { useState,useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Showmore from '../images/logos/Showmore.png'
import FAQandAnwser from './FAQandAnwser';
const FAQpage = () => {
    const [Answerlist,setAnwserlist] = useState([0,0,0,0,0,0,0,0])


    const OnchangeShowanwser = (id) => {
        let count=0;
        let copyarray=[0,0,0,0,0,0,0,0]    

                copyarray[id]=1;
                setAnwserlist(copyarray)
           
        
  
    }
return(
<div>

<h1 className='Headertext'>Learn key subnetting tips in our Glossary and FAQs.</h1>
        <div className='lineardivider'></div>

    
    { FAQandAnwser.map(questions=>{
       return (

       <div className='ContainerforFAQ'>
       
  Q: {questions.faq}
    
        <Button  className='Submitbutton1' variant="primary" onClick={() =>OnchangeShowanwser(questions.id)}  >
            <b className='bold'> +</b>
           </Button>

           {Answerlist[questions.id]==1 ? (<div className='Anwsertext'>{questions.answer}</div>) : (<div></div>)}
           
       </div>
        
    )
    })}







</div>

)

}

export default FAQpage

