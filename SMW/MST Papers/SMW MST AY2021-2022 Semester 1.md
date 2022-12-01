# SMW MST AY2021/2022 Semester 1

###### tags: #SMW 

## Question 1
(a) Tommy, an SMW student is working on a practical exercise to setup a simple Windows Domain, `test.org`, with a Windows Server 2016 and a Windows 10 virtual machine. Both of the systems are attached to the same NAT based virtual network segment

After completing the setup of the Windows Server 2016 to have the ADDS, DNS and DHCP services, it has been verified it that the server is functioning properly.  Its TCP/IP settings is illustrated as the following:

![300](https://i.imgur.com/nQCTWlI.png)

Tommy proceeded to start the Windows 10 VM and had reviewed the network status of the Windows 10 and it has shown the following network connection details:

![300](https://i.imgur.com/yyY96Ns.png)

Tommy has encountered one issue: he is able to surf on the Internet using the Windows 10 client but he cannot let the Windows 10 join the domain `test.org`

**i. What is the most probable cause of this issue? (3 marks)**
**ii. Briefly describe one possible solution with the step-by-step instructions to rectify this issue. (5 marks)**

**(b) List two action items that are related to the commitment of Microsoft towards quality. (6 marks)**
- The use of best practices in all phases of software developments
- Thorough testing of software before releasing

**(c) List five "security by default" examples we can find from a fresh deployed Primary Domain Controller Server (PDC). (10 marks)**
- 

## Question 2
**(a)**
**(i) Briefly describe the scavenging option of a DNS Server. (3 marks)**
**(ii) Briefly describe one pro and one con of enabling the scavenging option for a DNS Server. (6 marks)**
**(iii) Briefly describe one advantage of using stub zone over forwarder for resolving DNS queries. (3 marks)**

(b) The Best Practices Analyzer (BPA) runs pre-designed tests/scans against a target Windows Server and generates a report on its findings. These tests are grouped by different categories. 

**List four categories of these pre-designed tests. (8 marks)**

**(c) Briefly describe the purposes of following two system utilities, `sfc` and `sigverif` (6 marks)**

## Question 3
This question is related to the "SMW Unlimited" Enterprise and its single forest Active Directory setup.

(a) The following diagram depicts all existing domains in the Active Directory of "SMW Unlimited" Enterprise. The forest root domain is `smw.com`

![](https://i.imgur.com/MbRneV1.png)
**How many trees is/are defined in the smw.com Active Directory? List the members of the tree(s). (5 marks)**

(b) The following table depicts the management levels of six user accounts: Emily, Alice, James, Paul, Bob and Kirk in the "SMW Unlimited" Active Directory

| User Accounts       | Management Level |
| ------------------- | ---------------- |
| emily@south.smw.org | Manager          |
| alice@south.smw.com | Officer          |
| james@south.smw.com | Officer          |
| paul@west.smw.org   | Officer          |
| bob@smw.com         | Intern           |
| kirk@west.smw.com   | Intern                 |

The following table provides additional information of the network shared folders defined in this Active Directory. There are a total of three domains listed. Each of the domains has one or two network shared folder configured.

| Shared Folder Names | Domain        |
| ------------------- | ------------- |
| SF1                 | south.smw.org |
| SF2                 | smw.com       |
| SF3                 | south.smw.org |
| SF4                 | south.smw.com |

The existing security group configurations and the "Shared Folder Permissions" are designed based on the following rules:
- The configuration is based on AGDLP best practice
- All managers to read, write and delete files from the shared folders that reside in the same tree where user accounts are defined
- All managers to read files from the shared folders that reside in the active directory
- All officers to read files from the shared folders that reside in the same tree where user accounts are defined
- All officers to read, write and delete files from shared folders that reside in the same domain where user accounts are defined
- All interns to read files from the shared folders that reside in the same domain where the user accounts are defined

The configuration is illustrated in the following diagram for your reference:

![](https://i.imgur.com/TatmLOc.png)

Your task: Briefly describe and illustrate an updated security group configurations to reflect the following two changes and requirements made to the existing rules:
- A new share folder, SF5, has been created in `west.smw.org`
- To optimize the configuration with the minimum number of security groups and permissions assignment

Your answers has to be based on the "Account, Global, Domain Local, Permission" (AGDLP) approach to meet the above conditions with the minimum number of security groups and permissions assignment. (15 marks)