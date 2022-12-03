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

| Network Connection Details | Answer        |
| -------------------------- | ------------- |
| IP Address                 | 192.168.30.35 |
| Network Mask               | 255.255.255.0 |
| Default Gateway            | 192.168.30.2  |
| Preferred DNS Server       | 192.168.30.33 |

**(b) List three action items that are related to the commitment of Microsoft towards isolation and resilience. (9 marks)**
- Firewalls
- Windows Defender
- Object Level Access Control

## Question 2 
(a)
**(i) Briefly describe the complete workflow of how a local DNS resolves a forward lookup enquiry using the Root Hints (iterative lookup) approach. (8 marks)**

**(ii) Briefly describe two possible security related advantages of blocking direct external DNS connections and deploying in-house customised forwarder for resolving DNS queries. (6 marks)**

(b) 
Briefly describe two main functions for each of the following two system utilities:
**(i) Best Practices Analyzer (BPA)**
**(ii) The Security Compliance Manager (SCM)**

## Question 3
This question is related to the "SMW Unlimited" enterprise and its single forest Active Directory setup.

(a) The following diagram depicts all existing domains in a single forest Active Directory of "Gaia Limit"