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
- **What are the drawbacks to using Essential Edition?**
	- It cannot join a domain other than migrating files and data from one server to another
	- It provides most but not all server roles
	- It does not roles for hosting virtual machines
	- It cannot provide cloud services
- **List the features of the Standard Edition**
	- File and print services
	- Secure internet connectivity
	- Centralized management of users
	- Centralized management of applications and network resources
- **What improvements have been made to Hyper-V?**
	- Faster cloning
	- Migration of individual VMs
	- VM information is stored in a new file format to protect it from being directly edited
- **In what environments is the Datacentre Edition designed for?**
	- <u>Environments with:</u>
		- Mission-critical applications
		- Very large databases
		- Very large virtualisation requirements
		- Cloud computing needs
		- Information access requiring high availability
- **How many computers does the Datacentre Edition offer support for clustering?**
	- 64 computers
- **In what areas are the Standard Edition and Datacentre Edition different in?**
	- Virtualization
	- Cloud computing
	- Database handling

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

#### Server Manager
- **List the functions of the Server Manager**
	- Enables server administrators to manage critical configuration features from inside one tool
	- View computer configuration information
	- Change server roles and system properties
	- Configure networking and remote desktop
	- Add or remove features
	- Run diagnostics
	- Manage storage and backups
	- Change server roles and system properties
- **List the advantages of the features of the Server Manager**
	- Multiple servers are easier to manage from one place
	- Dashboard offers more quick-start guidance for setting up one or more servers
	- Local server option makes all of the local server properties available to manage
	- Greater ability to add and manage remote server

#### Security
- **List default security features implemented in a Windows Server 2016**
	- File and folder permissions
	- Security policies
	- Data encryption
	- Event auditing
	- Authentication methods
	- Server management and monitoring tools

#### Enhanced Web Services
- **What is the Microsoft Internet Information Services (IIS)?**
	- Transforms Windows Server 2016 into a versatile web server
- **What is the IIS designed for?**
	- Has over 40 modules to enable IIS to have a lower attack surface
	- Provide easier applications of IIS patches
	- Makes it easier for network programmers to write network applications and configure applications for the web

### Windows Server Core
- **Objectives of Windows Server Core**
	- To function in a similar fashion to a traditional UNIX and Linux server

### Windows Nano Server
- **Functions of Windows Nano Server**
	- Serves as a platform to run DNS, DHCP, application servers, web servers and databases or file servers

#### Windows PowerShell
- **Explanation:**
	- Command-line interface that offers a shell for executing commands and scripts
- **What tasks can PowerShell be used to perform?**
	- Work with files and folders
	- Manage disk storage
	- Manage network tasks
	- Set up local and networking printing options
	- Install, list and remove software applications
	- View local computer information
	- Manage services and processes
	- Lock a computer or log off
	- Manage IIS web services

### Planning a Windows Server 2016 Networking Model
- **What is the difference between peer-to-peer networking and server-based networking?**

| Peer-to-Peer Networking                                                                                   | Server-Based Networking                                       |
| --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Focuses on spreading the network resource administration among server and non-server members of a network | Centralizes the network administration on one or more servers |
| Effective for small networks                                                                              | Effective for larger networks                                 |

- **What are the disadvantages of using peer-to-peer networking?**
	- Management of network resources are decentralized
	- Administration becomes more difficult as network grows larger in size
	- Lack of security resources
- **What are the advantages of using server-based networking over peer-to-peer networking?**
	- It is able to handle hundreds of users at once 

## Table Summaries 
### General Terminology
| Term                          | Definition                                                                                                                                                                                                 |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Client                        | A computer that accesses resources on another computer via a network                                                                                                                                       |
| Workstation                   | A computer that has its own CPU and can be used as a standalone or network computer                                                                                                                        |
| Total Cost of Ownership (TCO) | The full cost of owning a network including hardware, software, maintenance and user support costs                                                                                                         |
| Domain                        | A group of network objects such as computers, servers and user accounts that provides for easier management<br> Computers and users in a domain can be managed to determine what resources they can access |
| Active Directory              | Database of computer, users, groups of users, shared printers, shared folders and other network resources                                                                                                                                                                                                           |

**Windows Server 2016 Essentials Edition**

| Specifications                                                           | Value        |
| ------------------------------------------------------------------------ | ------------ |
| Number of users                                                          | 25           |
| Connections for file sharing through Server Message Block (SMB) services | 16.8 million |
| Number of central processor sockets                                      | 2            |
| Number of Remote Desktop Connections                                     | 50           |
| Number of Routing and Remote Access Connections                          | 50             |