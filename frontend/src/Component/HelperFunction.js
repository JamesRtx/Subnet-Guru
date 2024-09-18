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

// Convert single octect of binary digits to decimal
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

function findmostefficentwacknumber (Numberofhost){
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

function getUsableHostnumberbysubnetmask(Subnetmask){
    let wacknumber = convertsubnetmaskdecimalformto_Cidrnotaion(Subnetmask)
    let Usablehosts = getMinimumUsableaddressbysubntemask(wacknumber)
    return Usablehosts

}
function NumericChecker(value){ // checks if value is a numeric
for(const item  in value){
let count =0 ;
    for(let i = 0; i<=9; i++){
        if(value[item]==i){
        count++
        break
        }
    }
    if(count==0){
        return false
    }
}
    return  true;

}
function sizeofString(word){
    let count =0;
for (const key in word) {
count++
}
return count;
}
function validipaddressorsubnet(value){
let count =0;

let sizeofword = sizeofString(value)
let tempaccumulator= "";
for (const key in value) {
if(NumericChecker(value[key]) || value[key]=='.'){
    if(value[key]!='.'){
        tempaccumulator+=value[key]
    }
    
if(value[key]=='.' ||  key==(sizeofword-1)){
        if(tempaccumulator>255){
            return ["Oops! One of the numbers seems too high. Each part of the IP address and subnet mask should be between 0 and 255 (e.g., 192.168.1.1 and 255.255.255.0).",false];
            break ;
        }

        tempaccumulator=""

}

}
else{
   return ["Oops! It looks like there’s an issue with your input. Please enter a valid IP address and subnet mask using only numbers and dots (e.g., 192.168.1.1 and 255.255.255.0).",false];
    break ;
}


}

return ["",true];
}
export {Samesubnetidentifer,getNetworkid,Rangeusableipaddress,convertbinarytodecimal,getMinimumUsableaddressbysubntemask,convert_Cidrnotaiontosubnetmaskbinaryform,convertsubnetmaskbinaryformto_Cidrnotaion,convertsubnetmaskdecimalformto_Cidrnotaion,convertwacktoSubnetmaskbinary,findmostefficentwacknumber,convertbinarysubnetmakstodecimal,convertdecimalsubnetmakstobinary,getUsableHostnumberbysubnetmask,NumericChecker,validipaddressorsubnet}