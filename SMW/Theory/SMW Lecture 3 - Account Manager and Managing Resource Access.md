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

### Move an Account
- When an employee moves from one department to another
	- Might need to move that person's account from one container to another

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

### Implementing Local Groups
- **Local Security Group**
	- Used to manage resources on a standalone computer that is not part of a domain and on member servers in a domain
- Instead of installing Active Directory, you can divide accounts into local groups