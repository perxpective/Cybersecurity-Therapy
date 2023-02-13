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

<u>Effect after the VPN connection has esta</u>
1. Remote clieent 