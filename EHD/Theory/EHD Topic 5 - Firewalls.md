###### tags: #EHD #Theory 

## Table of Contents
```toc
```

## OSI Model Layers
1. Application Layer
2. Presentation Layer
3. Session Layer
4. Transport Layer
5. Network Layer
6. Data Link Layer
7. Physical Layer

![](https://i.imgur.com/u7kBds5.png)


## Network Access Translation
- Network device (proxy or firewall) hides internal IP addresses from outside world
- Public IP address presented to the outside world

### Reasons for NAT:
- Reduces the number of public IP addresses required by organization
- Hundreds and thousands of internal computers can be grouped into a single public IP address
- Internal IPs hidden from outside attackers

### How does NAT work?
- When internal computer wants to request web page from web server on the Internet, packets go to NAT device first.

![](https://i.imgur.com/KqahXYq.png)

- NAT device replaces source IP with public IP address and then sends the packet to web server on the Internet.

![](https://i.imgur.com/qF2oM9k.png)

- Web server only see public IP address and sends packet back to NAT device.

![](https://i.imgur.com/iWpfJsi.png)

- NAT device remembers which internal computer requested for web page and sends packet accordingly

![](https://i.imgur.com/gJOc5cX.png)


### Proxy Server

- Intercepts internal user requests and processes request on behalf of user
![](https://i.imgur.com/p2pgFeH.png)

- Keeps a cache of retrieved web pages
- Can simply retrieve web pages from the proxy server cache for future requests
- Faster retrieval time
- Proxy servers can filter web content
	- Block access to undesirable websites
	- Keeps log of websites accessed by users
- Proxy servers can also be used to hide IP addresses
- Prevents direct connection between internal and external computers
- Proxy servers work at application layer:
	- Examines data in the packet
	- Decides which application or system to forward packet to
	- Reconstructs packet and forwards it
	- Replace original header with new header containing proxy's own IP address

![](https://i.imgur.com/DXt8K6a.png)
![](https://i.imgur.com/SZj8b3T.png)

| Advantages                                               | Disadvantages                                                 |
| -------------------------------------------------------- | ------------------------------------------------------------- |
| Examines content of packets and filters based on content | Can be weak                                                   |
| Shields internal IP address                              | Can slow down network access                                  |
| Caches web pages for faster access                       | Requires configuration of client programs to use proxy server |
| Provides single point of logging                         | Provides single point of failure                              |

### Choosing a Proxy Server

#### Freeware Proxy Servers
- Described as content filters
- Might not have advanced features (e.g. Squid)

#### Commercial Proxy Servers
- Offers:
	- Web page caching
	- Source and destination IP address translation
	- Content filtering
	- NAT
- Example: many hardware firewalls come with proxy server functionality

## Reverse Proxy
- Used to help a web server
- Offloads some loads on web server by caching static web content
- Performs load balancing among multiple web servers
- Can handle SSL encryption, freeing web servers from doing encryption/decryption of data

![](https://i.imgur.com/XAfSwjS.png)

## DMZ
- Section of network visible to outside world
- Public users can access DMZ but cannot enter internal secured network
- May also be called **service network** or **perimeter network**

![](https://i.imgur.com/ylx2pzt.png)

## Bastion Host
- Computer that has been specially protected through OS patches, authentication and encryption
- Normally at the DMZ
- Usually provides web, FTP, email, other services running on specially secured server 

## Honey Pot
- Computers at perimeter network (DMZ)
- Attacks attackers away from critical servers
- Conducts logging
	- Used to learn about attacker's techniques

![](https://i.imgur.com/SFbozzK.png)

## Firewalls
- Hardware and software
- Block unauthorized access
- Packet filters were earliest filters.
- Can be configured using rules
- Rules for blocking traffic done case-by-case
	- <u>Actions</u>:
		- Allow traffic
		- Block traffic
		- Customize access (e.g. forward packet to another set of rules for further processing)
- What can firewalls not do?
	- Cannot protect connections that don't go through it
	- Some firewalls are designed for personal use 

### Enterprise Firewalls
- Designed for company/enterprise use
- For monitoring and protecting large-scale networks
- Manage security policies throughout organization

### Firewalls are only part of a Security Solution
- Cannot defend against internal threats
- Requires strong security policies and employee education
- Must be combined with other security solutions such as:
	- Antivirus software
	- Intrusion Detection Systems (IDS)

## Packet Filtering
- Only info in packet headers checked
- Data in packets not checked

### Stateless Packet Filtering
> Operates in **Transport** and **Network** Layer
- Decides whether to allow or block packets based only on information in protocol headers
- Filtering based on common IP headers
	- IP address and ports
	- Protocols
	- Flags and options
	- **Advantage:** Inexpensive and fast
	- **Disadvantage:** Attacks nowadays are more complicated

### Stateful Packet Filtering
> Operates in the **Network**, **Transport** and **Session** Layer
- Looks at information in protocol headers and keeps records of connections host computer makes with other computers
- Maintains a file called a **stable table** containing record of current connections
- Allows incoming packets to pass through only from external hosts already connected
- Blocks spoofing

#### Typical Location of Packet Filters
- Between Internet and host/network
- Between proxy server and Internet
- Either ends of a DMZ

![](https://i.imgur.com/8eJsN6Q.png)

## Application Layer Firewall
> Operates in **Transport, Network, Session and Application** layer
> - Can perform Deep Packet Inspection (DPI)
- Inspects both header and data portions of packets
- Also known as content filtering
- Checks for malicious code containing in packet data
- Combination of packet filters and application layer firewalls can be used in networks

### Configuring Firewall Rules
**Rule Base**
- Tells firewalls what to do when certain kind of traffic attempts to pass

  ![500](https://i.imgur.com/dtGS4uW.png)

## Restrict Subnet, Ports and Protocols
Filter by:
- IP addresses
- Ports
- Name of services
- 6 TCP control flags
- IP options

## Anti-Spoofing Rule
- First rule in most firewall configurations
- Blocks packets coming from outside network pretending to be an internal system

## Firewall Rule Matching
- Firewalls match packets to rules in particular order
- Once rule is matched, packet is processed based on action specified in rule
- Firewalls with numbered rules matched according to rule numbers

## Firewall Logs
- Preparing log file summaries and generating reports
- Shows major events over period of time
- Contains raw data that can be used to create reports
- Some firewalls contain log file analysis tools
- Viewing raw data can be tedious and prone to errors
- Display data in easy-to-read format

## Screening Router
- Determines whether to allow or deny packets based on source and destination IP addresses
- Does not stop many attacks that spoof IP information
- Should be combined with firewall or proxy server for additional protection

![](https://i.imgur.com/sDj2Bru.png)

## Dual-Homed Host
- Computer that has been configured with more than one network interface
- Firewall software forwards packets from one network to another
- Provides limited security
- Host serves as single point of entry to organization

![550](https://i.imgur.com/uyRMyw0.png)

## Screened Host
- Similar to a dual-homed host
- Can add router between the host and Internet to carry out IP packet filtering
- Combines dual-homed host and screening router
- Can function as a gateway or proxy server

![](https://i.imgur.com/5jrmU2z.png)

## Screened Subnet DMZ
- Subnet of publicly accessible servers placed outside internal LAN
- Called "service network" or "perimeter network"
- Firewall protects DMZ connected to Internet and the LAN (three-pronged firewall)

![](https://i.imgur.com/xn5B0sc.png)

## Multiple DMZ/Firewall Configurations

### Server Farm
- Group of servers connected in their own subnet
- Work together to receive request with help from load balancing software
	- load balancing software prioritizes and schedules requests and distributes them to servers
- Clusters of servers in DMZs help protect network from being overloaded
- Each server farm or DMZ can be protected with its own firewall or packet filter

![](https://i.imgur.com/5NLy4AP.png)

## Multiple Firewall Configurations
- Protecting DMZ with two or more firewalls
	- One firewall controls traffic between DMZ
	- Second firewall controls traffic between protected LAN and DMZ
- **Advantage**: can control where traffic goes in three networks that you are dealing with
- Additional firewalls placed inside internal network to protect network management systems
- Extra level of protection for network management systems
- Intruders that gain control of network management systems can potentially gain access to all networks

![](https://i.imgur.com/ZNsrpjD.png)

- Protecting branch offices with multiple firewalls
  - Multiple firewalls can implement a single security policy
  - Central office has centralized firewall
  - Directs traffic for branch offices and their firewalls
  - Deploys security policy through firewall using security workstation

![](https://i.imgur.com/JrAFsdP.png)

## Advantages and Disadvantages of Configurations
| Configuration                     | Advantages                                                                          | Disadvantages                                                                               |
| --------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Screening router                  | Simplicity, cost, good for home applications if stateful packet filter used         | Provides only minimal protection: viruses, Trojan horses and malformed packets might bypass |
| Dual-homed host                   | Simple, economical, can provide effect protection if configured correctly           | Provides single point of entry and fault, depends all on host computer                      |
| Screened host                     | Provide two layers of protection for home and small business networks               | Provides single point of entry and fault, depends on host computer and router               |
| Screened subnet DMZ               | Protects public servers by isolating them from internal LAN                         | Servers in DMZ highly vulnerable and requires hardening                                     |
| Multiple DMZ/Firewalls            | Provides layers of protection for business network                                  | Expensive                                                                                   |
| Single DMZ/Two Firewalls          | Balances traffic load in heavy load situations                                      | Expensive                                                                                   |
| Branch offices/Multiple firewalls | Provides protection for all offices in corporate network and central administration | Firewalls must be purchased, installed and configured at each office branch                                                                                            |

## Advantages and Disadvantages of Hardware and Software Firewalls
| Type of firewall                           | Advantages                                                                            | Disadvantages                                                                                                                  |
| ------------------------------------------ | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Software (Freeware)                        | Unbeatable price, small file size, easy to install                                    | Minimal set of features offered, lack of technical support                                                                     |
| Software (Commercial Personal Firewalls)   | Simple to install, economical price, auto-configuration features to help novice users | Not as full-featured as enterprise products, not as robust, tend to be installed in single-computer systems, reducing security |
| Software (Commercial Enterprise Firewalls) | Installed on dedicated host for maximum security                                      | Difficult to install and configure                                                                                             |
| Hardware Appliances                        | More scalable than software firewalls and can handle faster throughput                | Expensive and difficult to patch if bugs or security alerts found                                                              |
| Hybrid Firewall                            | Provides throughput and security of appliance with features of software firewall      | Just as expensive or more expensive than other appliances                                                                                                                               |
