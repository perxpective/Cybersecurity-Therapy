# SMW Lecture 4 - Deploying and Managing DNS and Group Policy

###### tags: #SMW

## Table of Contents
```toc
```

## Implementing Microsoft DNS
- **Domain Name System (DNS)**
	- TCP/IP application protocol that enables a DNS server to resolve:
		- **Forward lookup** - Domain and computer names to IP addresses
		- **Reverse lookup** - IP addresses to domain and computer names
		- <u>Security implications</u>
			- Refusal for connection from host without reverse lookup record
	- DNS servers provide the DNS namespace for an enterprise
	- One of the requirements for using Active Directory is to have DNS servers set up for its domains
	- Windows Server DNS is the most compatible with the Active Directory
		- Non-Microsoft servers can be used but they must be compatible with the Active Directory
		- Microsoft-based DDNS provides additional information to help domain clients to locate DCs and GCs

> **Additional Notes:**
> - DNS provides important operational network services to domain clients
> - Misconfigured or compromised DNS can cause operational and security issues
> - **Example:** Someone can intercept DNS registrations or queries and use them to impersonate users to plant for possible immediate or future attacks

### Installing DNS Services
- DNS is installed as a server role in Windows Server 2016

#### DNS Zones
- DNS name resolution enabled through the use of tables of information that links computer names and IP addresses
- Tables are associated with partitions in a DNS server known as **zones**
	- Contains resource records
- **Forward Lookup Zone**
	- zzz