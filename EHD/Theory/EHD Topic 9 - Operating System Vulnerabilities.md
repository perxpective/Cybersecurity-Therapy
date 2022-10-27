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
	- NetBIOS used for backward compatibility