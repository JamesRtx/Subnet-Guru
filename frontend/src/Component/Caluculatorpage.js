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

import {Samesubnetidentifer,getNetworkid,Rangeusableipaddress,convertbinarytodecimal,getMinimumUsableaddressbysubntemask,convert_Cidrnotaiontosubnetmaskbinaryform,convertsubnetmaskbinaryformto_Cidrnotaion,convertsubnetmaskdecimalformto_Cidrnotaion,convertwacktoSubnetmaskbinary,findmostefficentwacknumber,convertbinarysubnetmakstodecimal,convertdecimalsubnetmakstobinary,getUsableHostnumberbysubnetmask,NumericChecker,validipaddressorsubnet} from './HelperFunction.js'


const Calculatorpage = () => {

    const [errormessage,seterrormessage] = useState("") 
    const [errormessageid,seterrormessageid] = useState("") 

    const [Numberofhost,setNumberofrecenthost] = useState();
    const [SubnetmaskOptions,setSubnetmaskOptions] = useState([]);
    const [Submited1,Setsubmitted1]=useState(false)

    const [HostRangeUsabilityipaddress,setHostRangeUsabilityipaddress] = useState();
    const [HostRangeUsabilitySubnetmask,setHostRangeUsabilitySubnetmask] = useState();
    const [HostRangeUsabilityipaddressrange,setHostRangeUsabilityipaddressrange] = useState([]);
    const [HostRangeUsabilityMinimumUsableHosts,setHostRangeUsabilityMinimumUsableHosts] = useState()
    const [Submited2,Setsubmitted2]=useState(false)

    const[BroadcastAddressCalculatoripaddress,setBroadcastAddressCalculatoripaddress] = useState()
    const[BroadcastAddressCalculatorsubnetmask,setBroadcastAddressCalculatorsubnetmask] = useState()
    const[BroadcastAddressipaddress,setBroadcastAddressipaddress] = useState()
    const [Submited3,Setsubmitted3]=useState(false)
    
    const[CIDRNotationFindersubnetmask,setCIDRNotationFindersubnetmask] = useState()
    const[CIDRNotationFinderwacknumber,setCIDRNotationFinderwacknumber] = useState()
    const [Submited4,Setsubmitted4]=useState(false)

    const[SameSubnetCheckeripaddress1,setSameSubnetCheckeripaddress1] = useState()
    const[SameSubnetCheckeripaddress2,setSameSubnetCheckeripaddress2] = useState()
    const[SameSubnetCheckersubnetmask,setSameSubnetCheckersubnetmask] = useState()
    const[SameSubnetCheckeroutcome,setSameSubnetCheckeroutcome] = useState(false)
    const [Submited5,Setsubmitted5]=useState(false)

    const[IPNetworkIdentifieripadress,setIPNetworkIdentifieripadress] = useState()
    const[IPNetworkIdentifiersubnetmask,setIPNetworkIdentifiersubnetmask] = useState()
    const[IPNetworkIdentifiernetworkid,setIPNetworkIdentifiernetworkid] = useState()
    const [Submited6,Setsubmitted6]=useState(false)
    const [HostRangeUsabilityipaddress1,setHostRangeUsabilityipaddress1] = useState();


const onChangeNummberofhost =e => {
    const number = e.target.value
    setNumberofrecenthost(number)
}
const OnChangeHostRangeUsabilityipaddress = e =>{
    const ipadddress =e.target.value
    setHostRangeUsabilityipaddress(ipadddress)
}
const OnChangeHostRangeUsabilityipaddress1 = e =>{
    const ipadddress =e.target.value
    setHostRangeUsabilityipaddress1(ipadddress)
}
const OnChangeHostRangeUsabilitySubnetmask = e =>{
    const subnetmask =e.target.value
    setHostRangeUsabilitySubnetmask(subnetmask)
}

const OnChangeBroadcastAddressCalculatoripaddress = e =>{
    const ipadddress =e.target.value
    setBroadcastAddressCalculatoripaddress(ipadddress)
}
const OnChangeBroadcastAddressCalculatorsubnetmask = e =>{
    const subnetmask =e.target.value
    setBroadcastAddressCalculatorsubnetmask(subnetmask)
}
const OnChangeCIDRNotationFinder = e =>{
    const subnetmask =e.target.value
    setCIDRNotationFindersubnetmask(subnetmask)
}
const OnChangeSameSubnetCheckeripaddress1 = e =>{
    const ipadddress =e.target.value
    setSameSubnetCheckeripaddress1(ipadddress)
}
const OnChangeSameSubnetCheckeripaddress2 = e =>{
    const ipadddress =e.target.value
    setSameSubnetCheckeripaddress2(ipadddress)
}
const OnChangeSameSubnetCheckersubnetmask = e =>{
    const subnetmask =e.target.value
    setSameSubnetCheckersubnetmask(subnetmask)
}
const OnChangeIPNetworkIdentifieripadress = e =>{
    const ipadddress =e.target.value
    setIPNetworkIdentifieripadress(ipadddress)
}

const OnChangeIPNetworkIdentifiersubnetmask = e =>{
    const subnetmask =e.target.value
    setIPNetworkIdentifiersubnetmask(subnetmask)
}


const ValidateInput= (Numberofhost,ipadddress,Subnetmask,ipadddress2="") => {

   if(Numberofhost){
   let validatingnumber = NumericChecker(Numberofhost);
    if (validatingnumber==false){
        return ["Please enter a valid number. Letters and special characters are not allowed.",false];
    }
   }

   if(ipadddress){
    let validatingipaddress = validipaddressorsubnet(ipadddress)
    if (validatingipaddress[1]==false){
        return validatingipaddress;
    }

   }

   if(ipadddress2!=""){
    let validatingipaddress2 = validipaddressorsubnet(ipadddress2)
    if (validatingipaddress2[1]==false){
        return validatingipaddress2;
    }
   }
  
   if(Subnetmask){
    let validatingsubnetmask = validipaddressorsubnet(Subnetmask)
    if (validatingsubnetmask[1]==false){
        return validatingsubnetmask;
    }
  
    
   }

   return ["",true]
}

const handleSubmitforHosttoSubnetCalculator = e => {
    e.preventDefault();   
    let validated = ValidateInput(Numberofhost)
    if(validated[1]==false){
        seterrormessage(validated[0])
        seterrormessageid("1")
        return ;
    }
    else{
       seterrormessageid("0")
    }
    const Swacknumber=findmostefficentwacknumber(Numberofhost)

    let SSubnetmaskinbinary= convertwacktoSubnetmaskbinary(Swacknumber)
    let SSubnetmaskindecimalform=convertbinarysubnetmakstodecimal(SSubnetmaskinbinary)

    let MSubnetmaskinbinary= convertwacktoSubnetmaskbinary(Swacknumber-1)
    let MSubnetmaskindecimalform=convertbinarysubnetmakstodecimal(MSubnetmaskinbinary)
    
    let ISubnetmaskinbinary= convertwacktoSubnetmaskbinary(Swacknumber+1)
    let ISubnetmaskindecimalform=convertbinarysubnetmakstodecimal(ISubnetmaskinbinary)
    
    
    Setsubmitted1(true);    
    setSubnetmaskOptions([MSubnetmaskindecimalform,SSubnetmaskindecimalform,ISubnetmaskindecimalform]) 

}


const handleSubmitofHostRangeUsabilityChecker = () => {
    let validated = ValidateInput(false,HostRangeUsabilityipaddress,HostRangeUsabilitySubnetmask)
    if(validated[1]==false){
        console.log(validated[0])
        seterrormessage(validated[0])
        seterrormessageid("2")
        return ;
    }
    else{
       seterrormessageid("0")
    }

    let Cidrnotation= convertsubnetmaskdecimalformto_Cidrnotaion(HostRangeUsabilitySubnetmask)
    let minimumnumberaddress = getMinimumUsableaddressbysubntemask(Cidrnotation)
    let minimumnumberofusablehost = minimumnumberaddress -2
    let rangeofip = Rangeusableipaddress(HostRangeUsabilityipaddress,HostRangeUsabilitySubnetmask)
    setHostRangeUsabilityipaddressrange(rangeofip)
    setHostRangeUsabilityMinimumUsableHosts(minimumnumberofusablehost)
    Setsubmitted2(true)
//  let minimumnumberofusablehost =   

}

const handleSubmitBroadcastAddressCalculator= () => {
   let validated = ValidateInput(false,BroadcastAddressCalculatoripaddress,BroadcastAddressCalculatorsubnetmask)
    if(validated[1]==false){
        console.log(validated[0])
        seterrormessage(validated[0])
        seterrormessageid("3")
        return ;
    }
    else{
       seterrormessageid("0")
    }

 let cheacker = Rangeusableipaddress(BroadcastAddressCalculatoripaddress,BroadcastAddressCalculatorsubnetmask) // broad cast address is the last element in the set
 setBroadcastAddressipaddress(cheacker[2])
 Setsubmitted3(true)

}
const handleSubmitCIDRNotationFinder= () => {
    let validated = ValidateInput(false,false,CIDRNotationFindersubnetmask)
    if(validated[1]==false){
        console.log(validated[0])
        seterrormessage(validated[0])
        seterrormessageid("4")
        return ;
    }
    else{
       seterrormessageid("0")
    }
    let Cidrnotation= convertsubnetmaskdecimalformto_Cidrnotaion(CIDRNotationFindersubnetmask)
    setCIDRNotationFinderwacknumber(Cidrnotation)
    Setsubmitted4(true)
   }

const handleSubmitSameNetworkIdentifier= () => {
    let validated = ValidateInput(false,SameSubnetCheckeripaddress1,SameSubnetCheckersubnetmask,SameSubnetCheckeripaddress2)
    if(validated[1]==false){
        console.log(validated[0])
        seterrormessage(validated[0])
        seterrormessageid("5")
        return ;
    }
    else{
       seterrormessageid("0")
    }
    let Cidrnotation= convertsubnetmaskdecimalformto_Cidrnotaion(SameSubnetCheckersubnetmask)
    let outcome = Samesubnetidentifer(SameSubnetCheckeripaddress1,SameSubnetCheckeripaddress2,SameSubnetCheckersubnetmask)
    
    setSameSubnetCheckeroutcome(outcome)
    Setsubmitted5(true)

   }
   const handleSubmitNetworkIdentifier = () => {
    let validated = ValidateInput(false,IPNetworkIdentifieripadress,IPNetworkIdentifiersubnetmask)
    if(validated[1]==false){
        console.log(validated[0])
        seterrormessage(validated[0])
        seterrormessageid("6")
        return ;
    }
    else{
       seterrormessageid("0")
    }
    let Neworkid= getNetworkid(IPNetworkIdentifieripadress,IPNetworkIdentifiersubnetmask)
    setIPNetworkIdentifiernetworkid(Neworkid)
    Setsubmitted6(true)
   }


return (

<div>

<h1 className='HeadertextCalculator'>Scroll Down to Find Your Preferred Calculator</h1>

{/* Host to subnet */}
{/* No1 */}
<div className='lineardividercalc'></div>
<h2 className='Subsectiontextcalc'>Host-to-Subnet Calculator</h2>
<p className='paragraphtextcalc'>
Enter the number of usable hosts you need, and the tool will display the different subnet mask options that may fit your requirement, along with the most efficient one.
</p>

<div className='ContainerforForm'>
<Form>
<Form.Group>
    <Form.Label>Number Of Host</Form.Label>
    <div    style={{background:'#32B07A', padding: '10px', borderRadius:'10px'}}    >
        <Form.Control
        style={{border:'2px solid green'}}
                type="text"
                placeholder="Example: 28"
                value={Numberofhost}
                onChange={onChangeNummberofhost}
                />
                </div>
    </Form.Group>
<br/>
<p>{errormessageid=="1"? (<p className='error'>{errormessage}</p>) : (<div></div>)   }</p>
<Button  className='Submitbuttoncalc' variant="primary" onClick={handleSubmitforHosttoSubnetCalculator}>
             Submit
           </Button>
</Form>
</div> 
<br/>

{Submited1 ? 
( 
<div className='ContainerfordisplayAnwser'>
  <h1 className='ContainerfordisplayAnwserHeading'>    <b> For {Numberofhost} usable hosts, here are the available subnet mask options:</b></h1> 
<ol style={{ marginLeft:'2%'}}> {/* working on the marging between the values*/}
 <li>Subnet Mask: {SubnetmaskOptions[0]} (/{convertsubnetmaskdecimalformto_Cidrnotaion(SubnetmaskOptions[0])})</li> 
 <ul>
    <li>
    Usable hosts: {getUsableHostnumberbysubnetmask(SubnetmaskOptions[0])-2} (More than enough for your requirement)
    </li>
 </ul>
   
  <li>Subnet Mask: {SubnetmaskOptions[1]} (/{convertsubnetmaskdecimalformto_Cidrnotaion(SubnetmaskOptions[1])})</li>
  <ul>
    <li>
    Usable hosts: {getUsableHostnumberbysubnetmask(SubnetmaskOptions[1])-2} (Sufficient for your requirement)
    </li>
 </ul>
   
  <li>Subnet Mask: {SubnetmaskOptions[2]} (/{convertsubnetmaskdecimalformto_Cidrnotaion(SubnetmaskOptions[2])})</li>
  <ul>
    <li>
    Usable hosts: {getUsableHostnumberbysubnetmask(SubnetmaskOptions[2])-2} (Does not meet your requirement)
    </li>
 </ul>
   
</ol>
<br/>
<h1 className='ContainerfordisplayAnwserHeading'> <b> Most Efficient Option: {SubnetmaskOptions[1]} (/{convertsubnetmaskdecimalformto_Cidrnotaion(SubnetmaskOptions[1])})</b></h1>

</div>) :
(<div></div>)    }

{/* No2-------------------- */}

<div className='lineardividercalc'></div>
<h2 className='Subsectiontextcalc'>Host Range & Usability Checker</h2>
<p className='paragraphtextcalc'>
To determine the minimum number of hosts and the range of usable IP addresses, please click on the form and enter the IP address and subnet mask. The tool will then display the minimum number of usable hosts and the range of IP addresses available within the specified subnet.</p>
<div className='ContainerforForm'>
<Form>
<Form.Group>
    <Form.Label>IP Address</Form.Label>
    <div     style={{background:'#32B07A', padding: '10px', borderRadius:'10px'}}    >
    <Form.Control
    style={{border:'2px solid green'}}
            type="text"
            placeholder="192.168.1.1"
             value={HostRangeUsabilityipaddress}
             onChange={OnChangeHostRangeUsabilityipaddress}
             />
             </div>
</Form.Group>
<Form.Group>
    <Form.Label>Subnetmask</Form.Label>
    <div     style={{background:'#32B07A', padding: '10px', borderRadius:'10px'}}    >
    <Form.Control
    style={{border:'2px solid green'}}
            type="text"
            placeholder="255.255.255.0"
             value={HostRangeUsabilitySubnetmask}
             onChange={OnChangeHostRangeUsabilitySubnetmask}
             />
             </div>
</Form.Group>

<br/>
<p>{errormessageid=="2"? (<p className='error'>{errormessage}</p>) : (<div></div>)   }</p>

<Button  className='Submitbuttoncalc' variant="primary" onClick={handleSubmitofHostRangeUsabilityChecker}>
             Submit
           </Button>
</Form>


</div>
<br/>
{Submited2 ? 
( 
<div className='ContainerfordisplayAnwser'>
  <h1 className='ContainerfordisplayAnwserHeading'>    <b> For the IP address and subnet mask entered:</b></h1> 
<ul>
    <li>
    <b>Minimum Usable Hosts: {HostRangeUsabilityMinimumUsableHosts} hosts</b>
    </li>
    <li>
       <b> Range of Usable IP Addresses:</b>
       <ul>
        <li> Starting IP: {HostRangeUsabilityipaddressrange[0]}</li>
        <li>Ending IP: {HostRangeUsabilityipaddressrange[1]}</li>
       </ul>
    </li>
</ul>
</div>) :
(<div></div>)    }


{/* No.3 --------------------------------------------------------*/}

<div className='lineardividercalc'></div>
<h2 className='Subsectiontextcalc'>Broadcast Address Calculator</h2>
<p className='paragraphtextcalc'>
To find the broadcast address for a given subnet, click on the form and enter the IP address and subnet mask. The tool will then calculate and display the broadcast address for the specified subnet.

</p>
<div className='ContainerforForm'>
<Form>
<Form.Group>
    <Form.Label>IP Address</Form.Label>
    <div     style={{background:'#32B07A', padding: '10px', borderRadius:'10px'}}    >
    <Form.Control
    style={{border:'2px solid green'}}
            type="text"
            placeholder="192.168.1.1"
             value={BroadcastAddressCalculatoripaddress}
             onChange={OnChangeBroadcastAddressCalculatoripaddress}
             />
             </div>
</Form.Group>
<Form.Group>
    <Form.Label>Subnetmask</Form.Label>
    <div     style={{background:'#32B07A', padding: '10px', borderRadius:'10px'}}    >
    <Form.Control
    style={{border:'2px solid green'}}
            type="text"
            placeholder="255.255.255.0"
             value={BroadcastAddressCalculatorsubnetmask}
             onChange={OnChangeBroadcastAddressCalculatorsubnetmask}
             />
             </div>
</Form.Group>
<br/>
<p>{errormessageid=="3"? (<p className='error'>{errormessage}</p>) : (<div></div>)   }</p>

<Button  className='Submitbuttoncalc' variant="primary" onClick={handleSubmitBroadcastAddressCalculator}>
             Submit
           </Button>
</Form>


</div>
<br/>
{Submited3 ? 
( 
<div className='ContainerfordisplayAnwser'>
  <h1 className='ContainerfordisplayAnwserHeading'>    <b> For the IP address {BroadcastAddressCalculatoripaddress} and {BroadcastAddressCalculatorsubnetmask} (/{ convertsubnetmaskdecimalformto_Cidrnotaion(BroadcastAddressCalculatorsubnetmask)}):</b></h1> 
<ul>
    <li>
    Broadcast Address:{BroadcastAddressipaddress}
    </li>
   
</ul>
</div>) :
(<div></div>)    }



{/* No.4 --------------------------------------------------------*/}

<div className='lineardividercalc'></div>
<h2 className='Subsectiontextcalc'>CIDR Notation Finder</h2>
<p className='paragraphtextcalc'>
To determine the subnet size in CIDR notation, click on the form and enter the subnet mask (e.g., /24 or /28). The tool will then display the subnet size in CIDR notation, helping you understand the network's capacity and range.
</p>
<div className='ContainerforForm'>
    
<Form>
<Form.Group>
    <Form.Label>Subnetmask</Form.Label>
    <div     style={{background:'#32B07A', padding: '10px', borderRadius:'10px'}}    >
    <Form.Control
    style={{border:'2px solid green'}}
            type="text"
            placeholder="255.255.0.0"
             value={CIDRNotationFindersubnetmask}
             onChange={OnChangeCIDRNotationFinder}
             />
             </div>
</Form.Group>
<br/>
<p>{errormessageid=="4"? (<p className='error'>{errormessage}</p>) : (<div></div>)   }</p>
<Button  className='Submitbuttoncalc' variant="primary" onClick={handleSubmitCIDRNotationFinder}>
             Submit
           </Button>
</Form>



</div>
<br/>
{Submited4 ? 
( 
<div className='ContainerfordisplayAnwser'>
  <h1 className='ContainerfordisplayAnwserHeading'>    <b> The equivalent CIDR notation for the entered subnet mask {CIDRNotationFindersubnetmask}:</b></h1> 
<ul>
    <li>
    CIDR Notation: /{CIDRNotationFinderwacknumber}
    </li>
   
</ul>
</div>) :
(<div></div>)    }

{/* No.5 --------------------------------------------------------*/}

<div className='lineardividercalc'></div>
<h2 className='Subsectiontextcalc'>Same Subnet Checker/Same Network Identifier</h2>
<p className='paragraphtextcalc'>
To determine if two IP addresses are in the same subnet, click on the form and enter the IP address, subnet mask, and the second IP address. The tool will then check and display whether both IP addresses belong to the same subnet.

</p>
<div className='ContainerforForm'>

<Form>
<Form.Group>
    <Form.Label>IP Address 1</Form.Label>
    <div     style={{background:'#32B07A', padding: '10px', borderRadius:'10px'}}    >
    <Form.Control
    style={{border:'2px solid green'}}
            type="text"
            placeholder="Example: 28"
             value={SameSubnetCheckeripaddress1}
             onChange={OnChangeSameSubnetCheckeripaddress1}
             />
             </div>
</Form.Group>
<Form.Group>
    <Form.Label>IP Address 2</Form.Label>
    <div     style={{background:'#32B07A', padding: '10px', borderRadius:'10px'}}    >
    <Form.Control
    style={{border:'2px solid green'}}
            type="text"
            placeholder="Example: 28"
             value={SameSubnetCheckeripaddress2}
             onChange={OnChangeSameSubnetCheckeripaddress2}
             />
             </div>
</Form.Group>
<Form.Group>
    <Form.Label>Subnetmask </Form.Label>
    <div     style={{background:'#32B07A', padding: '10px', borderRadius:'10px'}}    >
    <Form.Control
    style={{border:'2px solid green'}}
            type="text"
            placeholder="Example: 28"
             value={SameSubnetCheckersubnetmask}
             onChange={OnChangeSameSubnetCheckersubnetmask}
             />
             </div>
</Form.Group>

<br/>
<p>{errormessageid=="5"? (<p className='error'>{errormessage}</p>) : (<div></div>)   }</p>

<Button  className='Submitbuttoncalc' variant="primary" onClick={handleSubmitSameNetworkIdentifier}>
             Submit
           </Button>
</Form>


</div> 

<br/>
{Submited5 ? 
( 
<div className='ContainerfordisplayAnwser'>
  <h1 className='ContainerfordisplayAnwserHeading'>    <b> For the IP addresses {SameSubnetCheckeripaddress1} and {SameSubnetCheckeripaddress2} with subnet mask {SameSubnetCheckersubnetmask}:</b></h1> 
<ul>
    <li>
    Result: The IP addresses are  {SameSubnetCheckeroutcome ? (<span>in the same subnet</span> ) :(<span>not in the same subnet</span>) }
    </li>

</ul>
</div>) :
(<div></div>)    }


<div className='lineardividercalc'></div>
<h2 className='Subsectiontextcalc'>IP Network Identifier</h2>
<p className='paragraphtextcalc'>
To determine the network ID, please click on the form and enter the IP address along with the subnet mask or CIDR notation (e.g., 255.255.255.0 or /24). Once you submit the form, the tool will calculate and display the network ID associated with the provided IP address and subnet mask.
</p>

<div className='ContainerforForm'>
<Form>
<Form.Group>
    <Form.Label>IP Address</Form.Label>
    <div     style={{background:'#32B07A', padding: '10px', borderRadius:'10px'}}    >
    <Form.Control
    style={{border:'2px solid green'}}
            type="text"
            placeholder="Example: 28"
             value={IPNetworkIdentifieripadress}
             onChange={OnChangeIPNetworkIdentifieripadress}
             />
             </div>
</Form.Group>


<Form.Group>
    <Form.Label>Subnetmask </Form.Label>
    <div     style={{background:'#32B07A', padding: '10px', borderRadius:'10px'}}    >
    <Form.Control
    style={{border:'2px solid green'}}
            type="text"
            placeholder="Example: 28"
             value={IPNetworkIdentifiersubnetmask}
             onChange={OnChangeIPNetworkIdentifiersubnetmask}
             />
             </div>
</Form.Group>
<br/>
<p>{errormessageid=="6"? (<p className='error'>{errormessage}</p>) : (<div></div>)   }</p>
<Button  className='Submitbuttoncalc' variant="primary" onClick={handleSubmitNetworkIdentifier}>
             Submit
           </Button>
</Form>
</div>
<br/>

{Submited6 ? 
( 
<div className='ContainerfordisplayAnwser'>
  <h1 className='ContainerfordisplayAnwserHeading'>    <b> For the IP addresses {IPNetworkIdentifieripadress} with subnet mask {IPNetworkIdentifiersubnetmask}:</b></h1> 
<ul>
    <li>
    Network Address: {IPNetworkIdentifiernetworkid}
    </li>

</ul>
</div>) :
(<div></div>)    }




</div>

);


}

export default Calculatorpage