# SMW Practical 1 - Introduction to SMW Lab Setup and Basic Windows Server 2016 Configurations

###### tags: #SMW #Practcal

## Table of Contents
```toc
```

## Setting Up a Domain 
1. To promote a Windows Server to become a domain controller, add the Active Directory Domain Service role to the server
2. **Add role:** Server Manager > Local Server > Manage > Add Roles and Features

![](https://i.imgur.com/1HY5Qpb.png)

3. After installation is complete, click on **Promote this server to a domain controller**

![](https://i.imgur.com/s7It3vk.png)

4. Refer to the following to setup the domain:
	1. **Deployment Configuration:**
		1. Add a new forest
		2. Root domain name (smw.soc.com)
	2. **Domain Controller Option:**
		1. Select the desired Windows Server version for both the Forest Functional Level and the Domain Functional Level
		2. Specify the DNS and Global Catalog (GC)

![](https://i.imgur.com/080DX8a.png)

5. Select the **Install** option

![](https://i.imgur.com/KqhpJov.png)

## Exploring the Domain Controller
1. On Server Manager > Local Server, explore the Properties page

![](https://i.imgur.com/L7Qh9gH.png)

2. On Server Manager > Local Server > Tools, explore the following tools:
	1. Active Directory Users and Computers
	2. Services
	3. System Information
	4. Windows Firewall with Advanced Security

## Adding the DHCP Service to the Domain Controller
