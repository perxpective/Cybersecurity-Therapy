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
