import './App.css';
import React, { useState,useCallback } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Brandlogo from './images/logos/Navbrand.png'

import Homepage from './Component/Homepage.js';
import Calculatorpage from './Component/Caluculatorpage.js';
import Teachingpage from './Component/TeachingPage.js';
import PracticeQuizzes_Exercises from './Component/PracticeQuizzes_Exercises.js'
import FAQ from './Component/FAQpage.js'

function App() {
  return (
    <div className="Websitebackground">


 <Navbar className="Navigationbar"expand="lg">
 <NavLink to="/Home-Page">
  <NavbarBrand ><img className="Brandlogo" src={Brandlogo} style={{margin: "20px"}}/></NavbarBrand>
</NavLink>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />

 <Navbar.Collapse id="basic-navbar-nav" >

  <Nav className="ml-auto">
  <Nav.Link as={NavLink} to={"/Calculator-Page"}  className="testingclass"> <h4 className='Navigationtext'>Calculator page</h4></Nav.Link>  
  <Nav.Link as={NavLink} to={"/Teaching-Page"}   className="testingclass">  <h4 className='Navigationtext'>Teaching Page</h4></Nav.Link> 
  <Nav.Link as={NavLink} to={"/PracticeQuizzes_Exercises"}   className="testingclass">  <h4 className='Navigationtext'>Practice Quizzes/Exercises</h4></Nav.Link> 
  <Nav.Link as={NavLink} to={"/FAQ"}   className="testingclass">  <h4 className='Navigationtext'>FAQ/Glossary</h4></Nav.Link> 

  </Nav>
  
</Navbar.Collapse> 
 </Navbar>

<div className='Containerchecker'>
    <br></br>
</div>


 <Routes>
 <Route path="/Home-Page" element={<Homepage/>}></Route>
 <Route path="/Calculator-Page" element={<Calculatorpage/>}></Route>
 <Route path="/Teaching-Page" element={<Teachingpage/>}></Route>
 <Route path="/PracticeQuizzes_Exercises" element={<PracticeQuizzes_Exercises/>}> </Route>
 <Route path="/FAQ" element={<FAQ/>}> </Route>

 </Routes>


    </div>
  );
}

export default App;
