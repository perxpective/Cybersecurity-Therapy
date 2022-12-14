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

##### Security Association (SA)
- Relationship between two or more entities
- Describe how they will use encryption, encapsulation and/or authentication and the algorithms used
- Used by IPSec to track all particulars of a communication sessions
- **Unidirectional** - Two SAs needed for two computers to communicate with each other

##### Components
- **Core Components**
	- Authentication Header (AH)
	- Encapsulating Security Payload (ESP)
- **Other Components**
	- Internet Security Association Key Management Protocol (ISAKMP) to establish SA
	- Internet Key Exchange (IKE) to exchange keys
	- Oakley Protocol
	- IPSec Driver (software handling the encryption and authentication of packets)

##### Authentication Header (AH)
- Provides authentication of TCP/IP packets
- Ensures data integrity
- Packets are signed with a digital signature
- Adds a header calculated by values in the packet
- Creates a message digest of the packet
- Provides authentication and integrity but not privacy
- **AH in Tunnel Mode**
	- Authenticates the entire original header and data
	- Places a new header at the front of the original packet
- **AH in Transport Mode**
	- Authenticates the original header and data except for fields that can change during transit

![500](https://i.imgur.com/ZFsRi40.png)

##### Encapsulating Security Payload (ESP)
- Provides confidentiality for messages
- Encrypts different parts of a TCP/IP packet
- Performs authentication
- **ESP in Tunnel Mode**
	- Encrypts both the header and the data part of each packet
- **ESP in Transport Mode**
	- Encrypts only data portion of the packet

![500](https://i.imgur.com/WdYWu9Q.png)

### Encryption
- **Components:**
	- Encryption Key
	- Encryption Algorithms
- **Methods to set up key between endpoints:**
	- Digital certificates
	- Internet Key Exchange (IKE)
		- Uses tunnel method to encrypt keys sent across the Internet

![500](https://i.imgur.com/6bfHJR6.png)

#### Secure Sockets Layer (SSL)
- Enables web servers and browsers to exchange encrypted information
- **Characteristics:**
	- Use public and private key encryption
	- Use sockets as a method of communication
	- Operates at the higher layers (5-6) of the OSI model
- <u>Widely used on the web</u>
	- Only supports data exchanged by web-enabled applications
	- Unlikely to replace IPSec
- Client (Web Browser) and Server (Web Server) need to establish a SSL handshake
- Client sends its preferences for encryption method, SSL version number and a randomly generated number
- Server responses with SSL version number, its own cipher preferences, another random number and its digital certificate
- Client verifies date and other information on the server's digital certificate
- Client generates and send a "pre-master" code encrypted with the server's public key
- Server uses its private key to decode pre-master code
- Client and server generates session keys from pre-master code that will be used to encrypted data sent across the Internet

#### Transport Layer Security (TLS)
- Regarded by many to be the successor of SSL
- TLS 1.3 designed to offer:
	- Better security
	- Improved speed

### Authentication
- Identifying a user or computer as authorized to access and use network resources
- **Types of authentication methods used in VPNs:**
	- IPSec
	- Digital certificates

#### Kerberos
- Authentication system developed by MIT
- Authenticates the identity of network users
	- Authentication by assertion
	- Computer that connects to a server and requests services acts on behalf of an approved user

![500](https://i.imgur.com/fhRIRbk.png)

| Advantages                                                             | Disadvantages                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Passwords are not sent across the network (they cannot be intercepted) | Authentication Server (Key Distribution Centre) is a single point of failure |
| Has a lower "network overhead" than a Public Key Infrastructure (PKI)  |                                                                              |
| Handy for Single Sign-On (SSO)                                                                       |                                                                              |

## Advantages and Disadvantages of VPNs

| Advantages                                                              | Disadvantages                                                                    |
| ----------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Far less expensive than leased lines                                    | Can be complex to configure                                                      |
| Many elements working together provide strong security                  | Can result in slower data transfer rates than a leased line                      |
| Can result in less overall complexity in an organization's network      | Depends on the unpredictable Internet (If the Internet goes down, VPN goes down) |
| Can make use of a company's existing broadband connection               | Requires administrator to install VPN client software on remote computers        |
| Standards and protocols used in VPNs are well-developed and widely used | VPN hardware and software from different vendors might be incompatible because they are different protocols                                                                                 |
