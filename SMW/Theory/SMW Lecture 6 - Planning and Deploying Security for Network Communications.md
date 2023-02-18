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
		- Initial security negotiation
		- Based on the authentication methods defined in IPSec rule
	- **Phase 2**
		- Determining the secret keying material
		- To secure network communication
		- Related to the Filter Action setting of the associated IPSec rule

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
| Transport Mode                                                                                    | Tunnel Mode                                                                                                        |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Used to secure communications within a network and it can be server-to-server or server-to-client | Used to secure communications between networks                                                                     |
| IPSec provides end-to-end policy                                                                  | Primarily used for interoperability with gateways or end systems that do not support L2TP site-to-site connections |

- In the simplest case, IPSec protection caters to systems within a LAN
- By default, use transport mode
- However, when the connections involve WANs, tunnel mode is preferable

## IPSec Filters
- Specification in the IPSec rule that is used to match IP packets
- Filters are grouped together in a systemwide filter list
- In the IPSec rule properties setting, systemwide filter list will be available for the choice of the filter
- Packets which match a filter will be applied with the associated filter actions e.g. permit, block or negotiate security
- **Caveat**
	- System configured with IPSec may not apply the expected security scheme because the filter is set wrongly
	- When the network traffic does not match the IPSec, it will not be blocked but it will just pass through
- Filter list identifies traffic based on its source, destination and protocol
- <u>Examples with Windows 2003 and Windows 2008:</u>
	- All ICMP traffic
	- All IP traffic
- Filter action is set for each type of traffic as identified by a filter list
- <u>Examples with Windows 2003 and Windows 2008:</u>
	- Permit
	- Request Security
	- Require Security
- Administrator may construct or customise specific filter actions
- IPSec policies can be managed in two ways:
	- Creating a new policy and define the set of rules for the policy, adding filter lists and filter actions as required
	- First create the set of filter lists and filter actions and then create the policies and add rules that combine the filter lists with filter actions

## Authentication Methods for IPSec
- If the connection matches the filter IKE (Phase 1) will be invoked for intial authentication
- <u>Available Authentication Methods:</u>
	- Kerberos V5
	- Certificates (requires PKI)
	- Pre-shared Key
- Authentication process is done by using DH asymmetric key encryption for data exchange
- More than one method can be selected with designated priority level
- IKE - Phase 1 will sort out if two parties share one common authentication method

### Kerberos V5
- Default authentication method for Windows Server 2000 or later
- Based on mutual authentication
- Use when all clients can authenticate using Kerberos
- Method that requires the least administrative effort

### Certificates
- Method of granting access to users based on their unique identification
- Used in situations that include access to corporate resources, external business partner communications or computers that do not run Kerberos V5

### Pre-Shared Key
- Used when other methods are not available
- Shared secret key

## Configuring IPSec Policies Between Networks and Hosts
- Specifies how the computers will prove their identities to each other when trying to establish a SA

| Security Requirement                                                                                        | Authentication Method  |
| ----------------------------------------------------------------------------------------------------------- | ---------------------- |
| Communication within a Windows 2000 or Server 2003 or between trusted Windows 2000 or 2003 domains          | Kerberos V5            |
| Communication outside the domain or across the Internet where Kerberos V5 is not available but CA access is | Public Key Certificate |
| Communication with computers that neither support Kerberos V5 nor have access to a CA                       | Pre-shared key         | 

### Filter Action
- Will only be trigger when the incoming or outgoing connections match the filter
- Available types of actions
	- Permit
	- Block
	- Negotiate Security (will be carried out at Phase 2 of IKE)

### Encryption Levels
- Two categories of encryption:
	- Symmetric key encryption
	- Public key encryption
- Lifetime settings determine when a new key is generated

#### Hashing
> Used to support AH (Authentication Traffic)
- Secure Hash Algorithm (SHA)
	- uses 160-bit encryption key, very high security method
- Message Digest 5 (MD5)
	- uses 128-bit encryption key, lower performance than SHA

#### Encryption
> Encryption method is used to support ESP (Encapsulating Security Payload Traffic)
- Data Encryption Standard (DES)
	- uses 56-bit key but not recommended for high security
- Triple DES (3DES)
	- uses 168-bit key, provides medium and high security networks

### IPSec Protocols
| Requirement                                                                                  | Protocol   | Solution                                                                                                                                                          |
| -------------------------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Data and header need to be authenticated and protected from modification but remain readable | AH         | Use in situations where data is not confidential but must be authenticated or where network intrusion detection or firewall filtering requires traffic inspection |
| Only data needs to be protected so its unreadable but IP addressing can be left unprotected  | ESP        | Use when data must be kept confidential such as file sharing, database traffic or internal web applications that have not been adequately secured                 |
| Both the header and data need to be protected while data is encrypted                        | AH and ESP | Use for the highest security and if possible, use ESP alone instead                                                                                               |

**AH Transport Mode**
![](https://i.imgur.com/ICxKYpV.png)


**ESP Transport Mode**
![](https://i.imgur.com/78ZapBF.png)


- Tunnel mode uses double encapsulation
	- suitable for protecting traffic between network systems e.g. untrusted medium like the Internet
	- **AH Tunnel Mode:**
		- encapsulates IP packet by placing an AH header between internal IP header and external IP header
	- **ESP Tunnel Mode:**
		- IP packet is the first encapsulated with an ESP header, then the result is encapsulated with an additional IP header

<u>AH Tunnel Mode</u>
![](https://i.imgur.com/syCbZbu.png)

<u>ESP Tunnel Mode</u>
![](https://i.imgur.com/suPGkMv.png)

## Deploying IPSec Policies
- Can be deployed using the following:
	- <u>Local policy objects</u>
		- A way to enable IPSec for computers that are not members of a domain
	- <u>Group policy objects</u>
		- IPSec policy is propagated to any computer accounts that are affected by the GPO
	- <u>Command-line tools</u>
		- `netsh` IPSec command in Windows Server 2003/2008
- Starting from Windows Server 2016, IPSec configurations can be done via Windows Defender Firewall Advanced Security Settings (WFAS)

### Using Group Policy Objects
- <u>Factors to consider when selecting GPOs for IPSec policy assignments</u>
	- Assignment precedence for IPSec policies from lowest to highest is local, site, domain and OU
	- Persistent IPSec policy has the highest precedence of all although it is stored on the local computer
		- Persistent IPSec policy is effective even other policies cannot be applied
	- IPSec policies from different OUs are never merged
	- For domain-based IPSec policy, limit the number of rules to 10 or less
	- Create and apply an IPSec policy at the domain level to provide a baseline of IPSec protection
	- Use the Export and Import policies commands in the IP Security Policy Management console to back up and restore the IPSec policy objects
	- Be sure to adequately test the impact of the new IPSec policies before assigning them in the domain

### Understanding Default IPSec Policies
- **Client (Respond Only)**
	- Secure communication only if the other computer requests for it
- **Server (Request Security)**
	- Accepts initial incoming communication that is unsecured
	- Requests for communication to be secured
	- Carry on with unsecured connection if client does not support
- **Secure Server (Require Security)**
	- Accept initial inbound communication that is unsecured
	- Requires that all connections be secured

### Understanding IPSec Policy Precedence
- Possible to configure IPSec for multiple containers that will affect a computer
- Only one IPSec policy can be assigned to one computer at a time
- If there are multiple IPSec policies assigned at different levels, the last one takes effect
- Precedence sequence: local GPO, site, domain and OU
- Default order can be overridden using Enforced or Block Policy Inheritance
- <u>When troubleshooting IPSec policies and their precedence:</u>
	- Only a single IPSec policy can be assigned at a specific level in Active Directory
	- IPSec policy assigned to an OU takes precedence over a domain-level policy for members of that OU
	- IPSec policies from different organisational units are never merged
	- OU inherits policy of its parent OU unless the policy inheritance is explicitly blocked or separate policy is explicitly assigned to that OU
	- Before assigning an IPSec policy to a GPO, verify that the group policy settings that are required for IPSec policy
	- Use the Enforced and Block Policy Inheritance features carefully
- <u>Procedure for deleting policy objects:</u>
	- Unassign IPSec policy in the GPO
	- Wait 24 hours to ensure that change is propogated
	- Delete the GPO
- Persistent policy
	- Provides maximum protection against attacks during computer startup
	- Adds to or overrides local or Active Directory policy
	- Remains in effect regardless of whether other policies are applied
	- Provides backup security in case IPSec policy gets corrupted or if errors occur
	- Can be set using command line tools like `netsh` at the local station