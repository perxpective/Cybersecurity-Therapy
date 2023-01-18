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
	- IPSec s