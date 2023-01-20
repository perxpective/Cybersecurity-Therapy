# SMW Tutorial 5

###### tags: #SMW #Tutorial 

## Table of Contents
```toc
```

## Self-Evaluation Check List
- **List the two WSUS synchronization methods**
	- Automatic synchronization: allows administrators to schedule a certain time or interval to perform update synchronizations
	- Manual synchronization: allows administrators to manually synchronize updates at any point of time
- **Briefly describe one advantage of defining computer groups in the WSUS management console**
	- Enables administrators to manage server computers and workstation computers separately
- **Would you briefly describe the relationship or difference between the following list of items?**
	- <u>IKE authentication and AH authentication</u>
		- IKE authentication is used to establish a secure connection between two devices, such as a VPN (Virtual Private Network) client and server. It is used to authenticate the identity of the devices and to negotiate the security parameters for the connection. 
		- AH authentication is a component of IPSec that provides integrity and authenticity verification for IP packets. It authenticates the origin of the packets, but does not encrypt the data.
	- <u>IPSec filter and IPSec rule</u>
		- An IPSec filter is a set of conditions that determine whether or not a packet should be secured using IPSec. A filter can be based on the source IP address, destination IP address, protocol, or other criteria. 
		- An IPSec rule is a set of instructions that specify how a packet that matches an IPSec filter should be handled. A rule can be used to encrypt the packet, authenticate the packet, or both.
	- <u>IPSec policies and group policies</u>
		- An IPSec policy is a set of rules and filters that determine how IPSec should be used to secure network traffic. A group policy is a set of instructions that control how Windows machines in an Active Directory domain behave. 
		- Group policies can be used to configure IPSec policies on Windows machines, so that they automatically use the desired level of security when communicating with other machines on the network.
- **Would you describe and explain one possible but not recommended usage of IPSec?**
- **Would you identify and explain a couple of scenarios that the IPSec implementation can be helpful in terms of tightening the network security?**
	- Virtual Private Networks (VPN) connections to secure connections from remote devices and a private network over the public internet
		- By encrypting all traffic between the remote device and the private network, IPSec can prevent eavesdropping and protect sensitive data from being intercepted
	- Secure communication between different networks e.g. corporate and partner's network to prevent unauthorized access and protect confidential data from being intercepted when sharing between company partners
	- Secure communication between IoT devices e.g. industrial control systems and medical devices
	- Secure communication between cloud and on-premises environments to prevent access to data stored in the cloud
- **Would you explain the following IPSec packet transformation?**
	- Following IPSec packet transformation done through Authentication Header (AH) using Transport Mode
	- In the original packet, it contains the original IP header, TCP/UDP and data
	- After going through AH via Transport Mode, an Authentication Header is added between the original IP header and TCP/UDP
	- This ensures that authentication of the current IPSec packet can read the data in plaintext

## Nano Test Questions and Answers