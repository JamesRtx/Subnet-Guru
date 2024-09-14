import './Componentcss/Teachingpage.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Container from 'react-bootstrap/Container';
import { NavLink } from "react-router-dom";

import Subnettingexample1 from  "../images/Subnetingexample1.png"
import Subnettingexample2 from  "../images/Subnetingexample2.png"
import Subnettingexample3 from  "../images/Subnettingexample3.png"
import Subnettingexample4 from  "../images/Subnettingexample4.png"

const Teachingpage =() => {





    return ( <div>

<h1 className='Headertext'>Relax, it’s only ONES and ZEROS!</h1>
<br/>
<br/>
<div className='lineardividerteaching'>
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

<div className='lineardividerteaching'>
</div>
<h2 className='Subsectiontext'>Basic understanding of Subnet mask and Their Purpose</h2>
<p className='paragraphtext'>
A subnet mask is a crucial component in networking that helps define which part of an IP address is used to identify the network and which part is used for individual devices (hosts) within that network.
<br/>
<br/>
A subnet mask is a 32-bit number, similar to an IP address, written in dotted decimal notation. The subnet mask is composed of a sequence of 1s and 0s, with values of 1s representing the network component of the IP address. "0s" denote the host component of the IP address.
<br/>
To illustrate: 
    <div className='container'>
    <img src={Subnettingexample1} alt="Nature" className="responsive" />
    <br/>
    <br/>
    <h1 style={{textAlign:"center"}}> Binary representation</h1>
    <img src={Subnettingexample2} alt="Nature" className="responsive" />

    </div>
    <br/>
    Note: A single octet value of a subnet mask is typically either 255 or 0. However, with the use of CIDR (Classless Inter-Domain Routing), more flexible values, like 192 or 128, can also be used.
    
    </p>


    <div className='lineardividerteaching'>
    </div>
    <h2 className='Subsectiontext'>Classful IP Addressing</h2>
        <p className='paragraphtext'>
        Classful addressing was the original method used to allocate IP addresses and organize networks. This system divided the IP address space into predefined classes with fixed boundaries. While these classes simplified network management, they had significant limitations, especially as the internet expanded and the demand for IP addresses increased. Classful addressing classified IP addresses into five classes (A, B, C, D, and E), each designed to serve different types of networks, from large global enterprises to small local networks.
<br/>
    <h3>Class A :</h3>
            <ul style={{margin:"10px" ,fontSize:'1.6vw'}}>
                <li>Range of the First Octet: From 1 to 127</li>
                <li>Address Range: 1.0.0.0 to 126.0.0.0</li>
                <li>Purpose: Designed for very large networks, such as major organizations, large corporations, or even entire countries. Class A networks can accommodate a vast number of devices.</li>
                <li>Subnet Mask: 255.0.0.0</li>
            </ul> 
        
    <h3>Class B :</h3>
    <ul style={{margin:"10px" ,fontSize:'1.6vw'}}>
        <li>Range of the First Octet: From 128 to 191</li>
        <li>Address Range: 128.0.0.0 to 191.255.0.0</li>
        <li>Purpose: Suitable for medium-sized networks, such as universities, large businesses, or regional networks. Class B networks offer a balance between the number of available networks and the number of hosts per network.        </li>
        <li>Subnet Mask: 255.255.0.0</li>
    </ul> 
    <h3>Class C :</h3>
    <ul style={{margin:"10px" ,fontSize:'1.6vw'}}>
        <li>Range of the First Octet: From 192 to 223</li>
        <li>Address Range: 192.0.0.0 to 223.255.255.0</li>
        <li>Purpose: Intended for smaller networks, such as small businesses, local area networks (LANs), or home networks. Class C networks provide a sufficient number of IP addresses for smaller organizations.        </li>
        <li>Subnet Mask: 255.255.255.0</li>
    </ul> 

    <h3>Class D :</h3>
    <ul style={{margin:"10px" ,fontSize:'1.6vw'}}>
        <li>Range of the First Octet: From 224 to 239</li>
        <li>Address Range: 224.0.0.0 to 239.255.255.255</li>
        <li>Purpose: Reserved for multicasting. Class D addresses are used to send data to multiple devices simultaneously rather than to individual hosts. This class is not used for regular network communication.        </li>
    </ul> 
    
    <h3>Class E :</h3>
    <ul style={{margin:"10px" ,fontSize:'1.6vw'}}>
        <li>Range of the First Octet: From 240 to 255</li>
        <li>Address Range: 240.0.0.0 to 255.255.255.255</li>
        <li>Purpose: Reserved for experimental purposes and future use. Class E addresses are not used in standard network communication and are reserved for research and experimental applications.
        </li>
    </ul> 

        </p>
<div className='lineardividerteaching'>
    </div>
    <h2 className='Subsectiontext'>Subnetting with Classless Inter-Domain Routing (CIDR)</h2>
    <p className='paragraphtext'>



    In the early days of the internet, a system called "classful ip addressing" was used to manage IP addresses. It aimed to simplify network administration by assigning blocks of addresses based on network size. While initially helpful, classful addressing struggled to keep pace with the internet's explosive growth. The limitations became clear - the system couldn't efficiently allocate addresses for both very large and very small networks. This mismatch between address needs and available blocks led to the development of a more flexible system – Classless Inter-Domain Routing (CIDR).
    <br/> <br/>
    CIDR was introduced to address the inefficiencies of classful addressing by providing a more granular and flexible method for IP address allocation. Unlike classful addressing, CIDR does not rely on fixed address classes. Instead, it allows network administrators to allocate IP addresses based on the specific needs of their networks, resulting in more efficient use of the available IP address space.
    <br/>
    In traditional subnetting, subnet masks are expressed as sequences of 255s and 0s, such as 255.255.255.0 or 255.255.0.0. However, with CIDR , subnet masks can include values other than just 255 or 0, such as 192, allowing for more flexible and efficient subnetting.
    <br/>
    To illustrate:
    <br/>
     Traditional Subnet Masks :         
    <br/>                                     
                                     <p style={{textAlign:'center'}}>    255. 255 .255 .0 or /24 (wack 24)</p>
                                     Subnet Masks Using CIDR :            
    <br/>                                     
                                     <p style={{textAlign:'center'}}>   255. 255 .192 .0    or /25 (wack 25)</p>
                                     <br/>   
                                     When subnetting with CIDR, we use CIDR notation (e.g., /24) to simplify and understand subnetting. This notation replaces the need to convert binary subnet masks to determine the network and host portions of an IP address. By using CIDR notation, you can quickly identify how many bits are allocated for the network portion and how many are available for host addresses, streamlining the subnetting process.
<br/>
To illustrate :

<div className='container'>
    <img src={Subnettingexample3} alt="Nature" className="responsive" />
    <br/>
    <br/>
    <img src={Subnettingexample4} alt="Nature" className="responsive" />

    </div>

                                          
    </p>





<br/>

    </div>);
}
export default Teachingpage