# EHD Topic 10 - Metasploit

###### tags: #EHD #Theory 

## Table of Contents
```toc
```

## What is Metasploit
> Metasploit provides useful information and tools for penetration testers on exploit techniques and create a functional knowledge base for exploit developers and security professionals
> The tools and information on this site are provided for legal security research and testing purposes only
> Metasploit is an open source project managed by Rapid7

## Metasploit Framework
- Framework to do penetration testing and create additional exploit code and payloads
- <u>Consists of the following modules:</u>
	- Exploit modules
		- Executes a sequence of commands to target a specific vulnerability in a system
	- Auxiliary modules
		- Does not execute a payload
		- e.g. scanners, fuzzers and DoS attacks
	- Payload modules
		- Shell code that runs after an exploit successfully compromises a system
		- Payloads can open a Meterpreter or command shell
		- Meterpreter is an advanced payload
	- Post-exploitation modules
		- Gather more information or gain further access to an exploited system
		- e.g. including hash dumps and application and service enumerators
	- Others

## Metasploit Modules
- New modules can be created or added to the framework
- Existing modules are normally found in the directory `/usr/share/metasploit-framework/modules`

## Meterpreter
- Advanced multi-function payload that provides an interactive shell
- Some functions provided by the Meterpreter shell:
	- Download a file
	- Obtain the password hashes for user accounts
	- Monitor network traffic on target

> **Metasploit Unleashed**: [https://www.offensive-security.com/metasploit-unleashed/msfconsole/](https://www.offensive-security.com/metasploit-unleashed/msfconsole/)

