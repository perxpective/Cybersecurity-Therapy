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
> - Common type of DNS query is resolving the IP address of host or domain name
> - Based on information stored on the **forward lookup zone**
> - In a scenario when the query is to resolve the host or domain name of a particular IP address, this type of query requires the information from the **reverse lookup zone**
> - **Stub zone** is a special type of internal lookup
> - Both reverse lookup and stub zones must be set up manually

- DNS name resolution enabled through the use of tables of information that links computer names and IP addresses
- Tables are associated with partitions in a DNS server known as **zones**
	- Contains resource records
- **Forward Lookup Zone**
	- Zone that links computer names to IP addresses
	- Holds host name records called address records
	- Most DNS queries handled based on resource records from this zone
- In IPv4, host record is called a host address (A) resource record
- IPv6 record is called an IPv6 host address (AAAA) resource record
- When DNS installed on a domain controller in a domain:
	- Forward lookup zone automatically created for the domain with DNS server address record already entered

| Resource Record                                  | Description                                                                                                                                                |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Host (A)                                         | Links computer or network host name to IP address                                                                                                          |
| Canonical Name (CNAME)                           | Links alias to computer name,  sometimes called a common name                                                                                              |
| Load sharing                                     | Spreads load of DNS lookup requests among multiple DNS servers to provide faster resolution for clients and better network response                        |
| Mail Exchanger (MX)                              | Provides IP address for SMTP servers that can accept email for users in a domain                                                                           |
| Name Server (NS)                                 | Provides information in response to queries about secondary DNS servers for authoritative server and off-site primary servers not authoritative for domain |
| Pointer Record (PTR)                             | Associates IP address to computer or network host name                                                                                                     |
| Service Locator (SRV)                            | Associates particular TCP/IP service to server along with domain of server and its protocol                                                                |
| Start of Authority (SOA)                         | First record in a zone and also indicates if server is authoritative for current zone                                                                      |
| Windows Internet Naming Service (WINS)           | Forwards lookup request for NetBIOS name to WINS server when host name cannot be found in DNS                                                              |
| Windows Internet Naming Service Reverse (WINS-R) | Forwards reverse lookup request to WINS server                                                                                                             |

### Using DNS Dynamic Update Protocol
- Microsoft DNS is also known as Dynamic DNS (DDNS)

> **Dynamic DNS** - Modern form of DNS that enables client computers and DHCP servers to automatically register IP addresses

- **DNS Dynamic Update Protocol**
	- Enables information in DNS server to be  automatically  updated in coordination with DHCP
- After configuring DNS:
	- Ensure that is configured to secure the DNS dynamic update protocol
	- Saves administrators time since they no longer have to manually register each new workstation or each time new IP lease is issued

### DNS Replication
**Primary DNS Server:**
- Main administrative server for a zone and thus also the authoritative server for that zone
**Secondary DNS Server:**
- Contains copy of primary DNS server zone database but not used for administration
- Obtains copy of zone database through a zone transfer over the network

<u>Vital services performed by secondary DNS servers:</u>
- Make sure that there is always a copy of primary DNS server's data
- Enable DNS load balancing among primary DNS server and secondary servers
- Let secondary DNS face and answer to queries from the public network
- Reduce congestion in one part of the network

**If using Active Directory and have two or more DCs:**
- Set up Microsoft DNS services on at least two of the DCs

> **Notes:**
> - Unlike DC Replication, DNS Replication is not working in multi-master mode
> - Zone data updates can only be taken place at the primary DNS
> - Secondary DNS servers unable to fully replace functions of primary DNS
> - Only authorized DNS can request zone data transfer from master
> - Replication process also protects transfer data using both authentication and encryption schemes

### DNS Query
- Client request local DNS for a name to IP address resolution
- <u>Local DNS gives an immediate answer when:</u>
	- The authoritative server for the particular domain
	- Local DNS has the required information from its cache
- <u>When DNS does not have the answer:</u>
	- Looks up IP address of corresponding authoritative server from one of the root servers (root server addresses are built-in to DNS installation)
	- Involves multiple rounds of inquiries
	- Local DNS acts as client to visit multiple authoritative DNS servers to get the final server
	- Also known as **Iterative Lookup**
	- Once the actual authoritative server is identified, local DNS contacts the remote DNS directly and gets required information

### Stub Zone
- Bare necessities for DNS functions
- Copies of the following
	- SOA record zone
	- Name server records to identify authoritative servers
	- Record for name servers that are authoritative
- One common use for a stub zone is help quickly resolve computer names between two different namespaces
- **Zone Transfer Privilege**
	- Local DNS requires to have zone transfer privilege granted from the target DNS that owns the Forward Zone
	- Cannot set up stub zone for `google.com` unless local DNS has required privilege granted from authoritative DNS of `google.com`

### Additional DNS Server Roles
- Common to designate one DNS server to forward name resolution requests to specific remote DNS server
- DNS forwarding can be set up if DNS server receiving the forwarded request cannot resolve the name
	- Server that originally forwarded the request attempts to resolve via other ways
	- Called **nonexclusive forwarding**
- Windows Server 202126 supports use of forwarder and root hints
	- But root hints traffic may be 