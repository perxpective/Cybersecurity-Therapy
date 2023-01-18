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
		- Related to the Filter Action setting of the associate UP