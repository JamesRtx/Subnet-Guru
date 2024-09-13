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

    const [HostRangeUsabilityipaddress,setHostRangeUsabilityipaddress] = useState();
    const [HostRangeUsabilityipaddress1,setHostRangeUsabilityipaddress1] = useState();
    const [HostRangeUsabilitySubnetmask,setHostRangeUsabilitySubnetmask] = useState();

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
const handleSubmitofnumberofhost = () => {
    const Swacknumber=getbinarysubnetmaskbyNumberofhost(Numberofhost)

    let SSubnetmaskinbinary= convertwacktoSubnetmaskbinary(Swacknumber)
    let SSubnetmaskindecimalform=convertbinarysubnetmakstodecimal(SSubnetmaskinbinary)

    let MSubnetmaskinbinary= convertwacktoSubnetmaskbinary(Swacknumber-1)
    let MSubnetmaskindecimalform=convertbinarysubnetmakstodecimal(MSubnetmaskinbinary)
    
    let ISubnetmaskinbinary= convertwacktoSubnetmaskbinary(Swacknumber+1)
    let ISubnetmaskindecimalform=convertbinarysubnetmakstodecimal(ISubnetmaskinbinary)

     setSubnetmaskOptions([MSubnetmaskindecimalform,SSubnetmaskindecimalform,ISubnetmaskindecimalform]) 
}
const handleSubmitofHostRangeUsabilityChecker = () => {
    let Cidrnotation= convertsubnetmaskdecimalformto_Cidrnotaion(HostRangeUsabilitySubnetmask)
    let minimumnumberaddress = getMinimumUsableaddressbysubntemask(Cidrnotation)
    let minimumnumberofusablehost = minimumnumberaddress -2
    let rangeofip = Rangeusableipaddress(HostRangeUsabilityipaddress,HostRangeUsabilitySubnetmask)
    console.log(rangeofip)
//  let minimumnumberofusablehost =   

}

const handleSubmitBroadcastAddressCalculator= () => {
 let cheacker = Rangeusableipaddress(HostRangeUsabilityipaddress,HostRangeUsabilitySubnetmask) // broad cast address is the last element in the set
console.log(cheacker)  
}
const handleSubmitCIDRNotationFinder= () => {
    let Cidrnotation= convertsubnetmaskdecimalformto_Cidrnotaion(HostRangeUsabilitySubnetmask)
   console.log(Cidrnotation)  
   }

const handleSubmitSameNetworkIdentifier= () => {
    let Cidrnotation= convertsubnetmaskdecimalformto_Cidrnotaion(HostRangeUsabilitySubnetmask)
    let outcome = Samesubnetidentifer(HostRangeUsabilityipaddress,HostRangeUsabilityipaddress1,HostRangeUsabilitySubnetmask)
   console.log(outcome)  

   }
   const handleSubmitNetworkIdentifier = () => {
    let Neworkid= getNetworkid(HostRangeUsabilityipaddress,HostRangeUsabilitySubnetmask)
    console.log(Neworkid)
   }

function  Samesubnetidentifer (ipadddress1,ipadddress2,subnetmask){
    let networkid1= getNetworkid(ipadddress1,subnetmask)
    let networkid2 = getNetworkid(ipadddress2,subnetmask)
    let outcome = false;
    if(networkid1===networkid2){
        outcome=true
    }
    return outcome
}
function getNetworkid (ipadddress,subnetmask){
    let ipadddressbinaryform = convertdecimalsubnetmakstobinary(ipadddress)
    let subnetmaskbinaryform = convertdecimalsubnetmakstobinary(subnetmask)
    let counter =0 ;
    let tempaccumulatorforsubnetmask= "";
    let tempaccumulatorforipaddress= "";
    let Networkid ="";
    for ( const key in subnetmaskbinaryform){
        
        if(subnetmaskbinaryform[key]!="."){
         tempaccumulatorforsubnetmask+=subnetmaskbinaryform[key]
         tempaccumulatorforipaddress+=ipadddressbinaryform[key]
        }
         
        counter++
        if(subnetmaskbinaryform[key]=="." ||  (subnetmaskbinaryform.length-1)==key){

            let bits = 8;
            let decimalnumberofhost =0;
            for (const key1 in tempaccumulatorforsubnetmask) {
                if(tempaccumulatorforsubnetmask[key1]=="1"){
                    if(tempaccumulatorforipaddress[key1]=="1"){
                        decimalnumberofhost+=   (2)**(bits-1)
                    }


                    
                    if(bits==1 && decimalnumberofhost==255){
                        
                        decimalnumberofhost-=1;
                    }
                    
            
                }
                bits = bits-1
            }
            if(counter==35){
                Networkid+=decimalnumberofhost
                break
            }
                Networkid+=decimalnumberofhost+"."
        
         tempaccumulatorforsubnetmask= ""; 
         tempaccumulatorforipaddress= "";
        }

    }
    return Networkid

}
function Rangeusableipaddress(ipadddress,subnetmask){
  
     let ipadddressbinaryform = convertdecimalsubnetmakstobinary(ipadddress)
     let subnetmaskbinaryform = convertdecimalsubnetmakstobinary(subnetmask)

     let startingipaddress = "" ;
    let endingipaddress ="";
    let broadcastadress ="";

    let counter =0 ;
    let tempaccumulatorforsubnetmask= "";
    let tempaccumulatorforipaddress= "";

    for ( const key in subnetmaskbinaryform){
        
        if(subnetmaskbinaryform[key]!="."){
         tempaccumulatorforsubnetmask+=subnetmaskbinaryform[key]
         tempaccumulatorforipaddress+=ipadddressbinaryform[key]
        }
         
        counter++
        if(subnetmaskbinaryform[key]=="." ||  (subnetmaskbinaryform.length-1)==key){

            let bits = 8;
            let decimalnumberofhost =0;
            let decimalnumberofhostforbroadcastaddress =0;
            for (const key1 in tempaccumulatorforsubnetmask) {


                if(tempaccumulatorforsubnetmask[key1]=="0"){
                    decimalnumberofhost+=   (2)**(bits-1)
                    decimalnumberofhostforbroadcastaddress=decimalnumberofhost
                    if(bits==1 && decimalnumberofhost==255){
                        
                        decimalnumberofhost-=1;
                    }
                    
            
                }
                bits = bits-1
            }
            console.log(decimalnumberofhost,counter, "workinga",tempaccumulatorforipaddress)
            if(decimalnumberofhost==0){
                endingipaddress+=convertbinarytodecimal(tempaccumulatorforipaddress)
                broadcastadress+=convertbinarytodecimal(tempaccumulatorforipaddress)
            }
            if(decimalnumberofhost!=0){
                endingipaddress+=decimalnumberofhost
                broadcastadress+=decimalnumberofhostforbroadcastaddress
            }
            if(counter!=35){
                endingipaddress+='.'
                broadcastadress+='.'
            }
           if(counter==35){
            // stoped here trying to find 
            let helper = "";
            startingipaddress+= "1" 
            break

           }
        
        startingipaddress+= convertbinarytodecimal(tempaccumulatorforipaddress) +"."

         tempaccumulatorforsubnetmask= ""; 
         tempaccumulatorforipaddress= "";
        }

    }
    return [startingipaddress,endingipaddress,broadcastadress]

}

function convertbinarytodecimal(binarynumber){
    let counter=7;
    let decimalnumber=0;
    for (const key in binarynumber) {

        if(binarynumber[key]=="1"){
            decimalnumber+= 2**(counter)
        }

        counter-=1
    }

    return decimalnumber
    }


function getMinimumUsableaddressbysubntemask(wacknumbersubnetmask){
let numberofusablehost = (2)**(32-wacknumbersubnetmask)

  return numberofusablehost;
}



function convert_Cidrnotaiontosubnetmaskbinaryform(Cidrnotation){
    let count=1;
    let subnetmaskbinaryform =""
    for(let i =1; i<=32;i++){
       
        if(i>Cidrnotation){
            subnetmaskbinaryform+="0"
        }
        else{
            subnetmaskbinaryform+="1";
        }
        if(count==8 && i!=32){
            count=0;
            subnetmaskbinaryform+="."
        }
        count++;
    }
    return subnetmaskbinaryform
}
function convertsubnetmaskbinaryformto_Cidrnotaion(Subnetmaskbinary){
    let count=0;
        for (const key in Subnetmaskbinary) {
            if(Subnetmaskbinary[key]=="1"){
                count++
            }
        }
        return count
}
function convertsubnetmaskdecimalformto_Cidrnotaion(Subnetmaskindecimalform){
    let Subnetmaskinbinaryform= convertdecimalsubnetmakstobinary(Subnetmaskindecimalform)
    let Cidrnotation =convertsubnetmaskbinaryformto_Cidrnotaion(Subnetmaskinbinaryform)
     
        return Cidrnotation
}
function convertwacktoSubnetmaskbinary (bits){
// converts wack to subnetmask binary
let Subnetmaskinbinaryform = ""
let counter=0;
let zerotime= false;
for(let i =1 ; i<=32; i++){
    counter+=1;

    if(zerotime==false){
    Subnetmaskinbinaryform+="1"
    }
    else{
Subnetmaskinbinaryform+="0"
    }
    

    if(counter==8 && i!=32){
        Subnetmaskinbinaryform+="."
            counter=0;
        }

        if(bits==i){      
            zerotime=true
        }
   
}

return Subnetmaskinbinaryform

}

function getbinarysubnetmaskbyNumberofhost (Numberofhost){
// find the most effeicent wack number
let bits = 30;
let target = false;
let mostefficentnumber= 0;

    for(let i =1; i<=4 ; i++){
       if(target==true){
        break;
       }
        let j = 1
        if(i==1){
            j=3
        }
        while (j<=8){
            let number =  (2)**(32-bits)
           if(number>Numberofhost){
            mostefficentnumber=number
            target=true
            break
           }
            bits=bits-1;
            j++;
        }

    }

   let wacknumber= bits

  return wacknumber;
}



function convertbinarysubnetmakstodecimal (Subnetmask){
    let tempnumber=0;
    let Subnetmaskindecimalform="";
    let counterhelper= 1;
    let counterhelper1= 1;
    for (const key in Subnetmask) {
  
        if(Subnetmask[key] == "1" || counterhelper1>27 && Subnetmask[key]!="0"){
            tempnumber+= 2**(8-counterhelper)
            counterhelper++;
            if(counterhelper1>27){
            }
        }
        

        if(Subnetmask[key]=="."){  
            Subnetmaskindecimalform+=tempnumber+".";
            tempnumber=0;
            counterhelper=1
        }
        counterhelper1++
    }
    return Subnetmaskindecimalform+=tempnumber    
}

function convertdecimalsubnetmakstobinary (Subnetmask){
    let tempaccumulator="";
    let Subnetmaskinbinaryform="";
    let counterhelper= 1;
    let counterhelper1= 1;
    for (const key in Subnetmask) {
        
        tempaccumulator+=Subnetmask[key] 
        if(Subnetmask[key]=="." || (Subnetmask.length-1)==key ){  
            
            
            for(let i =1 ; i<=8;i++){

                let divider = tempaccumulator/2**(8-i)
                if(divider>=1){

                    tempaccumulator = tempaccumulator-2**(8-i)
                    Subnetmaskinbinaryform+='1'
                }
                if(divider<1){
                      Subnetmaskinbinaryform+='0'
                }

                if( i==8 && (Subnetmask.length-1)!=key ){
                    Subnetmaskinbinaryform+='.'
                }

            }


            tempaccumulator=""
    
        }
        
        counterhelper1++
    }

    return  Subnetmaskinbinaryform
}






return (
<div>

<h1 className='Headertext'>Scroll Down to Find Your Preferred Calculator</h1>
<br/>
<br/>
{/* Host to subnet */}
{/* No1 */}
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
</div>) :(<div></div>)    
 
 }
</div>

{/* No2 */}
{/* 
<div className='lineardivider'></div>
<h2 className='Subsectiontext'>Host Range & Usability Checker</h2>
<p className='paragraphtext'>
To determine the minimum number of hosts and the range of usable IP addresses, please click on the form and enter the IP address and subnet mask (e.g., /24). The tool will then display the minimum number of usable hosts and the range of IP addresses available within the specified subnet.</p>
<div className='ContainerforForm'>
<Form>
<Form.Group>
    <Form.Label>IP Address</Form.Label>
    <div     style={{background:'#32B07A', padding: '10px', borderRadius:'10px'}}    >
    <Form.Control
    style={{border:'2px solid green'}}
            type="text"
            placeholder="Example: 28"
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
            placeholder="Example: 28"
             value={HostRangeUsabilitySubnetmask}
             onChange={OnChangeHostRangeUsabilitySubnetmask}
             />
             </div>
</Form.Group>
<Button variant="primary" onClick={handleSubmitofHostRangeUsabilityChecker}>
             Submit
           </Button>
</Form>


</div> */}

{/* <div className='lineardivider'></div>
<h2 className='Subsectiontext'>Broadcast Address Calculator</h2>
<p className='paragraphtext'>
To find the broadcast address for a given subnet, click on the form and enter the IP address and subnet mask (e.g., /24). The tool will then calculate and display the broadcast address for the specified subnet.

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
            placeholder="Example: 28"
             value={HostRangeUsabilitySubnetmask}
             onChange={OnChangeHostRangeUsabilitySubnetmask}
             />
             </div>
</Form.Group>
<Button variant="primary" onClick={handleSubmitBroadcastAddressCalculator}>
             Submit
           </Button>
</Form>


</div> */}

{/* 
<div className='lineardivider'></div>
<h2 className='Subsectiontext'>CIDR Notation Finder</h2>
<p className='paragraphtext'>
To determine the subnet size in CIDR notation, click on the form and enter the IP address and subnet mask (e.g., /24 or /28). The tool will then display the subnet size in CIDR notation, helping you understand the network's capacity and range.
</p>
<div className='ContainerforForm'>
<Form>

<Form.Group>
    <Form.Label>Subnetmask</Form.Label>
    <div     style={{background:'#32B07A', padding: '10px', borderRadius:'10px'}}    >
    <Form.Control
    style={{border:'2px solid green'}}
            type="text"
            placeholder="Example: 28"
             value={HostRangeUsabilitySubnetmask}
             onChange={OnChangeHostRangeUsabilitySubnetmask}
             />
             </div>
</Form.Group>
<Button variant="primary" onClick={handleSubmitCIDRNotationFinder}>
             Submit
           </Button>
</Form>


</div> */}

{/* <div className='lineardivider'></div>
<h2 className='Subsectiontext'>Same Subnet Checker/Same Network Identifier</h2>
<p className='paragraphtext'>
To determine if two IP addresses are in the same subnet, click on the form and enter the IP address, subnet mask, and the second IP address. The tool will then check and display whether both IP addresses belong to the same subnet.


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
             value={HostRangeUsabilityipaddress}
             onChange={OnChangeHostRangeUsabilityipaddress}
             />
             </div>
</Form.Group>
--
<Form.Group>
    <Form.Label>IP Address 1</Form.Label>
    <div     style={{background:'#32B07A', padding: '10px', borderRadius:'10px'}}    >
    <Form.Control
    style={{border:'2px solid green'}}
            type="text"
            placeholder="Example: 28"
             value={HostRangeUsabilityipaddress1}
             onChange={OnChangeHostRangeUsabilityipaddress1}
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
             value={HostRangeUsabilitySubnetmask}
             onChange={OnChangeHostRangeUsabilitySubnetmask}
             />
             </div>
</Form.Group>
<Button variant="primary" onClick={handleSubmitSameNetworkIdentifier}>
             Submit
           </Button>
</Form>


</div>  */}

<div className='lineardivider'></div>
<h2 className='Subsectiontext'>IP Network Identifier</h2>
<p className='paragraphtext'>
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
             value={HostRangeUsabilityipaddress}
             onChange={OnChangeHostRangeUsabilityipaddress}
             />
             </div>
</Form.Group>
--
<Button variant="primary" onClick={handleSubmitNetworkIdentifier}>
             Submit
           </Button>
</Form>


</div>



</div>

);


}

export default Calculatorpage