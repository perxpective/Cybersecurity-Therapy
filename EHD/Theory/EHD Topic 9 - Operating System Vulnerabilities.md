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
| NetBIOS Name      | Suffix | Description                                                                                                                                                        |
| ----------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `<computer name>` | 00     | Workstation service registered the computer name                                                                                                                   |
| `<_MSBROWSE_>`    | 01     | Signifies that the computer is the master browser on the network (responsible for notifying all computers on the network of any NetBIOS name changes or additions) |
| `<computer name>` | 03     | Computer is registered by Messenger service which client uses when sending and receiving messages                                                                  |
| `<computer name>` | 06     | Registered by Routing and Remote Access Service (RRAS)                                                                                                             |
| `<computer name>` | 1F     | Network Dynamic Data Exchange (NetDDE) services started on the computer. NetDDE is a system that runs on Microsoft OSs to facilitate exchange of network data      |
| `<computer name>` | 20     | Registered by the Server service. A computer must have this service running to share printers or files                                                             |
| `<computer name>` | 21     | Registered by Remote Access Service (RAS)                                                                                                                          |
| `<computer name>` | 22     | Registered by the Microsoft Exchange Interchange service                                                                                                           |
| `<computer name>` | 23     | Registered by the Microsoft Exchange Store service where mailboxes and public folders are stored                                                                   |
| `<computer name>` | 24     | Registered by the MS Exchange Directory service                                                                                                                    |
| `<computer name>` | 30     | Registered by Modem Sharing Server Service                                                                                                                         |
| `<computer name>` | 31     | Registered by Modem Sharing Client Service                                                                                                                         |
| `<computer name>` | 43     | Registered by the System Management Server (SMS) remote control client. Allows admins to take control of a client for troubleshooting and administration           |
| `<computer name>` | 44     | Indicates that the SMS remote control tool is running on this computer                                                                                             |
| `<computer name>` | 45     | Indicates that SMS remote chat is enabled on this computer                                                                                                         |
| `<computer name>`                  |        |                                                                                                                                                                    |
