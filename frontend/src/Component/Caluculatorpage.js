import './Componentcss/Calculator.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Container from 'react-bootstrap/Container';
import { NavLink } from "react-router-dom";
import { useState,useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';





const Calculatorpage = () => {

    const [Numberofhost,setNumberofrecenthost] = useState();
    const [SubnetmaskOptions,setSubnetmaskOptions] = useState([]);

const onChangeNummberofhost =e => {
    const number = e.target.value
    setNumberofrecenthost(number)
}
const handleSubmitofnumberofhost = () => {
    const Subnetmask = "0.0.0.0"
    while (1<= 255){

    }
console.log(Numberofhost)
}


return (
<div>

<h1 className='Headertext'>Scroll Down to Find Your Preferred Calculator</h1>
<br/>
<br/>
{/* Host to subnet */}
<div className='lineardivider'></div>
<h2 className='Subsectiontext'>Host-to-Subnet Calculator</h2>
<p className='paragraphtext'>
Enter the number of usable hosts you need, and the tool will display the different subnet mask options that fit your requirement, along with the most efficient one.
</p>
<div className='ContainerforForm'>
<Form>
<Form.Group>
    <Form.Label>Number Of Host</Form.Label>
    <div     style={{background:'#32B07A', padding: '10px', borderRadius:'10px'}}    >
    <Form.Control
    style={{border:'2px solid green'}}
            type="text"
            placeholder="Example: 28"
             value={Numberofhost}
             onChange={onChangeNummberofhost}
             />
             </div>
</Form.Group>
<Button variant="primary" onClick={handleSubmitofnumberofhost}>
             Submit
           </Button>
</Form>


{Numberofhost != null ? 
( 
<div style={{}}>
    <h1> For {Numberofhost}</h1>
</div> 

) :
 (
 <div>
    
    
    </div>)    
 
 }


</div>
{/* <div className='lineardivider'></div>
<h2 className='Subsectiontext'>Host Range & Usability Checker</h2>
<p className='paragraphtext'>
To determine the minimum number of hosts and the range of usable IP addresses, please click on the form and enter the IP address and subnet mask (e.g., /24). The tool will then display the minimum number of usable hosts and the range of IP addresses available within the specified subnet.</p>
 */}

{/* <div className='lineardivider'></div>
<h2 className='Subsectiontext'>Broadcast Address Calculator</h2>
<p className='paragraphtext'>
To find the broadcast address for a given subnet, click on the form and enter the IP address and subnet mask (e.g., /24). The tool will then calculate and display the broadcast address for the specified subnet.

</p> */}

{/* <div className='lineardivider'></div>
<h2 className='Subsectiontext'>CIDR Notation Finder</h2>
<p className='paragraphtext'>
To determine the subnet size in CIDR notation, click on the form and enter the IP address and subnet mask (e.g., /24 or /28). The tool will then display the subnet size in CIDR notation, helping you understand the network's capacity and range.
</p> */}

<div className='lineardivider'></div>
<h2 className='Subsectiontext'>Same Subnet Checker/Same Network Identifier</h2>
<p className='paragraphtext'>
To determine if two IP addresses are in the same subnet, click on the form and enter the IP address, subnet mask, and the second IP address. The tool will then check and display whether both IP addresses belong to the same subnet.


</p>

</div>

);


}

export default Calculatorpage