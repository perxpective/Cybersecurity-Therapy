# SMW Tutorial 3

###### tags: #SMW #Tutorial 

## Table of Contents
```toc
```

## Self-Evaluation Check List
- **A user account, Mary, belongs to two global security groups: G1 and G2. Permission settings given to G1 only allows it to have read-only access to file X. Permission settings of G2 allows it to have read and change access to file X. What will be the effective access right of Mary for having file X?**
	- Mary will have read and change access to file X
- **Continuing on the previous question, if file X is under the folder `d:\data` and this folder has been shared as `\\memsrv1\netShare`, the shared folder permission settings only allow security group, G3 to have read-only access to it. Mary is also a member of G3. What will be the effective access right of Mary for the file X when she accesses it via the network?**
	- Mary will have read only access to file X
- **What is DNS reverse lookup?**
	- A querying technique of DNS to determine domain name associated with the IP address
- **By default, not all the hosts are having their reverse lookup (PTR) entries set up at the DNS zone. Name a reason why we may want to setup PTR entries for some of the hosts**
	- A PTR associates IP address to a computer or network host name and hence can be used to verify that the sender matches the IP address it claims to be using, eliminating any possibilities of DNS spoofing
	- Used in email servers to prevent spam and check if the IP address is valid - if invalid, block the connection
- **Please compare the iterative lookup and recursive lookup in term of efficiency, and possible security implications**
- **List three best practices to tighten security of a DNS service in an Active Directory network**
- **List two functions of SCM**
- **Briefly describe three possible ways for a Windows Server 2016 DNS to resolve the name address queries for its clients**

## Past Year MST Questions
The following 2 tables describe the security grouping relationship of three user accounts within the SMW domain:

| User  | Member of           |
| ----- | ------------------- |
| Bob   | Manager             |
| Cathy | IT Support, Manager |
| Devin | Intern, IT Support          |

| Group      | Member of |
| ---------- | --------- |
| IT Support | Staff     |
| Manager    | Staff     |

There is a member server `doc.smw.com` which hosts a shared folder
Below are the sharing permissions configurations and settings of the particular shared folder being hosted on `doc.smw.com`

**\\\\doc.smw.com\\bulletin**

| Group/User | Permissions |
| ---------- | ----------- |
| Manager    | Change      |
| Staff      | Read        |
| Intern     | Deny Read   |

The following are the NTFS permissions configurations of the local folder that associate with the bulletin shared folder

**D:\\staff_notice** shared as **\\\\doc.smw.com\\bulletin**

| Group/User | Permissions                                  |
| ---------- | -------------------------------------------- |
| Manager    | Read & Execute, List Directory Content, Read |
| IT Support | Full Control                                 |
| Intern     | Read & Execute, List Directory Content, Read |

Based on the given information, determine the effective permissions of the three given accounts for the files located in D:\\staff_notice folder. You may show your answer by filling out the missing elements from the following table: (8 marks)

| User  | Local login/Network Access | Effective Permissions on Existing Files                                                            |
| ----- | -------------------------- | -------------------------------------------------------------------------------------------------- |
| ---   | Local Access/Remote Access | Any of the following permissions:<br>No Access<br>Read Only<br>Read/Write + Delete<br>Full Control |
| Bob   | Local Access               | (i)                                                                                                |
| Bob   | Remote Access              | (ii)                                                                                               |
| Cathy | Local Access               | (iii)                                                                                              |
| Cathy | Remote Access              | (iv)                                                                                               |
| Devin | Local Access               | (v)                                                                                                |
| Devin | Remote Access              | (vi)                                                                                                   |

**Answers:**
1. Read only (Take NTFS permissions for Manager)
2. Read only (Take NTFS permissions for Manager)
3. Full control (Take IT Support NTFS permissions)
4. Read/write + delete (Take Shared permissions for Manager)
5. Full Control (Take NTFS permissions for IT Support)
6. No access (Take Shared permissions for Intern)

> **Note:**
> - NTFS permissions apply when shared folder accessed locally
> - When shared folder is access remotely, take the more restrictive permission of the NTFS and Share permissions