const FAQandAnwser = [


    {   
        id:'0',
        faq:"What is a broadcast address, and what is it used for?" ,
        answer : " The broadcast address is used to send data packets to all devices within a subnet. It is the last IP address in the subnet and allows a device to communicate with every other device in that subnet simultaneously."

    }
    ,
    {
        id:'1',
        faq:"What is the difference between public and private IP addresses?",
        answer: "Public IP addresses are used to identify devices on the global internet and must be unique across the entire web. Private IP addresses are used within local networks and are not routable on the internet, allowing multiple devices to use the same private IP address range within different networks."

    }
    ,
    {
        id :'2',
        faq:"What is the purpose of dividing an IP address into a network ID and a host ID?",
        answer: "Dividing an IP address into a network ID and a host ID helps organize and manage network communication. The network ID identifies the specific network segment, while the host ID identifies individual devices within that network. This structure enables efficient routing and delivery of data packets."

    }
    ,
    {
        id:'3',
        faq:"How do I know if two IP addresses are in the same subnet?",
        answer:"To determine if two IP addresses are in the same subnet, compare their network IDs. Apply the subnet mask to both IP addresses and check if the results are the same. If the network IDs match, the IP addresses are in the same subnet."
    },
    {
        id:'4',
        faq:"How does subnetting impact network security?",
        answer:"Subnetting enhances network security by dividing a large network into smaller, isolated subnets. Each subnet can be treated as a separate segment, allowing administrators to apply specific security policies to control traffic flow between subnets. By using firewalls or access control lists (ACLs) between subnets, you can prevent unauthorized access and limit the spread of malicious traffic. Subnetting also allows for easier identification and containment of security breaches, since an attack in one subnet won’t immediately impact the entire network."
    },
    {
        id:'5',
        faq:"How does subnetting improve network performance?",
        answer:"Subnetting divides a larger network into smaller, more manageable sub-networks. This reduces network congestion by limiting the number of devices in each subnet, improving performance by allowing data to travel more efficiently within smaller groups of devices."
    },
    {
        id:'6',
        faq:"What happens if I don't use subnetting in a large network?",
        answer:"Without subnetting, a large network would have all devices sharing the same broadcast domain. This means that every broadcast message (like ARP requests) would be sent to all devices in the network, leading to excessive network traffic (known as broadcast storms). As the number of devices grows, this can severely degrade network performance, cause congestion, and increase the risk of collisions. Additionally, managing a large network without segmentation would make it harder to isolate and troubleshoot issues."
    },
    {
        id:'7',
        faq:"What is the smallest subnet I can create, and why is it limited?",
        answer: "The smallest possible subnet contains 4 IP addresses, which includes the network address, two usable host addresses, and the broadcast address. This is known as a /30 subnet, with a subnet mask of 255.255.255.252. The limitation is due to the need for one address to represent the network itself and one address for broadcasting within the subnet. Therefore, only two IPs remain for assigning to devices. Creating smaller subnets is impossible because at least one network address and one broadcast address are always required in a subnet."
    }
]
export default FAQandAnwser