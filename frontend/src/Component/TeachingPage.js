import './Componentcss/Teachingpage.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Container from 'react-bootstrap/Container';
import { NavLink } from "react-router-dom";

const Teachingpage =() => {





    return ( <div>

<h1 className='Headertext'>Relax, it’s only ONES and ZEROS!</h1>
<br/>
<br/>
<div className='lineardivider'>
</div>

<h2 className='Subsectiontext'>Basic understanding of Ipv4 addressing</h2>
<p className='paragraphtext'>At its most basic level, an IP address is just a series of 1s and 0s, or bits, that computers understand. 
    These 1s and 0s represent electrical signals where a "1" is a higher voltage, and a "0" is a lower voltage. However, dealing with long strings of 1s and 0s isn't practical for humans, 
    so we represent IP addresses in a more readable form known as <b>dotted decimal notation.</b>
    <br/>
    An IP address consists of 32 bits (1s and 0s), which we break down into four groups of 8 bits, known as octets. Each octet is converted into a decimal value ranging from 0 to 255. These four decimal values are then separated by dots, giving us a more readable IP address.  
    
    <br/> 
    To illustrate: 
    <h1 style={{textAlign:"center"}}>Binary</h1>
    <div style={{textAlign:"center"}}>11000000.10101000.00000001.00000001</div>
    
    <div style={{textAlign:"center"}}>
    <span style={{fontSize:'250%' }}> &#8595;</span>
    </div> 
    <h1 style={{textAlign:"center"}}>Dotted Decimal</h1>
    <div style={{textAlign:"center"}}>192.168.1.1</div>
      </p>

<div className='lineardivider'>
</div>
<h2 className='Subsectiontext'>Basic understanding of Subnet mask and Their Purpose</h2>
<p className='paragraphtext'>
    sd
    </p>









    </div>);
}
export default Teachingpage