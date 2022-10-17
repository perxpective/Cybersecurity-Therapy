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

| Benefit  | Explanation                                                   |
| -------- | ------------------------------------------------------------- |
| Scalable | Can handle more network traffic compared to software products |
| Security | Not dependent on a computer's operating system                                                              |

![500](https://i.imgur.com/4y8ib1B.png)

### Software VPNs
- Integrated with firewalls
- Appropriate when participating networks use different routers and firewalls
- **Benefits**
	- More cost-effective
	- Offers maximum flexibility

### VPN Combinations
- Combining VPN hardware with software adds layers of network security
- One useful combination is a VPN bundled with a firewall
- VPNs do not eliminate the need for firewalls
- Provide flexibility and versatility
- <u>Points to consider when selecting VPN hardware and software:</u>
	- Compatibility
	- Scalability
	- Security
	- Cost
	- Vendor Support

## VPN Core Activities
### Encapsulation
- Encloses a packet within another with a different IP source and destination
- Protects integrity of data

![](https://i.imgur.com/hNsac4y.png)

#### Tunnelling Protocols
- VPNs link networks and gateways that might have different operating systems
- Tunnelling protocols must be present so computers can communicate
- **Examples:**
	- IPSec with IKE - Popular protocol suite used in VPNs
	- SSL - Leverage web-based applications 

#### IPSec/IKE
> **IPSec** - Internet Protocol Security
- Set of standard procedures
- Developed by the Internet Engineering Task Force (IETF)
- Enables secure communications on the Internet
- **Characteristics**
	- Works at Layer 3
	- Can encrypt entire TCP/IP packets
	- Originally developed for use with IPv6
	- Provides authentication of source and destination computers
- Widely supported
- When computers establish IPSec connections, they set up **Security Associations**
- **Security Association (SA)**
	- Relationship between two or more entities
	- Describe how they will use encryption, encapsulation and/or authentication and the algorithms used
	- Used by IPSec to track all particulars of a communication sessions
	- **Unidirectional** - Two SAs needed for two computers to communicate with each other
- **Core Components**
	- Authentication Header (AH)
	- Encapsulating Security Payload (ESP)
- **Other Components**
	- Internet Security Association Key Management Protocol
	- 

### Encryption

### Authentication