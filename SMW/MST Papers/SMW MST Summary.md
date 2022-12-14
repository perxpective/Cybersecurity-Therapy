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
	- <u>Changing the behaviour</u> of management programmers and users
	- <u>Prioritization</u> of *secure computing*
	- Writing <u>secure operating systems and applications</u>
	- <u>Training users</u> to always keep security in mind

### Microsoft's Commitment to Security
- **What are the areas of security Microsoft has invested in?**
	- Isolation and Resiliency
	- Software Updates
	- Quality
	- Access Control and Authentication

#### Isolation and Resiliency
- **Explanation:**
	- <u>Splitting a computer system into smaller pieces</u> and ensure that each piece is <u>separated from the other ones</u>
	- This is so that if the system gets compromised, it cannot affect other entities in the system
- **List action items related to commitment of Microsoft towards isolation and resiliency:**
	- Firewalls 
	- Object Level Access Control
	- Exchange Edge Services
	- Microsoft Defender Antivirus
	- Smart Screening Technologies
	- Microsoft Defender SmartScreen
	- <u>Client Inspection Technologies</u>
		- MBSA
		- Microsoft Application Inspector
		- Windows Update Agent

#### Software Updates
- **Explanation:**
	- Primary way of <u>protecting against security vulnerabilities</u>
- **How often does Microsoft release software updates?**
	- Monthly
- **Examples of products related to software updates:**
	- System Center Configuration Manager (SCCM)
	- Windows Update Troubleshooter (WUT)
	- Windows Software Update Services (WSUS)

#### Quality
- **What are some examples related to Microsoft's commitment towards quality?**
	- The use of quality <u>standards</u> and <u>processes</u>
	- The use of <u>best practices</u> in all phases of <u>software development</u>
	- The <u>development of new internal tools</u> that automatically <u>checks code for common errors</u>
	- <u>Thorough testing</u> of software before release

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
	- Computers need to be <u>reliable</u>
	- Software that operates these machines must be <u>equally reliable</u>
	- Service components need to be <u>dependable</u>
- **List the means of achieving trustworthy computing**
	- **Security**
		- by design, default and deployment
	- **Privacy**
		- via fair information principles
	- Availability, manageability and accuracy (AMA)
	- Usability, responsiveness and transparency (URT)

### Trusted Cloud
- **List three fundamental principles in Microsoft's Trusted Cloud initiative**
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
	- Enhanced capabilities to **recover** from many types of <u>network communication problems</u>
	- Computer code for more <u>efficient network communications</u>
	- More <u>network diagnostic capabilities</u>
	- Computer code for better use of <u>network communication protocols</u>
	- <u></u>Continuous upgrades for Windows PowerShell commands and scripts in both Windows Server 2016 and Windows 7-10
- **What are the drawbacks to using Essentials Edition?**
	- It cannot join a domain other than migrating files and data from one server to another
	- It provides most but not all server roles
	- It does not have roles for hosting virtual machines
	- It cannot provide cloud services
- **List the features of the Standard Edition**
	- File and print services
	- Secure internet connectivity
	- Centralized management of users, applications and network resources
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
		- Information access requiring *high availability*
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
	- Add or remove roles and features
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
	- It has over 40 modules to enable IIS to have a lower attack surface
	- Provide easier applications of IIS patches
	- Makes it easier for network programmers to write network applications and configure applications for the web

### Windows Server Core
- **Objectives of Windows Server Core**
	- To function in a similar fashion to a traditional UNIX and Linux server

### Windows Nano Server
- **Functions of Windows Nano Server**
	- Serves as a platform to run DNS, DHCP, application servers, web servers and databases or file servers

### Windows PowerShell
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
	- Management of network resources are <u>decentralized</u>
	- Administration becomes <u>more difficult</u> as network grows larger in size
	- <u>Lack of security resources</u>
- **What are the advantages of using server-based networking over peer-to-peer networking?**
	- It is able to <u>handle hundreds of users at once</u>
	- Users are only required to <u>log on once</u> to gain access to network resources
	- <u>Stronger security</u>
	- All members can share computer files in the network
	- Printers and other resources can be <u>shared</u>
	- All members can email other office members through an <u>email server</u>
	- Software applications can be <u>stored and shared in a central location</u>
	- Important databases can be <u>managed and secured from one computer</u>
	- All computers can be <u>backed up more easily</u>
	- Server administrators <u>save time when installing software upgrades</u>

### Windows Server 2016 Network Protocols
#### Transmission Control Protocol (TCP)
- **Definition of TCP/IP**
	- Stands for the <u>Transmission Control Protocol/Internet Protocol</u>
	- Suite of protocols that support communication across <u>LANs and the Internet</u>
- **Explain how is TCP/IP reliable**
	- It <u>controls data flow</u> to ensure <u>end-to-end delivery of data</u>
	- Windows is constantly adjusted to account for existing network traffic
	- It is a <u>connection-oriented communication</u> that ensures that packets are delivered in the <u>right sequence</u> and their contents are <u>accurate</u>

#### Address Resolution Protocol
- **Explain what is the Address Resolution Protocol (ARP)**
	- It is a protocol that acquires the physical addresses of a computer's network interface card (NIC)
- **What command is used to show the contents of ARP cache?**
	- `arp -a`

#### Automated Address Configuration
##### Automatic Private IP Addressing (APIPA)
- **Explanation:**
	- Configuration used to automatically configure TCP/IP settings for a computer <u>without a DHCP server</u>
- **Who is APIPA suitable for?**
	- **Small organisations** with only <u>one network segment</u> and do not need access to another network or Internet

##### Dynamic Addressing Through a DHCP Server
- **Where is DHCP service commonly used in?**
	- *Medium-sized* and *large* networks
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
	- Login as a Domain Admin (account that is authorized to access the domain controller)
	- Open the Server Manager
	- Click the local server on the left pane
	- On the right pane, scroll to the BPA
	- Click the down arrow for Tasks
	- Click Start BPA Scan and wait for the scan to be completed
	- Read the results of the scan outputted

### System File Checker
- **Command for the System File Checker** - `sfc`
- **What are the functions of the System File Checker?**
	- It scans system files for <u>integrity</u>
- **What are the best use cases for the system file checker?**
	- Checking a new system based on <u>new installation media or baseline</u>
	- <u>Verify integrity </u>of possible compromised system
	- <u>Recover a malfunctioning system</u> due to corrupted system files

### Verifying System and Critical Files
- **Functions of `sigverif`:**
	- It <u>verifies system and critical files</u> to determine if they have a signature
	- Does not overwrite inappropriate files
- **Where are results of the scan written to?**
	- They are written to a log file called `sigverif.txt`
- **What happens if the tool finds a file without a signature that needs to be replaced?**
	- The file can be replaced when users are off the system

### Windows Server 2016 Registry
- **Definition of a registry:**
	- A *complex database* containing all information the operating system needs about the entire server
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
	- Establish <u>specific group of admins</u> who have permissions to <u>access and modify the Registry</u>
	- Only make changes to the Registry <u>as a last resort</u>
	- <u>Regularly back up Registry</u> as part of backing up the Windows Server 2016 `Windows` folder
	- <u>Never copy the Registry</u> from one Windows system to a registry of a different system
- **What is the easiest way to create a backup in the Registry?**
	- <u>Setting a restore point</u> by using `cmdlet` in the PowerShell
- **What should be done if a registry is damaged after working on it?**
	- <u>Return to the restore point</u> created just before working on the Registry

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
	- Stores information about <u>every object within a forest</u>
	- By default, the first domain controller to be configured in a forest becomes the global catalog server
- **What are the benefits of a global catalog server?**
	- Stores a <u>full replica of all objects</u> within its own domain and <u>partial replica of each object within every domain in the forest</u> but with a <u>small number of attributes</u>
	- Enables forest-wide searches of data
- **What are the functions of a global catalog?**
	- Acts as <u>central storage</u> of key object information in a forest with multiple domains
	- <u>Provides access</u> to all resources in a domain
	- <u>Proves replication</u> of key Active Directory elements
	- Keeps a copy of <u>most used attributes</u> for each object for quick access

#### Namespace
- **Definition:**
	- A logical area on a network that contains <u>directory services</u> and <u>named objects</u>
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
- **What is a forest functional level?**
	- Refers to the Active Directory functions that are supported forest-wide

#### Tree
- **Definition**
	- Group of one or more domains in a common relationship
- **What are the characteristics of a tree?**
	- Domains are represented in a contiguous namespaces
	- Domains can be in a hierarchy
	- Two-way trust relationships exist between parent and child domains
	- All domains in a single tree use the same schema for all types of common objects

#### Domain
- **Definition**
	- A logical partition within an Active Directory forest
	- A grouping of objects that typically exists as a primary container within the Active Directory forest
- **What are the basic functions of a domain?**
	- It provides an Active Directory partition to house objects that have a common relationship in terms of management and security
	- It establishes a set of information to be <u>replicated from one domain controller to another</u>
	- It expedites management of a set of objects
- **What are domain functional levels?**
	- It refers to the domain-specific functions supported by Windows Server operating systems on domain controllers

#### Organisational Units (OU)
- **Definition**
	- A group of related objects in a domain that can be administered using the same group policies
- **Reasons for using OUs**
	- OUs help achieve more flexibility in managing resources linked to a business unit, department or division
- **What are concerns to keep in mind when creating OUs?**
	- Limit OUs to 10 levels or less
	- It is more efficient to set up OUs horizontally than vertically
	- Creation of OUs require more processing resources as each request through an OU requires more CPU time

#### Sites
- **Definition**
	- TCP/IP based concept within the Active Directory linked to IP subnets
- **What are the functions of sites?**
	- It reflects one or more interconnected subnets
	- It reflects the physical aspect of a network
	- It is used in domain controller replication
	- It enables a client to access the domain controller
- **What are some reasons to define a site?**
	- It enables a client to access network servers using the most efficient physical route
	- Domain Controller replication is the most efficient when Active Directory has information about the locations of which domain controllers
- **What are the benefits of creating a site?**
	- Sites can set up redundant paths between domain controllers
	- These paths can be used for replication

#### Bridgehead Server
- **Definition**
	- Domain controller is designated to have the role of exchanging replication information

### Active Directory Guidelines
- **What are some guidelines to take note of when setting up an Active Directory**
	- Keep the Active Directory <u>as simple as possible</u>
	- <u>Plan its structure</u> before implementing it
	- Implement the <u>least number of domains as possible</u>
	- Use OUs to <u>reflect the organisation's structure</u>
	- Do not build an Active Directory with <u>more than 10 levels of OUs</u>
	- Use sites in situations where there are <u>multiple IP subnets and geographical locations </u>to improve <u>logon</u> and <u>domain controller performance</u>

### Security Configuration Wizard
- **Definition**
	- A software program that adjusts security settings to match the roles of a Windows Server
- **Functions of SCW**
	- Disables unnecessary services and software
	- Closes network communication ports and resources not in use
	- Examines shared files and folders to manage network access through access protocols
	- Configures audit policy
- **Components in SCW**
	- GUI Interactive Wizard
	- Database (Security Configuration Database)
	- Command-Line Tool called `scwcmd`
- **What are the differences between SCW and BPA?**
	- SCW scans for roles in the servers and is able to adjust the security settings to match these roles, whereas the BPA only scans for roles that do not follow Microsoft's best practices and only provides recommendations on how to fix them
	- SCW settings can be exported and applied to other servers while BPA does not have this function
	- Scanning rules of BPA are updated regularly by Microsoft via software updates while rules of SCW are fixed
- **Name command-line options for `scwcmd`**
	- `analyze`
	- `configure`
	- `register`
	- `rollback`
	- `transform`
	- `view`

### Multi-Master Replication
- **Definition:**
	- Method of database replication which allows data to be stored by a group of computers and updated by any member of a group
	- If information on one domain controller changes, it is replicated to all other domain controllers

## Lecture 4 - Deploying and Managing DNS and Group Policy
### Implementing Microsoft DNS
- **Definition**
	- TCP/IP application protocol that enables a DNS server to resolve forward and reverse lookups
- **What are the security implications of DNS?**
	- There is a possibility for the refusal for connection from hosts without reverse lookup records

### DNS Zones
- **Definition**
	- Tables associated with partitions in a DNS server
- **Forward Lookup Zone**
	- **Explanation**
		- The zone that links <u>computer names to IP addresses</u> and <u>holds address records</u>
- **Reverse Lookup Zone**
	- **Explanation**
		- The zone used to <u>resolve IP addresses to network resource names</u>

### DNS Dynamic Update Protocol
- **Definition**
	- Protocol that enables information in DNS servers to be automatically updated in coordination with DHCP
- **Dynamic DNS**
	- **Explanation**
		- Modern form of DNS that enables client computers and DHCP servers to automatically register IP addresses

### DNS Replication
- **Definition of Primary DNS Server**
	- The main administrative and authoritative server for a zone
- **Definition of Secondary DNS Server**
	- The server that contains a copy of the primary DNS server zone database but cannot be used for administration
	- It obtains a copy of the zone database through a zone transfer over the network
- **What are the important services that the secondary DNS server perform?**
	- It ensures that there is always a copy of a primary DNS server's data
	- It enables DNS load balancing among primary DNS and secondary servers
	- It faces and answers to queries from the public network
	- It reduces congestion in one part of the network

### DNS Query
- **How does it work?**
	- Client requests the local DNS for a name to IP address resolution
	- **When does the local DNS give an immediate answer?**
		- When it is the authoritative server for the particular domain
		- It has the required information from its cache
	- **What happens when DNS does not have the answer?**
		- It performs <u>iterative lookup</u>
			- It looks up the IP address of the corresponding DNS authoritative servers from one of the root servers
			- It involves multiple rounds of inquiries
			- The local DNS acts as the client to visit multiple authoritative DNS servers to get the final server
			- Once the actual authoritative server is identified, the local DNS contacts the remote DNS directly and get the required information

### Stub Zone
- **Definition**
	- A copy of the DNS zone that contains only resource records that identify DNS servers for that zone
- **What information does the stub zone copy?**
	- SOA record zone
	- *Nameserver* records to identify authoritative servers
	- Records for authoritative nameservers
- **What is one use for a stub zone?**
	- It helps quickly resolve computer names between two different namespaces

### Additional DNS Server Roles
- **When can DNS forwarding be set up?**
	- When the DNS server receiving the forwarded request cannot resolve the name 
- **What is a caching server?**
	- It is used to provide fast queries as results of each query are stored in RAM
- **What are the benefits to using caching servers?**
	- Caching-only DNS servers query primary or secondary DNS servers and caches results to provide fast responses for the next identical query
	- It reduces the number of secondary servers and extra network traffic
- **What are the limitations of using caching servers?**
	- It takes time for each caching server to build up a comprehensive set of resolved names to IP addresses

#### Differences Between Forwarders and Root Hints
| Forwarders                                                                                       | Root Hints                                                                             |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| Faster (recursive query)                                                                         | Slower due to interactive queries                                                      |
| Local DNS has no way to ensure security configuration of external forwarder                      | More reliable (13 root hints supported by more than 200 actual load-balancing servers) |
| Potential to enable customizable DNS service within an enterprise e.g. DNS filtering and logging |                                                                                        |

### Creating DNS Implementation
- **What are the best practices recommendations for DNS implementation?**
	- Implement Windows Server 2016 instead of other DNS versions and use Active Directory
	- Resource records and zones that can be set up for IPv4 can also be set up for IPv6
	- Use namespaces to represent natural organisational boundaries
	- Create two or more DNS servers for load balancing, multi-master relationships and fault tolerance
	- Designate one DNS server as a forwarder to reduce traffic
	- Number of DNS servers set up can be related to analysis of an organisation
- **What are the security benefits of a read-only domain controller?**
	- It allows for<u> unidirectional replication</u> so that the compromised read-only domain controller will not spread malicious updates
	- It does not <u>cache any passwords</u>

### DNS Threats
- **What are the type of threats that administrators should watch out for?**
	- <u>DDoS with DNS Amplification Attack</u>
		- Attack where bogus queries are sent to trigger a DNS to send large volumes of replies to the target victim
	- <u>Cache Poisoning</u>
		- Attack where the DNS cache/stub zone/forwarder is compromised, causing the DNS to return incorrect IP addresses and diverting traffic to the attacker's computer
	- <u>Registrar Hijacking</u>
		- The act of changing the registration of a domain without the permission of the original registrant
		- It can be done generally by exploiting a vulnerability in the domain name registration system or via social engineering

### Microsoft Baseline Security Analyzer (MBSA)
- **Definition**
	- A tool used to scan Windows-based computers for common security holes
- **Functions of MBSA**
	- <u>Compares computer settings</u> against <u>Microsoft's released patches and listed vulnerabilities</u>
	- Provides streamlined methods to <u>identify missing security updates</u> and <u>common security configurations</u>
- **Which of the following must be enabled for MBSA to run on multiple machines or remotely?**
	- Server Service
	- Remote Registry Service
	- File and Print Sharing

### Microsoft Security Compliance Manager
- **Explanation**
	- Utility to enable <u>automation deployment</u> and <u>monitoring baseline compliance</u>
- **What are the key features and benefits of the SCM?**
	- <u>Download security baselines</u> from Microsoft
	- <u>Compare</u> and <u>customise</u> security baselines
	- <u>Export baselines</u> in formats like XLS or GPOs

### Security Features in Windows Server 2016
- **Examples of security features:**
	- Server Core and Nano Server to reduce attack surface of kernel
	- Expanded and evolving group policies
	- Windows Firewall
	- Windows Defender
	- User Account Control
	- BitLocker Drive Encryption
- **Definition of a Demilitarised Zone (DMZ)**
	- A portion of a network that is in between two networks (usually a private network and the Internet)
- **Definition of Windows Defender**
	- Software that scans for viruses, spyware and malware 
- **User Account Control (UAC)**
	- **Design Objectives**
		- To keep the user running in the standard user mode to fully insulate the kernel and keep operating system and desktop files stabilized
	- **What is the Administrator Approval Mode in the UAC?**
		- It prevents malware or intruders from acquiring control via a backdoor without the administrator's knowledge
- **Explanation of BitLocker Drive Encryption**
	- Prevents an intruder from bypassing ACL file and folder protections

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

### Windows Server 2016 Essentials Edition

| Specifications                                                           | Value        |
| ------------------------------------------------------------------------ | ------------ |
| Number of users                                                          | 25           |
| Connections for file sharing through Server Message Block (SMB) services | 16.8 million |
| Number of central processor sockets                                      | 2            |
| Number of Remote Desktop Connections                                     | 50           |
| Number of Routing and Remote Access Connections                          | 50             |