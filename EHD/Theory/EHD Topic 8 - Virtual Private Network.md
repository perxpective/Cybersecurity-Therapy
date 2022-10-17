# EHD Topic 8 - Virtual Private Network

###### tags: #EHD #Theory 

## Table of Contents
```toc
```

## Virtual Private Networks
### What is a VPN?
> A Virtual Private Network enables computers to:
> - Communicate securely over insecure channels
> - Exchange private encrypted messages that others cannot decipher

- **VPNs** use the Internet to establish a secure connection (tunnel)
	- Extends an organisation's network
		- Computers can be part of the network even though they are located physically in other places
	- **Endpoints:**
		- Specified computers, users or network gateways

![500](https://i.imgur.com/qsmervB.png)

### Why Establish a VPN?
- Business incentives for VPN adoption
- Cost-effective
- Provide secure connection for remote users (e.g. business partners, travelling employees etc.)
- Good solution for organisations that need to keep costs down while maintaining security

### VPN Components

| Components          | Description                                   |
| ------------------- | --------------------------------------------- |
| VPN Server or Host  | Configured to accept connections from clients |
| VPN Client or Guest | Endpoints connecting to a VPN                 |
| Tunnel              | Connection through which data is sent         |
| VPN Protocol        | Set of standardized communication settings<br>Used to encrypt data sent along the VPN                                              |

### Types of VPN
- **Site-to-site VPN**
	- Link two or more network
	- Gateway-to-gateway VPN
- **Client-to-site VPN**
	- Link remote users to network
	- Remote access VPN

### Hardware VPNs
- Connects one gateway to another
- Hardware VPNs can be routers at each network gateway that encrypt and decrypt packets
- Also known as **VPN appliance**
	- Designed to server as VPN endpoint
	- Join multiple LANs
- **Benefits**
	- Scalable
		- 