# SMW Lecture 8 - Remote Access Services

###### tags: #SMW 

## Table of Contents
```toc
```

## Introduction to Remote Access
- **Remote Access Services (RAS) Role**
	- Enables remote access through three means: virtual private networking, DirectAccess and Web Application Proxy
- **Virtual Private Network (VPN)**
	- Tunnel through a larger network that is restricted to designated member clients only

## Implementing a Virtual Private Network (VPN)
- VPNs can use an Internet connection or internal network connections as a transport medium to establish a connection with the VPN server
- VPN uses LAN protocols and tunnelling protocols
	- To encapsulate data as it is sent across a public network such as the Internet
- <u>Benefit of using a VPN</u>
	- Users can connect to a local ISP and connect through the ISP to the local network
- VPN is used to ensure that any data sent across a public network e.g. the Internet is secure
- VPN creates an encrypted tunnel between the client and the RAS server

<u>Typical VPN Use Cases</u>
 - Ensure secured communications between two sites
- Ensure secured communications between a site with remote clients
- Allow remote client to access the resources offered by the site
- Provide secure Internet connection to a remote client
	- Remote client can establish VPN connection to a site and use gateway of the site to access to Internet
	- Network security between remote client and Internet is taken care of the security measure implemented in the site

![](https://i.imgur.com/X0JljrN.png)

<u>Effect after the VPN connection has been established:</u>
1. Remote client will be assigned with a set of local IP settings e.g. IP address, DNS and gateway
2. The remote client can access all the services offered by the site as if it is connected to the LAN directly
3. By default, all outgoing traffic from the remote client will first go to the VPN server via the Internet]

- VPN server uses two or more NICs for communication
	- One NIC is used to connect to the private network inside the organization that uses private IP addressing
	- The other NIC connects to the external public network
- To create this tunnel, client must first connect to the Internet by establishing a connection using the remote access protocol
- Once connected to the Internet, the client establishes a second connection with the VPN server
- Client and VPN server agree on how the data will be encapsulated and encrypted across the vritual tunnel
- <u>Caveats</u>
	- Do not use any of the domain controllers to be the VPN server
	- VPN server is public facing and should be situated in the DMZ segment

> For a typical configuration, use a Windows Server with two NICs to implement a VPN server (multi-homed dual NIC deployment)

## Using Remote Access Protocols
- Carries the network packets over a WAN link
	- Encapsulates a packet such as an IP datagram so that it can be transmitted from a point at one end of a WAN to another point
- IP is the most commonly used transport protocol
- Several remote access protocols are used by Windows Server 2016 and its remote clients
- An early basic remote access protocol in use is Point-to-Point Protocol (PPP)

> Remote access protocol needs to cater for LAN to WAN protocol conversions and WAN and LAN protocol conversions
> 
> This is to allow two remote parties to communicate with each other seamlessly as if both of them are running in the same Local Area Network

### Point-to-Point Protocol (PPP)
- Used in legacy remote communications involving modems
- Enables the authentication of connections and encryptions for the network communications
- Not considered to be as secure as other modern options
- Can automatically negotiate communications with several network communications layer at once
- When implementing a Windows Server 2016 VPN server, choices of three or four remote access tunnelling protocols:
	- Point-to-Point Tunnelling Protocol
	- Layer Two Tunnelling Protocol
	- Secure Socket Tunnelling Protocol
	- IKE v2 Protocol (IPSec, Tunnel Mode, IKE Version 2)

### Point-to-Point Tunnelling Protocol (PPTP)
- Offers PPP-based authentication techniques
- Encrypts data carried by PPTP through using Microsoft Point-to-Point Encryption (MPPE)

### Layer Two Tunnelling Protocol (L2TP)
- Works similarly to PPTP
- Uses Layer Two Forwarding that enables forwarding on the basis of MAC addressing
- Uses IPSec for additional authentication and for data encryption

> **Notes:** 
> - PPTP is the easiest protocol setup and most network devices support it.
> - Not a good solution for setting up VPN channel that requires long or near permanent session

### Secure Socket Tunnelling Protocol (SSTP)
- Employ PPP authentication techniques
- Encapsulates the data packet in the HTTP used in web communications
- Additionally uses a SSL channel for secure communications
	- SSL is a data encryption technique employed between a server and a client
	- SSL has now evolved into Transport Layer Security (TLS)
- Viewed as more secure than PPTP or L2TP

> SSTP only requires the Port 443 to operate, hence it is the most firewall-friendly VPN protocol

### Internet Key Exchange Version 2 Protocol (IKE v2)
- Employs IPSec in tunnel mode protocol over UDP Port 500 and 4500
- Encapsulates datagrams by using IPSec ESP or AH headers for transmission over the network
- <u>Encryption:</u>
	- AES-256, AES-192, AES-128 and 3DES encryption algorithm
	- 3DES is not recommended
- <u>Pros</u>
	- Believed to be faster and extremely secured protocol
	- IKEv2 supports mobility (MOBIKE) - much more resilient to changing network connectivity
	- Switching between access points or wired to wireless connections
- <u>Cons</u>
	- Proprietary
	- But there are open-source implementation
	- Support by some network devices vendors

> **Note:** IKE Version 2 is only build-in VPN protocol that support mobility connections

### Table Summary
| VPN Protocol | Encryption                                                       | Ports                       | Compatible with                  | Notes                                                                                                                                                                       |
| ------------ | ---------------------------------------------------------------- | --------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PPTP         | MPPE with RC4 128-bit key                                        | 1723 TCP                    | Windows, Mac OS, iPhone, Android | PPTP widely used in VPN<br>Easy to setup<br>Less secure<br>Note considered for site-to-site VPN setup<br>Not recommended to be used for VPN session longer than a few hours |
| L2TP         | IPSec with 3DES 168-bit key                                      | 500 UDP, 1701 UDP, 5500 UDP | Windows, Mac OS, Android         | Considered to be more secure than PPTP                                                                                                                                      |
| SSTP         | SSL with AES 2048 bit key certificate 256 bit key for encryption | 443 TCP                     | Windows                          | Only use 443<br>Usually not blocked by firewalls, considered a very secured protocol                                                                                        |
| IKEv2        | IPSec with AES 256 bit key                                       | 500 UDP, 4500 UDP           | Windows, Blackberry              | Considered to be a fast and extremely secure protocol, supports mobility (MOBIKE)                                                                                           |

## Configuring a VPN Server
<u>General Steps</u>
- Install Network Policy and Access Services role
- Configure a Windows Server 2016 server as a network's VPN server, including configuring the right protocols to provide VPN access to clients
- Configure a VPN server as a DHCP Relay Agent for TCP/IP communications
- Configure the VPN server properties
- Configure a remote access policy for security

## Configuring the Server's Firewall
- VPN server must be able to send communications through the network
- Early configuration step is to make sure its communications can go through a firewall set up at the server
- If Windows Firewall on server is used:
	- TCP and UDP port used by the VPN are unblocked by default when configuring a VPN server
	- It is more important to make certain they are unblocked

## Configuring a DHCP Relay Agent
- Broadcasts IP configuration information between the DHCP server on a network and the client acquiring an address
- Configure the VPN server as a DHCP Relay Agent using the Routing and Remote Access tool
- **Basic Terms:**
	- Client contacts the VPN server to make a connection
	- VPN server as a DHCP relay agent contacts the DHCP server for an UP address for the client
	- DHCP server notifies VPN server of the IP address
	- VPN server relays this IP address assignment to the client

## Configuring VPN Security
> Allows or denies remote access requests. By default, it is set to deny all.

- Set up VPN security through remote access policy
	- Greatly reduces administrative overhead and offers more flexibility and control for authorising connection attempts
- <u>Elements of Remote Access Policy</u>
	- Access permission
	- Conditions
	- Constraints
	- Settings
- First step in evaluating access is to determine if access permission is enabled at the VPN server
	- Default permission for this policy is set to deny access
	- Change the default permission to grant access in the default remote access policy
- The conditions of a remote access policy are a set of attributes compared with the attributes of the connection attempt
- If connection attempt matches the conditions of the policy, constraints are evaluated
- Settings in the remote access policy are then examined
	- Settings include elements e.g. IP filters, encryption, IP settings and others

### Establishing a Remote Access Policy
- Use Routing and Remote Access tool to create and configure a remote access policy
- To create a new remote access policy, click to activate and right-click Remote Access Logging and Policies folder in the tree under the VPN server
- Click launch NPS to launch the Network Policy Server tool

## Monitoring VPN Users
- Periodically monitor the users who are connected
- Use the Routing and Remote Access tool to monitor connected users
- <u>With the tool open:</u>
	- Expand the elements under the server name in the left pant
	- Click the Remote Access clients on the left pane
	- The right pane shows the users who are connected
	- To disconnect a user, right-click the user and click Disconnect

## Troubleshooting VPN Installations
### Hardware Solutions
- Use Device Manager to make sure network adapters and WAN adapters are working properly
- Also use Device Manager to make sure that adapter has no resource conflicts
- For an external DSL adapter or a combined DSL adapter and router
	- Make sure the device is properly configured and connected
	- Check its monitor lights for problems
- Call ISP to determine if problems are present on the ISP WAN

### Software Solutions
- Use Services tools or Server Manager to make sure that the following services are started
- Ensure that the Windows Firewall is set up to allow remote access
- Make sure that the VPN server is enabled
- Check the remote access policy to be sure that access permission is granted
- Be certain that the VPN server is started
- In the Routing and Remote Access tool, check the network interface
- Make sure that IP parameters are correctly configured to provide an address pool for either a VPN server
- Open the Remote Access Management Console and click the Dashboard in the left pane
- If only certain clients but not all are having connection problems, try these solutions:
	- Make sure that clients are using the same communications protocol as the server
	- If you manage access to the VPN server by using security groups, make sure that each user account or computer account that needs access is in the appropriate group

## Connecting Through Remote Desktop Services
- **Remote Desktop Services Server (RDS)**
	- Enables clients to run session-based desktops, virtual desktops and software applications on Windows Server 2016 instead of at the client
- <u>Using session-based desktops</u>
	- The client accesses an RDS server to run applications on that server during a connection session
- <u>Virtual desktops</u>
	- Used in association with accessing virtual machines on a virtual server through Hyper-V
	- Multiple virtual desktops can be in a pool of desktops for different purposes

> Remote Desktop Connection offers two additional remote access not supported by VPN
> - Thin client connections
> - Enables server administrators to know the details of the remote client activities

- Windows Server 2016 RDDS are used for three broad services:
	- Run applications on a server instead of the client
	- Support thin clients
	- Centralize program access
- **Thin Clients**
	- Downsized PCs that have minimal Windows-based OSs that access a Windows Server 2016 server so that most CPU-intensive operations are performed on the server
	- Generally use to save money and reduce training and support requirements'
	- Used for portable field or handheld remote devices
- <u>Centralize control of how programs are used</u>
	- Highly classified or sensitive documents can be stored and modified only on the server
- 