# SMW Tutorial 2

###### tags: #SMW #Tutorial

## Table of Contents
```toc
```

## Self-Evaluation Check List
- **How often should we run the BPA for a server? Why?**
	- Every time one or more roles are installed or removed, but continue to scan once per month due to updating of BPA rules by Microsoft and if anything has been added to the server without knowledge
- **What is the main advantage of implementing Active Directory in a Windows System?**
	- It provides a centralized platform for administrators to manage and access resources and policies, as well as security administration all under a single logon
- **What is the primary prerequisite to implement Active Directory in a Windows System?**
	- The Windows System must have a static IP address configured in order to implement the Active Directory
- **What is the relationship between the Windows Registry Database and the Active Directory Database?**
	- The Windows Registry Database is a hierarchical database that stores all low-level settings for the Windows Operating System. Whereas, the Active Directory Database that stores information about network resources namely servers, printers, user accounts, groups, security policies etc.
- **List all the hierarchical containers in the Active Directory Structure.**
	1.  Forests
	2.  Trees
	3.  Domains
	4.  Organizational Units
	5.  Site Objects
- **What is the 'Namespace' in an Active Directory?**
	- Namespace is a logical area on a network that contains directory services and named objects and is able to perform name resolutions
- **Briefly describe the possibility of setting up servers which belong to different Domains in the same site.**
	- Possible - a site reflects the physical aspect of the network. Thus, servers (or domain controllers) from different domains can be deployed under the LAN. Members from different domains can also be deployed in the same LAN.
- **A user account, Mary, belongs to two global security groups: G1 and G2. The permission settings given to G1 only allows it to have read only access to a file X. The permission settings of G2 allows it to have read and change access to the file X. What will be the effective access right of Mary having for the file X?**
	- Read and change, when NTFS and Share are on the same level. The resultant set of NTFS permissions is based on the cumulative style (except that deny permissions override allow permissions)

## Challenging Questions
- **Briefly describe the best approach to ensure only a group of selected domain user accounts can send print jobs to a particular network printer (The printer is attached to a domain member.).**
	- Put the group of selected domain accounts into a global group and add the global group into the domain local group. Assign this domain local group to have permissions to access the printer. Now, the group of selected user accounts in the domain local group can access the printer to send print jobs.
- **Identify three major difference between BPA and SCW in terms its functionality and applications. (Hint: Ask yourself: When will you use SCW and when will you use BPA?)**
	1.  SCW examines the roles that the server plays and adjusts the security settings to match these roles while BPA only scans for problems for only roles that do not follow Microsoft’s best practices and only provides recommendations on how to resolve them.
	2. Settings configured with SCW can be exported and applied to other servers, but BPA does not have this function.
	3.  Scanning rules of BPA can be updated by Microsoft via software updates but rules of SCW is fixed
- **Briefly describe what the NTFS inherited permissions is and what will be the combination effect of inherited permissions and explicit permissions?**
	- NTFS inherit permissions are permissions given to an object because it is a child of a parent object. When inherited and explicit permissions are combined together, the explicit permissions takes precedence over the inherited permissions of the object. Hence, the combination of inherited and explicit permissions equate to explicit permissions.

## Nano Test Questions and Answers
![](https://i.imgur.com/cvqwx4c.png)

- **Question 1 Answer:**
	- 4 trees. The following 4 are the disjointed namespaces found in the Active Directory:
		- kitty.com
		- kitty.com.sg
		- kitty.org.sg
		- kitty.org (consists of two domains: kitty.org and east.kitty.org)
- **Question 2 Answer:**
	- The number of schema is needed to determine the number of forests. Since the question does not give any information about the schema, the answer is therefore unknown
	- Can be one, two, three, or four
- **What is the effect of running `cipher /W:C:`?**
	- The command overwrites deleted data found in the C: Drive
- **What are the security implications of running the command `cipher /W:C:`?**
	- Prevention of any potential adversaries to retrieve confidential data from a disk of a decommissioned or ownership transferred system
	- Prevention of any potential adversaries to retrieve confidential data after the EFS encryption operations is applied at the C: Drive