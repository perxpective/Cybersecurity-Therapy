# SMW Lecture 3 - Account Manager and Managing Resource Access

###### tags: #SMW 

## Table of Contents
```toc
```

## User Account Management
- **Default accounts:**
	- Administrator
	- Guest
- Accounts can be set up in <u>two general environments</u>:
	- **Local User Accounts**
		- Accounts that are set up via a stand-alone server that does not have an Active Directory
	- **Domain User Accounts**
		- Accounts that are set up in a domain when the Active Directory is installed
- When accounts are created in the domain through Active Directory, these accounts can be used to access any server or resource in the domain

> **Notes:** Default accounts are created automatically and can be threats to a system
> - Hackers can use these accounts to hack into a system

---
### Creating Accounts When Active Directory Is Not Installed 
- New accounts are created by first installing the *Local Users and Groups* MMC snap-in for stand-alone serve that do not use the Active Directory

![500](https://i.imgur.com/HzjKYpM.png)

![](https://i.imgur.com/dL3LzWz.png)
![](https://i.imgur.com/fBWTeiy.png)

### Creating Accounts When Active Directory Is Installed
- When Active Directory is installed and the server is a Domain Controller:
	- Use Active Directory Users and Computers tool either from:
		- The Windows Administrative Tools folder
		- Tools in Server Manager
		- MMC snap-in

### Disabling, Enabling, and Renaming Accounts
- When user takes a leave of absence, you have the option to disable their account
- Organisations might also have the practice of disabling accounts when someone leaves and enabling the account of the person's replacement

> **Extra Information:**
> - To preserve file ownership and forensic information, a user account should be disabled before being deleted from the system
> - Each user account object has a unique object SID or GUID which can be used to link event log records with the associated user account
> - Once an account is deleted, the linkage is broken and can cause difficulties in forensic investigations
> - Moreover, all files and folders owned by the account will be automatically changed to pass the ownership to the system administrators
> 	- Can cause security implications e.g. system administrators not being allowed to own and access highly classified information in those files and folders

### Move an Account
- When an employee moves from one department to another
	- Might need to move that person's account from one container to another
- Security group membership affects user's permissions for resources access
- OU affects user's security settings
- Security settings to a user is often mixed up with permissions granted to a user

### Resetting a Password
- Administrators do not have the option to look up a password, but can reset passwords for users
- For organisations that have accounts that manage sensitive information:
	- It is advisable to have specific guidelines that govern the circumstances under which an account password is reset

### Delete an Account
- <u>Good practice:</u>
	- Deleting accounts that are not in use
	- Failure to do so could expose a company to security risks
- <u>When an account is deleted:</u>
	- Its **globally unique identifier (GUID)** is also deleted and will not be reused even if you create another account using the same name

> **Recovering a deleted account**
> - By default, the Active Directory Recycle Bin is off

## Security Group Management
- For resource permissions management, one of the best ways to manage accounts is by grouping accounts that have similar characteristics
- **Scope of influence**
	- The reach of a group for gaining access to resources in Active Directory
- <u>Types of groups:</u>
	- Local
	- Domain local
	- Global
	- Universal


> **Note:** local group is not part of the Active Directory, 
> - Only exists and visible in the machine where it belongs
> - A local group can take in members from the Active Directory but not the vice-versa

- All of these groups can be used for security or distribution groups

| Security Groups                                                                  | Distribution Groups                                                                  |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Used to enable access to resources on a standalone server or in Active Directory | Used for email or telephone lists to provide quick, mass distribution of information |
| The resources access permission is simply implementing via group membership                                                                                 |                                                                                      |

#### Properties of Groups
- Properties of specific groups can be configured
	- Through Local Users and Groups tool for local groups or;
	- In the Active Directory Users and Computers tool for domain groups
- Properties are configured using the following tabs:
	- General
	- Members
	- Member Of
	- Managed By

#### Organizational Units (OU) vs Security Groups
- Group Policies applied to OUs (e.g. password changes)
- Delegation of authority are also applied to OUs
- Security groups are used to assign file and folder permissions, shared folder permissions and any type of resources permissions

> **Extra Information:**
> - User group policy settings also control other settings with serious security implications

### Implementing Local Groups
> **Local Security Groups** are used to manage resources on a standalone computer that is not part of a domain and on member servers in a domain
- Instead of installing Active Directory, you can divide accounts into local groups
	- Each group would be given different security access based on the resources at the server

### Implementing Domain Local Groups
> **Domain Local Security Groups** are used when Active Directory is deployed
> - Typically used to manage resources in a domain and give global groups from the same and other domains
> - Give global groups from the same and other domains access to those resources

- Scope of a domain local group is the domain in which the group exists
- Typical purpose of a domain local group is to provide access to resources
	- Grant access to servers, folders, shared folders, and printers to a domain local group
- Only put domain local groups in access control lists
	- Members of the domain local groups should mainly be global groups

- **Membership Capabilities of a Domain Local Group**

| Active Directory objects that can be members of a domain local group                                           | Active Directory objects that a domain local group can join as a member                                           |
| -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| User accounts in the same domain                                                                               | Access control lists for objects in the same domain e.g. permissions to access a folder, shared folder or printer |
| Domain local groups in the same domain                                                                         | Domain local groups in the same domain                                                                            |
| Global groups in any domain in a tree or forest (as long there are transitive or 2-way trust relationships)    |                                                                                                                   |
| Universal groups in any domain in a tree or forest (as long there are transitive or 2-way trust relationships) |                                                                                                                   |

### Implementing Global Groups
> **Global Security Group**
> - Intended to contain user accounts from a single domain
> - Can also be set up as a member of a domain local group in the same or another domain

- Global groups can container user accounts and other global groups from the domain in which it was created
- Can be converted in a **universal group**
	- As long as it is not nested in another global group or universal group

> **Typical use for a global group:**
> - To build it with accounts that need access to resources in the same or other domain
> - Make global group in one domain a member of a domain local group in the same or other domain
> - Enables one to manage user accounts and their access to resources through one or more global groups (while reducing the complexity of managing accounts)

### Implementing Universal Groups
> **Universal Security Groups** - Provides a means to span domains and trees

- Universal group membership can include user accounts from any domain, global groups from any domain and other universal groups from any domain