# SMW Lecture 1 - Introduction to Windows Server 2016

###### tags: #SMW

## Table of Contents
```toc
```

## The Need for Secure Computing
- **Types of threats:**
	- Viruses
	- Worms
	- Programs that steal confidential information
	- Hacking via system vulnerabilities
- **Laws that uphold management possible for data breaches:**
	- **American Laws:**
		- California SB-1386
		- Health Insurance Portability and Accountability Act (HIPAA)
			- protection for <u>personal health information</u>
		- Gramm-Leach-Bliley Act (GLB) 
			- *Financial Services Modernization Act 1999*
	- **Singapore Laws:**
		- <u>Electronic Transactions Act 2010</u>
			- provides legal foundation for electronic signatures
		- <u>Personal Data Protection Act 2012 </u>
			- comprises various rules governing the collection, use, disclosure and care of personal data
- **Source of computer security problems:**
	- Bad software design
	- Bad implementation
- **Requirements of safer computing:**
	- Change in the behaviour of management programmers and users
	- Prioritize secure computing
	- Write secure operating systems and applications
	- Train users to always keep security in mind

## Microsoft's Commitment to Security
> **Areas of security that Microsoft decided to make significant investment in:**
> - Isolation and Resiliency
> - Software Updates
> - Quality
> - Access Control and Authentication

### Isolation and Resiliency
#### Features
- Split a computer system into smaller pieces and ensure that each piece is separated from the other ones
	- This is so that if it gets compromised or malfunctions, it cannot affect other entities in the system
- **Implementations:**
	- Firewalls
	- Object Level Access Control
	- etc.
- Automatically blocks unsolicited downloads and unwanted pop-ups from websites by Internet Explorer
- Inclusion of better file attachment handling in Outlook Express and Windows Messenger
- Compilation of core Windows components with the most recent version of compiler technology
- **Introduction of Exchange Edge Services:**
	- <u>Designed for:</u>
		- Email protection
		- Enhanced security
		- Management of junk emails for Exchange customers
- Integrated set of protection technologies  **(Microsoft Defender Antivirus)**
- **Smart screening technologies**
	- Intelligent spam-filtering solution
	- Microsoft Defender SmartScreen
		- check for downloaded files, blocking blacklisted URLs
- **Client inspection technologies**
	- **MBSA** - for older versions of Windows
	- **Microsoft Application Inspector**
		- source code inspection on C, C++, C#, Java, JavaScript, HTML, Python etc.
	- **Windows Update Agent**

### Software Updates
> **Software updates** are a primary way of protecting against security vulnerabilities
- Microsoft releases software updates monthly

#### Products
- System Center Configuration Manager (SCCM)
- Windows Update Troubleshooter
- Windows Software Update Services (WSUS)

### Quality
- Use of quality standards and processes
- Use of best practices in all phases of software developments
- Development of new internal tools that automatically checks code for common errors
- Thorough testing of software before release

### Access Control and Authentication
- Areas Microsoft made changes to improve access control and authentication:
	- Passwords
	- Smart cards
	- Public Key Infrastructure (PKI)
	- Internet Protocol Security (IPSec)
	- Active Directory Rights Management Services (ADRMS)

## Trustworthy Computing
- **Microsoft Trustworthy Computing Memo**
	- Development emphasis: **Security** over **Features**
	- Strategy to compete against other companies
- Way to ensure safe and reliable computing
- **Requirements of Trustworthy Computing**
	- Computers need to be reliable
	- Software that operates these machines must be equally reliable
	- Service components need to be dependable
- **Dimensions of which Microsoft's objective of trustworthy computing relies on:**
	- Security (by design, default and deployment)
	- Privacy (fair information principles)
	- Business Integrity
		- Availability, manageability and accuracy
		- Usability, responsiveness and transparency

### Trusted Cloud
- Long-term initiative
- **Based on the 3 fundamental principles:**
	- Security
	- Privacy
	- Compliance

### Secure Code
- <u>Various steps taken by Microsoft to implement and maintain security:</u>
	- **Training Windows engineers on the following:**
		- Writing secure code
		- Specialised testing techniques
		- Threat modelling
	- Write documentation with security in mind

### Common Runtime Language
> Runtime environment for the .NET framework
- Manages the running of .NET programs regardless of programming language they are written in

## Windows Server 2016 Edition
**Windows Server 2016 Platforms**
- Windows Server 2016 Essentials Edition
- Windows Server 2016 Standard Edition
- Windows Server 2016 Datacenter Edition

**Windows Server 2016 Additional Platforms**
- Windows Server 2016 Multipoint Premium Server
- Windows Storage Server 2016
- Windows Hyper-V Server 2016

### Windows Server 2016 Essentials Edition
| Specifications                                                           | Value        |
| ------------------------------------------------------------------------ | ------------ |
| Number of users                                                          | 25           |
| Connections for file sharing through Server Message Block (SMB) services | 16.8 million |
| Number of central processor sockets                                      | 2            |
| Number of Remote Desktop Connections                                     | 50           |
| Number of Routing and Remote Access Connections                          | 50             |

**Additional details:**
- This edition cannot join a domain, other than to migrate files and data from one server to another
- Provides most but not all server roles
- Does not provide role for hosting virtual machines
- Cannot provide cloud services

### Windows Server 2016 Standard Edition
**Provides the following:**
- File and print services
- Secure internet connectivity
- Centralized management of users
- Centralized management of applications and network resources

**New features:**
- **Start button and menu** are back on the desktop
- **Active directory** is easier to set up and improved <u>file security</u>
- **Domain controller** can be cloned to quickly create additional domain controllers
- **Generic Routing Encapsulation (GRE)** tunnelling to enable virtual private networks to go over external networks
- Desired State Configuration used to monitor specific server states and roles so that desired states do not change as other elements are changed on one or many servers
- Windows Defender automatically included as antivirus and antimalware program
- Storage tiering allows selected blocks of data to be moved to different storage locations
- Storage pinning works with storage tiering to enable moving of specific files to desired type of storage
- Parallel rebuild that enables failed disk in RAID to be rebuilt significantly faster
- Virtual desktops allow running of different desktops side-by-side
- Includes Hyper-V which enables servers to offer virtualization environment

**Hyper-V Improvements**
- Faster cloning
- Migration of individual VMs
- VM information stored in new file format protecting VM information from being directly edited

**New option to use containers**
> **Containers** enable applications on one computer to run in an isolated fashion with the ability to execute multiple applications

- Two types of containers:
	- Windows Server containers
	- Hyper-V containers

> All editions of the Windows Server 2016 compatible with the common language runtime used in the following:
> - Microsoft .NET framework
> - Microsoft Visual Studio .NET

**Clustering**
- Ability to increase access to server resources and provide fail-safe services
- Done by linking two or more computer systems so they appear to function as one

![400](https://i.imgur.com/3O5ABfP.png)

### Windows Server 2016 Datacenter Edition
- Designed for the following environments with:
	- Mission-critical applications
	- Very large databases
	- Very large virtualization requirements
	- Cloud computing needs
	- Information access requiring high availability
- Offers support for clustering up to 64 computers

**Areas of differences between Standard Edition and Datacenter Edition**
	- Virtualization
	- Cloud computing
	- Database handling

> Datacenter Edition does not come with **database software**
> - Designed to provide OS resources to accommodate large database applications

## Using Windows Server 2016 with Client Systems
**Client workstation Operating Systems most compatible with Windows Server 2016:**
- Windows Versions:
	- 7
	- 8
	- 8.1
	- 10

> **Note:** Windows 10 is the most compatible in terms of **client management**

### Terminology
| Term                          | Definition                                                                                                                                                                                                 |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Client                        | A computer that accesses resources on another computer via a network                                                                                                                                       |
| Workstation                   | A computer that has its own CPU and can be used as a standalone or network computer                                                                                                                        |
| Total Cost of Ownership (TCO) | The full cost of owning a network including hardware, software, maintenance and user support costs                                                                                                         |
| Domain                        | A group of network objects such as computers, servers and user accounts that provides for easier management<br> Computers and users in a domain can be managed to determine what resources they can access |
| Active Directory              | Database of computer, users, groups of users, shared printers, shared folders and other network resouces                                                                                                                                                                                                           |

### Advantages of Using Windows Server 2016 and Windows Versions 7-10 Together
1. Enhanced capabilities to recover from many types of network communication problems
2. Computer code for more efficient network communications
3. More network diagnostic capabilities
4. Computer code for better use of the network communications protocols
5. Continuing upgrades for Windows PowerShell commands and scripts in both Windows Server 2016 and Windows 7-10

### Linux Integration Services
> Enables Linux clients to access a Linux VM in Hyper-V

**New capabilities in LIS:**
- New software for enhanced desktop graphics performance on Linux clients
- Improved backup support functions
- Creation of kernel dumps for Linux VMs
- Better control of available RAM in Linux VMs

## Windows Server 2016 Features
**List of features:**
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

### Server Manager
- Enables server administrators to manage critical configuration features from inside one tool
- **Used to:**
	- Configure a server from the beginning
	- View computer configuration information
	- Change server roles and system properties
	- Configure networking
	- Configure remote desktop
	- Configure security including the firewall
	- Add and remove features
	- Run diagnostics
	- Manage storage and backups
	- Manage multiple servers from one place

- **Advantages of the new features of the Server Manager**
	- Local server option makes all of the local server properties available to manage
	- Multiple servers are easier to manage from one place
	- Servers can be grouped so that all servers in specific group received one or more commands simultaneously
	- Dashboard offers more quick-start guidance for setting up one or more servers and establishing groupings used to manage specific kinds of servers
	- Server Manager GUI has a new look  
	- Has new features such as:
		- Greater ability to add and manage remotes servers

### Security
- When installing Windows Server 2016, essential level of security automatically implemented by default when <u>adding a feature</u> or <u>installing a Windows component</u>
- **Other security features:**
	- File and folder permissions
	- Security policies
	- Encryption of data
	- Event auditing
	- Various authentication methods
	- Server management and monitoring tools

### Enhanced Web Services
#### Microsoft Internet Information Services (IIS)
> Transforms Windows Server 2016 into a versatile web server

- **Designed to:**
	- Include over 40 modules
		- Enable IIS to have a lower attack surface
	- Provide easier applications of IIS patches
	- Makes it easier for network programmers to <u>write network applications</u> and <u>configure applications for the web</u>

#### Windows Server Core and Nano Server
##### Windows Server Core
- Minimum server configuration
- Designed to function in a fashion similar to a traditional UNIX and Linux servers
- **Does not provide the following:**
	- GUI - just a command line
	- Graphical tools to configure server
	- Extra services that is not needed
	- Mouse pointer on the screen
	- Windows Mail, Microsoft Word, search windows and other software

##### Windows Nano Server
- New installation option in Windows Server 2016
- Smaller footprint than Server Core
- Provides basic foundation for server computing
- Intended to be faster and need less maintenance

> Microsoft views Nano Server as a platform on which to run the following:
> - DNS or DHCP
> - Applications servers e.g. from the cloud
> - Web server
> - Database or file server

#### Windows PowerShell
> Command-line interface that offers a shell
> - A fully customized environment for executing commands and scripts

> **Scripts** are files that contain commands to be run by computer OS

- **PowerShell can be used to perform the following tasks:**
	- Work with files and folders
	- Manage disk storage
	- Manage network tasks
	- Set up local and networking printing options
	- Install, list and remove software applications
	- View information about local computer including user accounts
	- Manage services and progresses
	- Lock a computer or log off
	- Manage IIS web services
- PowerShell offers over 130 command-line tools called `cmdlets`

![500](https://i.imgur.com/jkH8rYD.png)

### Reliability
- Operating system kernel runs in privileged mode
	- Protects it from problems created by malfunctioning program or process
- Kernel consists of core programs and computer code of operating system
- Privileged mode gives operating system kernel extra level of security from intruders

> A **process** is a computer program or portion of a program that is currently running

> A **protected process** is one for which outside influences are restricted

## Planning a Windows Server 2016 Networking Model
**Definition of a Network:**
- Communications system that enables compute users to share computer equipment, application software, and data voice and video transmissions
- Contains computers joined by communications cabling or sometimes by wireless devices

**Definition of a Workstation/Client Network Operating System**
- Enables individual computers to access a network and in some cases, share resources

**Peer-to-Peer Networking**
- Focuses on spreading network resource administration among server and non-server members of a network

**Server-Based Networking**
- Centralizes the network administration on one or more servers

| Peer-To-Peer                         | Server-Based with ADDS                              |
| ------------------------------------ | ------------------------------------ |
| ![](https://i.imgur.com/Vm6pgAo.png) | ![](https://i.imgur.com/9pRGxIY.png) |

> **Pointers 💡**
> - Windows Network Model/Infrastructure is designed to be scalable
> - Small office or organisations may use the P2P model to provide LAN based connectivity for simple file and print services.
> 	- Effective with lower costs for less than 20 workstations
> - Larger organisations or enterprises may set up multiple sites in other multiple countries to support operations with Network-Based model relying on Active Directory

### Peer-to-Peer Networking
- Uses workstations to share resources e.g. files and printers and connect to resources on other computers
	- No special computer needed to enable workstations to communicate and share resources
- Effective for **very small networks**
- **Disadvantages:**
	- Management of network resources are **decentralized**
	- Administration becomes more difficult as network grows larger in size
	- Lack of security of resources

### Server-Based Networking
> A **server** is a single computer that provides extensive multiuser access to network resources

- Can handle hundreds of users at once
	- Fast response when delivering the shared resource
	- Less network congestion when multiple workstations access that resource
- **Advantages:**
	- Users only need to log on once to gain access to network resources
	- Stronger security
	- All members can share computer files
	- Printers and other resources can be shared
	- All members can have email and send messages to office members through an email server
	-