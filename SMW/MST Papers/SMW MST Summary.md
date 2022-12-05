# SMW MST Summary

###### tags: #SMW 

## Table of Contents
```toc
```

---
## Lecture 1 - Introduction to Windows Server 2016
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
	- Users are only required to log on once to gain access to network resources
	- Stronger security
	- All members can share computer files in the network
	- Printers and other resources can be shared
	- All members can email other office members through an email server
	- Software applications can be stored and shared in a central location
	- Important databases can be managed and secured from one computer
	- All computers can be backed up more easily
	- Server administrators save time when installing software upgrades

### Windows Server 2016 Network Protocols
#### Transmission Control Protocol (TCP)
- **Definition of TCP/IP**
	- Stands for the Transmission Control Protocol/Internet Protocol
	- Suite of protocols that support communication across LANs and the Internet
- **Explain how is TCP/IP reliable**
	- It controls data flow to ensure end-to-end delivery of data
	- Windows is constantly adjusted to account for existing network traffic
	- It is a connection-oriented communication that ensures that packets are delivered in the right sequence and their contents are accurate

#### Address Resolution Protocol
- **Explain what is the Address Resolution Protocol (ARP)**
	- It is a protocol that acquires the physical addresses of a computer's network interface card (NIC)
- **What command is used to show the contents of ARP cache?**
	- `arp -a`

#### Automated Address Configuration
##### Automatic Private IP Addressing (APIPA)
- **Explanation:**
	- Configuration used to automatically configure TCP/IP settings for a computer without a DHCP server
- **Who is APIPA suitable for?**
	- Small organisations with only one network segment and do not need access to another network or Internet

##### Dynamic Addressing Through a DHCP Server
- **Where is DHCP service commonly used in?**
	- Medium-sized and large networks
- **What other settings can a DHCP server assign?**
	- Subnet mask
	- Default gateway
	- DNS server
	- Other IP settings
- **Reason for using a DHCP server**
	- To save large amounts of administrative effort  

---
## Lecture 2 - Windows Configuration and Active Directory Basics

### Best Practices Analyzer (BPA)
- **Objectives of using BPA**
	- Ensure that the best practices for the establishment of the roles are followed
	- Determine if one or more roles are installed and configured to follow guidelines recommended by Microsoft
- **Name three levels of severity of problems found by the BPA**
	- Information
	- Warning
	- Error
- **What are the categories/guidelines for the BPA**
	- Configuration
	- Security
	- Pre-deployment
	- Post-deployment
	- Performance
	- BPA Pre-requisites
- **Describe the steps taken to use the BPA**
	- Login as a Domain Administrator (account that is authorized to access the domain controller)
	- Open the Server Manager
	- Click the local server on the left pane
	- On the right pane, scroll to the BPA
	- Click the down arrow for Tasks
	- Click Start BPA Scan and wait for the scan to be completed
	- Read the results of the scan outputted

### System File Checker
- **Command for the System File Checker** - `sfc`
- **What are the functions of the System File Checker?**
	- It scans system files for integrity
- **What are the best use cases for the system file checker?**
	- Checking a new system based on new installation media or baseline
	- Verify integrity of possible compromised system
	- Recover a malfunctioning system due to corrupted system files

### Verifying System and Critical Files
- **Functions of `sigverif`:**
	- It verifies system and critical files to determine if they have a signature
	- Does not overwrite inappropriate files
- **Where are results of the scan written to?**
	- They are written to a log file called `sigverif.txt`
- **What happens if the tool finds a file without a signature that needs to be replaced?**
	- The file can be replaced when users are off the system

### Windows Server 2016 Registry
- **Definition of a registry:**
	- A complex database containing all information the operating system needs about the entire server
	- It acts as the <u>coordinating centre</u> for a specific server
- **What kind of data is contained in the Registry?**
	- Hardware component information
	- Windows Server 2016 services information
	- User profile data
	- Windows Server 2016 group policy information
	- Last current and last known setup used to boot the computer
	- Configuration information
	- Software licensing information
	- Server Manager configurations
- **What command is used to launch the registry editor?**
	- `regedit`
- **What are some precautions to take note of when working with the Registry?**
	- Establish specific group of admins who have permissions to access and modify the Registry
	- Only make changes to the Registry as a last resort
	- Regularly back up Registry as part of backing up the Windows Server 2016 `Windows` folder
	- Never copy the Registry from one Windows system to a registry of a different system
- **What is the easiest way to create a backup in the Registry?**
	- Setting a restore point by using `cmdlet` in the PowerShell
- **What should be done if a registry is damaged after working on it?**
	- Return to the restore point created just before working on the Registry

### Active Directory Basics
- **Definition of an Active Directory**
	- Directory service that stores information about all network resources
	- <u>Examples of information:</u>
		- Servers
		- Printers
		- User Accounts
		- Groups
		- Security Policies
		- Emails
- **Definition of Domain Controllers**
	- Servers that have ADDS server roles installed
	- Contains writable copies of information in the Active Directory
- **Definition of Domain**
	- A container that holds information about all network resources grouped within it
	- A logical group that shares the same Active Directory

#### Schema
- **Definition:**
	- Defines the objects and attributes that can be stored in the Active Directory
- **What are the object classes stored in the Active Directory?**
	- User accounts
	- Computers
	- Groups
- **Caveat:**
	- The replication between domain controllers require involved parties to have an identical Active Directory schema

#### Global Catalog
- **Definition:**
	- Stores information about every object within a forest
	- By default, the first domain controller to be configured in a forest becomes the global catalog server
- **What are the benefits of a global catalog server?**
	- Stores a full replica of all objects within its own domain and partial replica of each object within every domain in the forest but with a small number of attributes
	- Enables forest-wide searches of data
- **What are the functions of a global catalog?**
	- Acts as central storage of key object information in a forest with multiple domains
	- Provides access to all resources in a domain
	- Proves replication of key Active Directory elements
	- Keeps a copy of most used attributes for each object for quick access

#### Namespace
- **Definition:**
	- A logical area on a network that contains directory services and named objects
- **What are the two types of namespaces?**
	- Contiguous namespaces where the child object contains the name of the parent object
	- Disjointed namespaces where the child object does not resemble the name of the parent object

### Active Directory Structure
- **What is the logical structure of the Active Directory?**
	- Forest
	- Trees
	- Domains
	- Organisational Units (OU)
	- Site Objects
- **What is the physical structure of the Active Directory?**
	- Domain Controllers
	- Sites (Physical Networks)

#### Forest
- **Definition**
	- Group of one or more Active Directory trees in a common relationship
- **What are the characteristics of a forest?**
	- Trees can use a disjointed namespace
	- All trees use the same schema
	- All trees use the same global catalog
	- Two-way transitive trust are automatically configured between domains within a single forest

### Multi-Master Replication
- **Definition:**
	- Method of database replication which allows data to be stored by a group of computers and updated by any member of a group
	- If information on one domain controller changes, it is replicated to all other domain controllers



---
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