# SMW MST AY2021/2022 Semester 2

###### tags: #SMW

## Question 1
(a) Toby, an SMW student is working on a practical exercise to setup a simple Windows Domain, `test.org` with a Windows Server 2016 (Server A) and a Windows Server 2012 R2 (Server B) virtual machines. Both of the systems are attached to the same NAT based virtual network segment.

After completing the setup of the Windows Server 2016 system to have ADDS and DNS services, Server A becomes the primary domain controller of the domain, `smw.org`. Its TCP/IP settings are illustrated as the following:

![](https://i.imgur.com/NDTGV9j.png)

Toby proceeded to setup the Server B VM. Initially, the Server B VM is using dynamic allocated TCP/IP settings and can surf on the Internet without any problem. The actual TCP/IP settings of Server B is illustrated as the following:

![](https://i.imgur.com/ZrL2cEQ.png)

Your task: Suggest a set of reasonable TCP/IP (IPv4) settings for Toby to configure the Server B in order to let Server B to join in to the `smw.org` domain. (6 marks)

Please fill out your answers in the following table:

| Network Connection Details | Answer |
| -------------------------- | ------ |
| IP Address                 |        |
| Network Mask               |        |
| Default Gateway            |        |
| Preferred DNS Server       |        |

**(b) List three action items that are related to the commitment of Microsoft towards isolation and resilience. (9 marks)**

## Question 2 
(a)
**(i) Briefly describe the complete workflow of how a local DNS resolves a forward loopup**