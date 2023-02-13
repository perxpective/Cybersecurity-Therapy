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

