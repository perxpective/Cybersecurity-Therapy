# SMW MST AY2022/2023 Semester 1

###### tags: #SMW 

## Question 1 
(a) Tony, a SMW student, is working on the initial practical exercise to setup a simple Windows Domain, test.org, with a Windows Server 2016 (Server A). There is only one local administrator account, smw_srv2016, exists in Server A.

After completing the setup of the Windows Server 2016 system to have the ADDS and DNS services, Server A becomes the primary domain controller of the domain, test.org. Its TCP/IP settings is illustrated as the following:

![](https://i.imgur.com/TtEN7wK.png)
 
 **(i) Briefly describe the required steps/procedures for Tony to install and authorise DHCP server in Server A. (6 marks)**
 - Add roles to install the DHCP service role 
 - Authorise DHCP with user account that belongs to Domain Admin

**(ii) Suggest a set of reasonable scope configurations for Tony for the newly installed DHCP server. (10 marks)**

Please fill out your answers in the following table:

| Scope Name             | Default                      |
| ---------------------- | ---------------------------- |
| IP Address Range       | 192.168.30.80-192.168.30.110 |
| Excluded Address Range |                              |
| Router                 | 192.168.30.2                 |
| DNS Servers            | 192.168.30.33                |
| DNS Domains Name       | test.org                     |

**(b) List three common best practices, which can improve the security of the domain based notebooks for frequently outstation staff (6 marks)**

Any three:
- Enable Windows Defender
- Update Windows software regularly
- Enable Bitlocker
- Limit login locally access right to relevant personnel
- Change local login password every 90 days
- Enable firewall
- Disable USB device connection
- Ensure physical security of the notebook

**(c) List three foundational principles of the Microsoft "Trusted Cloud" initiative (6 marks)**
- Security
- Privacy
- Compliance (or Transparency)

## Question 2
(a) A question related to the Windows DNS Server configuration has been posted to a technical forum: "I recently started at a company and they have the DNS service configured in a strange way. None of the DNS servers has defined any root hints server. Can you tell me why the DNS service can still work without using any root hints server?"

**(i) Please provide a reasonable answer to this question. (3 marks)**
- Local DNS servers must be using forwarder only Local DNS implementation

**(ii) Describe the workflow of how a Local DNS resolves a forward lookup enquiry without using the root hints server. (5 marks)**
- Return response immediately if answer for query stored inside cache of local DNS
- Forward client query to designated forwarder DNS query
- Relay response from forwarder DNS server to the client

(b) 
**(i) Briefly explain how often and/or when the administrator should use the Best Practices Analyzer (BPA) to analyse the server configuration. (6 marks)**
- BPA should be run every time roles have been changed
- Schedule BPA to run once every 3-6 months. This is to detect and cater unexpected configuration updates
- Microsoft may send BPA scanning rules occasionally and hence it is important to keep the rules update  

**(ii) Identify two limitations when applying the Best Practices Analyser in a Domain-based network to harden the security of all the domain computers. (6 marks)**
- BPA only provides scanning for servers but does not help fix the issues that have been identified
- Only scans for server configurations
- BPA only works for Microsoft based solutions and not for third party solutions

## Question 3
This question is related to the "NFT Unlimited" Enterprise and its single forest Active Directory setup.

(a) The following diagram depicts all the existing domains in a single forest Active Directory of "NFT Limited" Enterprise. The forest root domain is `nft.net`

![](https://i.imgur.com/WtCw4Pi.png)

**(i) List out all domains that is/are having mutual trust relationship (by default) with crypto.nft.org domain. (3 marks)**
- nft.net
- nft.org
- art.nft.org

**(ii) Identify the number of trees and list out its/their members accordingly (3 marks)**
- <u>2 trees</u>
	- nft.org (with two members)
		- crypto.nft.org
		- art.nft.org
	- nft.net

**(b) The following table depicts the management levels of six user accounts, Albert, Bob, Carlo, David, Esther and Fred in the "NFT unlimited" Active Directory.**

| User Accounts        | Management Level |
| -------------------- | ---------------- |
| albert@nft.org       | Manager          |
| bob@crypto.nft.org   | Manager          |
| carlo@art.nft.org    | Officer          |
| david@crypto.nft.org | Officer          |
| esther@art.nft.org   | Intern           |
| fred@nft.org         | Intern           |

The following table provides additional information of the network shared folders defined in this active directory. There are a total of three domains listed. Each of the domains has one or two network shared folders configured.

| Shared Folder Names | Domain         |
| ------------------- | -------------- |
| SF1, SF2            | nft.net        |
| SF3                 | art.nft.org    |
| SF4                 | crypto.nft.org |

Your task: Briefly describe and illustrate the security group configurations and the appropriate “Shared Folder Permissions”, which allow:
- All managers to read files from the shared folders that reside in the nft.net domain.
- All managers to change files from the shared folders that reside in the same domain.
- All officers and managers to read files from the shared folders that reside in the same tree where the user accounts are defined.
- All interns to read files from the shared folders that reside in the same domain where the user accounts are defined.

Your answer has to be based on the “Account, Global, Domain Local, Permission” (AGDLP) approach to meet the above five access conditions with the minimum number of security groups and permission assignment. (16 marks)