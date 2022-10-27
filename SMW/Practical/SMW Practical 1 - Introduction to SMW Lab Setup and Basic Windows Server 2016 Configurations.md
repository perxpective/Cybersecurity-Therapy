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
1. Login to an account that is a member of the Domain Administrator Group
2. Go to Server Manager > Local Server > Add Role and Features to add the DHCP role
3. Accept all the default settings and click the next button until the installation is completed

![](https://i.imgur.com/jYCluSV.png)

4. After the roles and features added, complete the post-deployment configuration

![](https://i.imgur.com/CUGkzLC.png)

5. Accept all the defaults to complete the post-deployment configuration

![](https://i.imgur.com/penEtbw.png)

6. DHCP Scope configuration: The scope definition determines the information to be sent to all connected DHCP clients. Start the DHCP Manager to configure the scope

![](https://i.imgur.com/X4GLo3i.png)

7. Right click on the IPv4 node and select **New Scope**

![](https://i.imgur.com/utmF0Hl.png)
![](https://i.imgur.com/Y2D60HI.png)
![](https://i.imgur.com/zLCKMg6.png)
![](https://i.imgur.com/9QSeA1E.png)
![](https://i.imgur.com/nzgq63i.png)
![](https://i.imgur.com/GJVp00a.png)
![](https://i.imgur.com/nGLEmqw.png)

8. Verify the scope configuration at the DHCP Manager Console:

![](https://i.imgur.com/63nvoxf.png)

## Adding a Client to the Domain
1. Ensure that Windows Server 2016 is running and the local DHCP service of VMNet is disabled
2. Start the Windows 10 VM
3. Verify that the IP settings of the Windows 10 VM remains dynamic
4. Check if it can access the Internet
5. Verify and record the 