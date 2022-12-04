# SMW MST Summary

###### tags: #SMW 

## Table of Contents
```toc
```

## Chapter 1 - Introduction to Windows Server 2016
### Secure Computing
- **Name the type of threats to Windows computers**
	- Viruses
	- Worms
	- Programs that steal confidential information
	- Hacking with system vulnerabilities
- **What are the sources of computer security problems?**
	- Bad software design
	- Bad implementation
- **What are the requirements for safe computing?**
	- Changing the behaviour of management programmers and users
	- Prioritization of secure computing
	- Writing secure operating systems and applications
	- Training users to always keep security in mind

### Microsoft's Commitment to Security
- **What are the areas of security Microsoft has invested in?**
	- Isolation and Resiliency
	- Software Updates
	- Quality
	- Access Control and Authentication

#### Isolation and Resiliency
- **Explanation:**
	- Splitting a computer system into smaller pieces and ensure that each piece is separated from the other ones
	- This is so that if the system gets compromised, it cannot affect other entities in the system
- **List action items related to commitment of Microsoft towards isolation and resiliency:**
	- Firewalls 
	- Object Level Access Control
	- Exchange Edge Services
	- Microsoft Defender Antivirus
	- Smart Screening Technologies
	- Microsoft Defender SmartScreen
	- Client Inspection Technologies
		- MBSA
		- Microsoft Application Inspector
		- Windows Update Agent

#### Software Updates
- **Explanation:**
	- Primary way of protecting against security vulnerabilities
- **How often does Microsoft release software updates?**
	- Monthly
- **Examples of products related to software updates:**
	- System Center Configuration Manager (SCCM)
	- Windows Update Troubleshooter
	- Windows Software Update Services (WSUS)

#### Quality
- **What are some examples related to Microsoft's commitment towards quality?:**
	- The use of quality <u>standards</u> and <u>processes</u>
	- The use of <u>best practices</u> in all phases of <u>software development</u>
	- The development of new internal tools that automatically checks code for common errors
	- Thorough testing of software before release

#### Access Control and Authentication
- **What are some areas that Microsoft made changes to in order to improve access control and authentication?**
	- Passwords
	- Smart cards
	- Public Key Infrastructure (PKI)
	- Internet Protocol Security (IPSec)
	- Active Directory Rights Management Services (ADRMS)

### Trustworthy Computing
- **Explain the Microsoft Trustworthy Computing Memo**
	- The development **emphasis** on <u>security</u> over <u>features</u>
- **List the requirements of trustworthy computing**
	- Computers need to be reliable
	- Software that operates these machines must be equally reliable
	- Service components need to be dependable
- **List the means of achieving trustworthy computing**
	- **Security**
		- by design, default and deployment
	- **Privacy**
		- via fair information principles
	- Availability, manageability and accuracy
	- Usability, responsiveness and transparency

### Trusted Cloud
- **List three fundamental principles in Microsoft's Trusted Cloud initiative **
	- Security
	- Privacy
	- Compliance

### Secure Code
- **What are some steps taken by Microsoft to implement and maintain security?**
	- Provide training to Windows engineers on
		- writing secure code
		- specialised testing techniques
		- threat modelling
	- Write documentation with security in mind

### Windows Server 2016 Editions
- **What are the different Windows Server 2016 platforms developed by Microsoft?**
	- Essentials Edition
	- Standard Edition
	- Datacentre Edition
- **What are the additional platforms of the Windows Server 2016?**
	- Multipoint Premium Server
	- Storage Server 2016
	- Hyper-V Server 2016
- **Name advantages of using Windows Server 2016 together with Windows Versions 7-10**
	- Enhanced capabilities to recover from many types of <u>network communication problems</u>
	- Computer code for more efficient network communications
	- More <u>network diagnostic capabilities</u>
	- Computer code for better use of <u>network communication protocols</u>
	- Continuous upgrades for Windows PowerShell commands and scripts  in both Windows Server 2016 and Windows 7-10

### Windows Server 2016 Features
- **List some features of Windows Server 2016**
	- Server Manager
	- Security
	- Clustering
	- Enhanced Web Services
	- Windows Server Core and Nano Server
	- Windows PowerShell
	- Virtualization
	- Reliability
	- Multitasking and Multithreading
	- Physical and Logical Processors
	- Containers
- **List the functions of the Server Manager**

## Tables
### General Terminology
| Term                          | Definition                                                                                                                                                                                                 |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Client                        | A computer that accesses resources on another computer via a network                                                                                                                                       |
| Workstation                   | A computer that has its own CPU and can be used as a standalone or network computer                                                                                                                        |
| Total Cost of Ownership (TCO) | The full cost of owning a network including hardware, software, maintenance and user support costs                                                                                                         |
| Domain                        | A group of network objects such as computers, servers and user accounts that provides for easier management<br> Computers and users in a domain can be managed to determine what resources they can access |
| Active Directory              | Database of computer, users, groups of users, shared printers, shared folders and other network resources                                                                                                                                                                                                           |
