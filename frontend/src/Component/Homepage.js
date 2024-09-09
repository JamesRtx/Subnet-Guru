import './Componentcss/Homepage.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Container from 'react-bootstrap/Container';
import { NavLink } from "react-router-dom";


import Homepageimage from '../images/Homepageimage.png';
import Getstartedbutton from '../images/logos/GetStarted.png'
const Homepage = () => {




return (
<div>




<div className='container'>

<img src={Homepageimage} alt="Nature" className="responsive" />

  <div class="top-lefttext">   <h1 className="Sectiontext">Understanding Subnetting in Minutes<br/>
  Learn & Calculate Instantly: Your One-Stop Guide to Subnet Masks</h1></div>
  
  <Nav.Link as={NavLink} to={"/Teaching-Page"}  className="top-leftbutton"> <img src={Getstartedbutton} alt="Nature" className="responsivebutton" /> </Nav.Link>  

</div>

</div>
);


}

export default Homepage

