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
- 