# SMW Exam Summary

###### tags: #SMW 

## Table of Contents
```toc
```

## Lecture 4 (Part 2) - Group Policies
### Overview of Group Policies
- **Definition of Group Policies:**
	- Enables users to standardize working environment of clients and servers by setting policies in the Active Directory
- **Name characteristics of Group Policy:**
	- Can be set of a site, domain, OU or local computer
	- Cannot be set for a non-OU folder container
	- Stored in Group Policy Objects (GPO)
	- Can be local or nonlocal
	- Can be set up to affect user accounts and computers
	- When updated, old policies are removed or updated for all clients
- **Name several types of security policies:**
	- Account Policies
	- Audit Policies
	- User Rights
	- Security Options
	- IP Security Policies

#### Account Policies
- **Definition of Account Policies:**
	- Security measures in Group Policy that applies to all accounts (or in a container) when Active Directory is installed
- **What are the three main areas affected by Account Policies?**
	- Password Security
	- Account Lockout
	- Kerberos Security

##### Password Security
- **What are some password security settings that can be managed by GPOs?**
	- Enforce password history
	- Maximum password age
	- Minimum password length
	- Complexity requirements
	- Storing passwords with reversible encryption

##### Account Lockout
- **Definition of Account Lockout**
	- Bars access to an account including the true account owner after a number of unsuccessful tries
	- Lockout can be set to be released after a specific period of time (or by intervention of administrator)
- **What are the pros and cons of account lockout?**
	- **Advantages:**
		- Prevents brute force attacks or password cracking
	- **Disadvantages:**
		- Create opportunities for Denial of Service attacks
- **What are some account lockout parameters?**
	- Account lockout duration
	- Account lockout threshold
	- Reset account lockout count after

##### Kerberos Security
- **Definition of Kerberos Security:**
	- Uses tickets that are exchanged between <u>client who requests logon</u> and <u>network service access</u> and the <u>server that grants access</u>
- **How does Kerberos Security work?**
	- Each domain controller is a key distribution centre (KDC
	- Once user is authenticated, Kerberos ticket-granting service grants permanent ticket to that computer
	- Service ticket is good for the duration of the logon session
- **What are the enhancements made to Kerberos Security on Windows Server 2016 and Windows 10?**
	- AES encryption
	- When Active Directory installed, account policies enable Kerberos
	- When Active Directory not installed, default authentication is via NTLMv2
- **What are some options for configuring Kerberos?**
	- Enforce user logon restrictions
	- Maximum lifetime for service ticket
	- Maximum lifetime for user ticket
	- Maximum tolerance for computer clock synchronisation

#### Audit Policies
- **What are some events that organisations can audit?**
	- Account logon
	- Account management
	- Directory service access
	- Logon events at local computers
	- Object access
	- Policy changes
	- Privilege use
	- Process tracking
	- System events

#### User Rights Configuration
- **What are two general categories of rights?**
	- **Privileges**
		- Generally relate to the ability to manage server or server functions
	- **Logon Rights**
		- Related to how accounts, computers and services are accessed
- **What are some examples of privileges?**
	- Adding workstations to domain
	- Backing up files and directories
	- Changing system time
	- Creating permanent shared objects
	- Generating security audits
	- Loading and unloading device drivers
	- Performing volume maintenance tasks
	- Shutting down the system
- **What are some examples of logon rights?**
	- Accessing a computer from the network
	- Allowing logon locally
	- Allowing logon through Remote Desktop Services (RDS)
	- Denying access to a computer from the network
	- Denying logon as a service
	- Denying logon locally
	- Denying logon through RDS

#### Configuring Security Options
- **Categories of Security Options:**
	- Accounts
	- Audit
	- DCOM
	- Devices
	- Domain Controller
	- Interactive logon
	- Microsoft Network Client
	- Network Access
	- Network Security
	- Recovery Console
	- Shutdown
	- System Cryptography
	- System Objects
	- System Settings
	- User Account Control

#### Policy Application Order and Troubleshooting
- **Order of Precedence of Group Policies: (LSDOU)**
	- Local
	- Site
	- Domain
	- OU

##### Policy Application Order
- **Block Inheritance**
	- Prevents inheriting GPOs from parent
- **Enforced**
	- Force down all child containers and win all setting conflicts
	- Takes the highest precedence
- **What if there are two policies at domain level conflicting each other?**
	- Policy with lowest link order number is applied last
- **What can be done to avoid complexity in group policies?**
	- Limit the number of GPOs
	- Minimize the use of Block Inheritance and Enforced

### Resultant Set of Policy



## Tutorial Revision Questions