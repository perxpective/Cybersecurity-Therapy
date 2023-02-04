# SMW Lecture 6 - Planning and Deploying for Network Communications

###### tags: #SMW 

## Table of Contents
```toc
```

## IPSec Concepts
> IPSec is a set of protocols used to ensure private, secure communications over IP networks using cryptographic security services

Based on the following:
- Protecting the contents of IP packets
- Providing packet filtering
- Enforcing trusted communication
- Securing communication with encryption of the information travelling the network
- Mostly used as an option for IPv4 implementation

## IP Security Issues
- Original TCP/IP network protocol was not designed with security in mind
	- Source spoofing
	- Replay packets
	- No data integrity or confidentiality
- Subject to DOS attacks, replay attacks, spying etc.

## IPSec Control Elements
- IPSec utilizes three main security control elements:
	- **Internet Key Exchange (IKE)**
		- protocol for exchanging encryption keys
	- **Authentication Header (AH)**
		- provides an authenticity guarantee for packets
	- **Encapsulating Security Payload (ESP)**
		- provides confidentiality through encryption
- IPSec also utilizes IP Compression (IPComp) which is used to compress raw IP data

### IKE Module
- One of the key components of IPSec
- **Responsibilities:**
	- **Phase 1**
		- initial security negotiation
		- based on the authentication methods defined in IPSec rule
	- **Phase 2**
		- Determining the secret keying material
		- To secure network communication
		- Related to the Filter Action setting of the associate IPSec rule

## IP Security Implementation
- When IPSec communication begins between two computers:
	- Computers first negotiate using the IKE module and authenticate between the receiver and sender
	- Extra hashing scheme will help ensure data integrity at packet header
	- Data is encrypted with integrity check at the NIC of sending the computer as it is formatted into an IP packet
- IPSec can provide security for all TCP/IP-based applications and communication protocols
- IPSec Security Policy
	- Established through the Group Policy in the Active Directory
	- Can also be configured through the IP Security Policies MMC snap-in
- <u>Windows Firewall Advanced Security Rule</u>
	- Provides more IKE authentication options and AES encryption support

## Weighing IPSec Trade-Offs
- Deploying IPSec can affect network performance and compatibility with other services and applications
- Do not deploy IPSec if security it provides is not required
- **Impacts of IPSec**
	- Time needed to establish IPSec connection
	- Time needed to filter and encrypt packets
	- Increased packet size
	- Network inspection technologies used in routers, firewalls, intrusion detection systems (IDS) may not work on IPSec packets
	- Application compatibility with other platforms
	- Effect on Active Directory and domain controller connections

## Planning an IPSec Deployment
- The configuration of IPSec is based on:
	- The way IPSec is used
	- Types of client operating system in network
	- Types of network devices in network
- **IPSec is not recommended for the following:**
	- Securing communication between domain members and domain controllers
		- Reduces network performance
		- Configuration of IPSec policy is complicated
	- Securing all traffic in a network
		- Reduces network performance
		- Multicast and broadcast traffic is unsupported
		- Network tools that need to inspect packet headers may not work

**IPSec Security Solutions**

| Concern                                                                | Solution                                                                                                                                                                |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Attacks using specific protocols or ports or Denial of Service attacks | Use IPSec traffic blocking, packet filtering or policy filter lists allowing only traffic from trusted sources over specified protocols to specific addresses and ports |
| Eavesdropping or sniffing                                              | Use the Encapsulating Security Payload (ESP) protocol to encrypt data with 3DES or DES                                                                                  |
| Identity spoofing                                                      | Use Kerberos, public key certificates or pre-shared key authentication to verify the identity of the computer                                                           |
| Modification of data                                                   | Use cryptographic checksum that incorporates secret key to provide data integrity                                                                                       |

- **Proper Usage of IPSec**
	- Packet filtering e.g. using IPSec with routing and Remote Access service to permit or block inbound or outbound traffic
	- Securing host-to-host traffic on specific paths
	- Securing traffic to servers
	- Combining L2TP and IPSec for securing VPN scenarios
	- Incorporating site-to-site or gateway-to-gateway tunnelling

> - In a simple networks structure, a single IPSec policy can be designed that may contain multiple rules
> - In a large environment, many different IPSec policies may be designed

- **Factors that increase the number of policies required:**
	- Computer Roles
	- Sensitivity of data travelling over the network
	- Computer operating systems
	- Domain relationships and memberships
	- Number of applications that require IPSec

### Five Elements that Make Up a Rule
- Each IPSec Policy may consist of multiple rules
- <u>Each rule contains 5 configurable elements:</u>
	- Connection Type (LAN, Remote, ALL)
	- Mode (Transport or Tunnel)
	- Filter List
	- Host to Host Authentication Method (used by IKE Phase 1)
	- Filter Action (choice of AH/ESP)
		- Negotiated in IKE Phase 2 and carried out the agreed scheme in the actual traffic

### Deciding which IPSec Mode to Use
| Transport Mode                                                                                    | Tunnel Mode                                    |
| ------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| Used to secure communications within a network and it can be server-to-server or server-to-client | Used to secure communications between networks |
|                                                                                                   |                                                |
