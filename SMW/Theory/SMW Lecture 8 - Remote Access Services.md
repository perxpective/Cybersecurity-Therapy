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
	- IKEv2 supports mobility (MOBIKE) - much more resilient to changing netw