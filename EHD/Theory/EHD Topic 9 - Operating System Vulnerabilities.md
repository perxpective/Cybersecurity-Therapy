# EHD Topic 9 - Operating System Vulnerabilities

###### tags: #EHD #Theory 

## Table of Contents
```toc
```

## Vulnerability Research
- Important to keep updated with current vulnerabilities
- Sources:
	- Online databases
	- IRC
	- Forums
	- Newsgroups
	- Underground sites

## Common Vulnerability and Exposure (CVE)
> The CVE system provides a reference-method for publicly-known information security vulnerabilities and exposures

- CVE identifiers have a status of either **entry** or **candidate** (**CAN** indicates that it is under review)
- **Vulnerability Archives:**
	- https://cve.mitre.org/cve
	- https://nvd.nist.gov/vuln
	- https://packetstormsecurity.com
	- https://bugtraq.securityfocus.com/archive

## Testing for Vulnerabilities
- Vulnerability assessment tools can be used to scan and identify vulnerabilities on a computer system or network
	- Nessus
	- OpenVAS
	- Nikto
	- Acunetix
	- Retina

## Operating System and Software Application Vulnerabilities
- Security testers should search for vulnerabilities on the following:
	- the OS they are testing
	- any application running on the server
- Good information sources
	- Common Vulnerabilities and Exposures (CVE) site
	- Vendor website

## NetBIOS Basics
> **NetBIOS** - Network Input Output System
- Programming interface
- Allows computer communication over LAN
- Used to share files and printers
- **NetBIOS names:**
	- Computer names on Windows systems
	- Limit of 16 characters
	- Last characters identifies type of service running so 15 characters left for computer name
	- Must be unique on a network
- Software loaded into memory
	- Enables a computer program to interact with a network resource or other devices
- NetBIOS is **not** a protocol (it is an interface to a network protocol)
- **NetBEUI:**
	- Fast, efficient network protocol
	- Allows NetBIOS to be transmitted over to TCP/IP
	- NBT is NetBIOS over TCP
- Newer Microsoft OSs do not need NetBIOS to share resources
	- NetBIOS used for backward compatibility\

**NetBIOS names and suffixes**
| NetBIOS Name        | Suffix | Description                                                                                                                                                        |
| ------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `<computer name>`   | 00     | Workstation service registered the computer name                                                                                                                   |
| `<_MSBROWSE_>`      | 01     | Signifies that the computer is the master browser on the network (responsible for notifying all computers on the network of any NetBIOS name changes or additions) |
| `<computer name>`   | 03     | Computer is registered by Messenger service which client uses when sending and receiving messages                                                                  |
| `<computer name>`   | 06     | Registered by Routing and Remote Access Service (RRAS)                                                                                                             |
| `<computer name>`   | 1F     | Network Dynamic Data Exchange (NetDDE) services started on the computer. NetDDE is a system that runs on Microsoft OSs to facilitate exchange of network data      |
| `<computer name>`   | 20     | Registered by the Server service. A computer must have this service running to share printers or files                                                             |
| `<computer name>`   | 21     | Registered by Remote Access Service (RAS)                                                                                                                          |
| `<computer name>`   | 22     | Registered by the Microsoft Exchange Interchange service                                                                                                           |
| `<computer name>`   | 23     | Registered by the Microsoft Exchange Store service where mailboxes and public folders are stored                                                                   |
| `<computer name>`   | 24     | Registered by the MS Exchange Directory service                                                                                                                    |
| `<computer name>`   | 30     | Registered by Modem Sharing Server Service                                                                                                                         |
| `<computer name>`   | 31     | Registered by Modem Sharing Client Service                                                                                                                         |
| `<computer name>`   | 43     | Registered by the System Management Server (SMS) remote control client. Allows admins to take control of a client for troubleshooting and administration           |
| `<computer name>`   | 44     | Indicates that the SMS remote control tool is running on this computer                                                                                             |
| `<computer name>`   | 45     | Indicates that SMS remote chat is enabled on this computer                                                                                                         |
| `<computer name>`   | 46     | Signifies that SMS remote transfer is enabled on this computer                                                                                                     |
| `<computer name>`   | 4C     | Indicates that DEC Pathworks TCP/IP is configured on the computer                                                                                                  |
| `<computer name>`   | 52     | Also indicates that DEC Pathworks is configured on the computer                                                                                                    |
| `<computer name>`   | 87     | Signifies that the MS Exchange Transfer Agent (MTA) is running                                                                                                     |
| `<computer name>`   | 6A     | Indicates that Microsoft Exchange Internet Mail Connector (IMC) is running                                                                                         |
| `<computer name>`   | BE     | Signifies that Netmon Agent (Microsoft network-monitoring tool) is running                                                                                         |
| `<computer name>`   | BF     | Indicates that the Messenger service is running                                                                                                                    |
| `<username>`        | 03     | Indicates that the Messenger service is running                                                                                                                    |
| `<domain name>`     | 00     | Indicates that the Domain Name Service (DNS) is running                                                                                                            |
| `<domain name>`     | 1B     | Identifies the computer as a domain master browser                                                                                                                 |
| `<domain name>`     | 1C     | Identifies the computer as a domain controller                                                                                                                     |
| `<domain name>`     | 1D     | Identifies the computer as a master browser                                                                                                                        |
| `<domain name>`     | 1E     | Signifies that Browser Services Election is running                                                                                                                |
| `<iNet~Services>`   | 1C     | Indicates that Internet Information Services (IIS) is running                                                                                                      |
| `<IS-computername>` | 00     | Also indicates that IIS is running                                                                                                                                                                   |

## NetBIOS Null Sessions
- Unauthenticated connection to a Windows computer
- Does not require any username or password
- Normally used in SMB (Windows File and Printer Sharing)
- Null session vulnerability may allow attacker to connect and get information about the system
- Null sessions are no longer enabled on newer Windows OSs

## Enumeration
- Discovering resources available on the network
- Usernames or groups assigned on the network
- Gaining access to network resources

> Port scanning is part of enumeration
> - Intrusive process
> - Involves connecting to the system

### NetBIOS Enumeration Tools
- `nbtstat` command
	- Powerful enumeration tool included the with Microsoft OS
	- Displays NetBIOS table
- `net view` command
	- Shows whether there are any shared resources on a network host
- Use information obtained from port scanning during enumeration
	- Use an IP address obtained when port scanning to perform a NetBIOS enumeration

![](https://i.imgur.com/G0WXoNq.png)
![](https://i.imgur.com/0P4WOfQ.png)
![](https://i.imgur.com/SU9LXrI.png)

- `net use` command
	- Used to connect to a computer with shared folders or files

![](https://i.imgur.com/aRFDBiL.png)

### Additional Enumeration Tools
- NetScanTools Pro
- DumpSec
- Hyena
- Nessus
- OpenVAS

#### NetScanTools Pro
- Produces a graphical view of NetBIOS running on a network
- Enumerates any shares running on the computer
- Verifies whether access is available for shared resource using its **Universal Naming Convention (UNC)** name

![](https://i.imgur.com/j7gQxiq.png)
![](https://i.imgur.com/t4wWgkm.png)

#### Hyena
- www.systemtools.com
- GUI for managing and securing Microsoft OSs
- Shows shares and user logon names for Windows servers and domain controllers
- Displays graphical representations of the following:
	- Microsoft Terminal Services
	- Microsoft Windows Network
	- Web Client Network
	- Find User/Group

![](https://i.imgur.com/toT9CNo.png)

#### Nessus
- Allows enumeration of different OSs on a large network
- Identifies:
	- NetBIOS names in use
	- Shared resources
	- Vulnerabilities with shared resources
	- Also offers solutions to those vulnerabilities
	- OS version
	- OS vulnerability
	- Firewall vulnerabilities

![](https://i.imgur.com/GHm2PoF.png)
![](https://i.imgur.com/mfRFe3B.png)
![](https://i.imgur.com/Oq1TQZG.png)
![](https://i.imgur.com/IH37tZR.png)
![](https://i.imgur.com/aTHZddd.png)
![](https://i.imgur.com/KidUdee.png)

#### OpenVAS
> **OpenVAS** - Open Vulnerability Assessment Scanner

- www.openvas.org
- Scans for open ports
- Identifies services running on these ports
- Based on the identified service, runs appropriate vulnerability tests against the service
- **Network Vulnerability Tests (NVTs)**
	- Scans for vulnerabilities
	- Can be downloaded
- OpenVAS allows the choice of allowing the running of these "dangerous" tests against the target
- Can choose only "safe" tests if you do not want to risk the vulnerability tests causing negative effects on the target (e.g. live web server)
- All scanning activities generate extra network traffic
- When running scans against production networks, prepare firewalls, intrusion detection systems and logging systems to give alerts
- Security systems should detect such scanning activities

## Remote Procedure Call (RPC)
- Interprocess communication mechanism
- Allows a program running on one host to run code on a remote host
- **Examples of worms that exploited RPC:**
	- MSBlast (LovSAN, Blaster)
	- Nachi

## Server Message Block (SMB)
- Used by Windows to share files
- Runs on top of NetBIOS, NetBEUI or TCP/IP
- **Hacking tools:**
	- L0phtcrack's SMB Packet Capture Utility
	- SMBRelay
- SMB3 introduced in Windows 8 and Windows Server 2012

## Common Internet File System (CIFS)
- Implementation of SMB
- Remote file system protocol
- Enables computers to share network resources over the Internet
- Relies on other protocols to handle service announcements
- **Server security methods:**
	- Share-level security
	- User-level security

## Samba
- Open-source implementation of CIFS
- Allows sharing resources over multiple OSs
- Accessing Microsoft shares can make a network susceptible to attacks
- Samba is used to trick Microsoft services into believing that the NIX resources are Microsoft resources
- To protect a network from SMB attacks, filter out ports **137 to 139 and 445**

## Sticky Keys and Utility Manager
- Features to help Windows users with disabilities
- Pressing the <kbd>Shift</kbd> key 5 times quickly will enable the Sticky Keys configuration
- Pressing the Windows key and <kbd>U</kbd> will start the Utility Manager
- Hackers can make use of these to gain access to Windows without needing a password

## Windows Authentication
### LM Hash
- On Windows systems, hashed passwords of local users stored in SAM (Security Account Manager) in `C:\windows\system32\SAM`
- LM hash was used previously to hash the passwords
- As LM hash is not considered secure anymore, NTLMv2 is used
- For Windows systems in an Active Directory domain, hashed passwords are stored in the Active Directory database on the server

### NTLM 
|          | Description                                                                                       |
| -------- | ------------------------------------------------------------------------------------------------- |
| NTLM     | 128-bit hashing, Windows still sends LM hash and NTLM over the network for backward compatibility |
| NTLMv2   | Cryptographically strengthened                                                                    |
| Kerberos | Open standard authentication protocol                                                                                                  |

## Windows Password Dumping
- Software tools exist to dump Windows password hashes from the SAM
	- samdump2
	- pwdump
	- Meterpreter in Metasploit

## Vulnerabilities in Microsoft Services
- Internet Information Services (IIS) vulnerabilities
- **SQL server:**
	- SA account with blank password and cannot be disabled
	- SQL Server Agent
		- Authorized but unprivileged user can create scheduled jobs to be run by the agent
	- Extended store procedures
		- Buffer overflow
		- Fails to perform input validation
	- Default SQL port 1433
		- Spida worm exploit

## Patching Systems
- Number 1 way to keep systems secure
- Attacks take advantage of known vulnerabilities