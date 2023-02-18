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
- **What is the purpose of Resultant Set of Policy?**
	- Used to make implementation and troubleshooting of group policies simpler for administrators
- **How does Resultant Set of Policy work?**
	- Queries the existing policies in place and then provide reports and results of policy changes
- **What does the command `gpuresult` do?**
	- Check current accepted and active GPOs

> - RSoP supports two modes: planning and logging

## Lecture 5 - Patch Management
### Overview
- **Definition of Patch Management:**
	- Method of keeping computers up to date with new software releases
- **Definition of Security Patch Management:**
	- Patch management with a concentration on reducing security vulnerabilities essential for secure IT management and operations

### Managing Updates
- **What are some ways to manage Windows updates?**
	- Microsoft Update Automatic Updates (MUAU)
	- Windows Server Update Services (WSUS)
	- Microsoft Endpoint Manager
	- Microsoft System Centre Configuration Manager

#### Microsoft Update Automatic Updates
- **Who is it most suitable for?**
	- Computers and small businesses with fewer than 50 computers
- **How does Microsoft Update Automatic Updates work?**
	- Updates are installed with minimal or no user interaction
	- Uses internet connection to search for downloads from Microsoft's update website
	- Does not need to understand technical details of security update
- **Price:**
	- Free for licensed users

#### Windows Server Update Services (WSUS)
- **Who is it most suitable for?**
	- Medium to large businesses
- **How does WSUS work?**
	- Admins can:
		- manage update settings and control distribution of updates
		- test updates on selected computers before deploying to the rest of the network
	- Updates downloaded once from Microsoft Update website and stored on local server - frees up Internet bandwidth
	- Does not support deployment of non-Microsoft updates
- **Price:**
	- Free for licensed users

| Advantages                                                                                                                                  | Disadvantages                           |
| ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| Sysadmins can control updates to be applied                                                                                                 | Does not support updates from Microsoft |
| Clients can be configured to get updates from local WSUS server instead of downloading them from Microsoft's site, reducing network traffic |                                         |
| Provides updates to computers that do not have Internet access                                                                              |                                         |

- **How does a local WSUS server get Windows Updates?**
	- WSUS server obtains Windows Update files from the common Microsoft Update Services from the Internet
	- Local WSUS server acts as agent to maintain curated update repository to provide enterprise level control to distribute these updates

#### Microsoft Endpoint Manager
- **Description:**
	- Supports management and distribution of Microsoft and non-Microsoft software updates and applications
	- Supports various types of endpoints on Windows and non-Windows platforms
	- Has advanced administrator control features
- **Price:**
	- Charges apply

### Security Update Guide
- **Description:**
	- Contains detailed guidance and information about security update and vulnerabilities
	- Supports search and filter features to locate specific entries

### Technical Security Notifications
- **Description:**
	- Few free of charge notification services for signup users
- **Security Update Email Alerts**
	- Provides new or major revision Microsoft product security content
- **Security Advisories Alerts**
	- Helps administrators plan for upcoming security updates

### WSUS Server
- **What are the hardware requirements for a WSUS server?**
	- **Assumption:** WSUS clients are in sync with the server every 8 hours for rollup of 30,000 clients
	- **Processor:** 1.4GHz, x64 (although 2GHz is recommended)
	- **Memory:** additional 2GB RAM
	- **Available disk space:** 40GB
- **What are the software requirements for WSUS server?**
	- Must be running on IIS and a few other Windows components
- **What are some features of a WSUS server?**
	- Admins must approve updates before WSUS clients can install them
	- WSUS clients can be controlled by Group Policies to connect to WSUS server
	- WSUS server can maintain update status of all clients

### WSUS Operations
#### Configuring the WSUS Server
- WSUS server requires Internet access to Microsoft Update Server to get information about security updates (synchronisation)
- Initial synchronisation may take awhile depending on the selection choices

#### Performing Software Update Services
- **What are two types of logs for tracking events?**
	- <u>Synchronisation</u>
		- Time of the last and next scheduled synchronisation
		- Displays success and failure notifications
		- Updates packages that have been downloaded or since the last or failed synchronisation
		- Whether synchronisation was manual or automatic
	- <u>Approval</u>
		- Keeps track of the content that has been approved or not

#### Content Synchronisation
- **During synchronisation, how are new security updates handled?**
	- Automatically approve new versions of approved updates
	- Do not automatically approve new versions of approved updates
	- In a testing environment, the second option is better
		- **Reason:** Testers may overlook and skip the testing of the new updates

#### Policy Options for Clients
| WSUS Policy Option                                   | Comments                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Notify for download and installation                 | User logged on with local administrator rights selects the option to download the update whenever the new "New update available for download" notification appears in the taskbar.<br>To complete the installation, user installs the software update when the "New update available for installation" notification appears                                                                              |
| Automatically download and notify for installation   | Automatic Updates client automatically downloads newly approved updates that apply to the client computer.<br>To install the updates, user logged on with local administrator rights need to select the option to install the software update when the "New software update available for installation" notification appears.                                                                            |
| Automatically download and schedule the installation | User logged on with local administrator rights can install an update before the scheduled installation time or delay the restart after installation completes<br>For users without administrator rights, updates will install in the background at the scheduled time. These users can only delay a restart if "No auto-restart for scheduled Automatic Updates installations" policy setting is enabled |

#### WSUS Computer Groups
- **What can WSUS computer groups be used for?**
	- Admins can approve new security updates for the test group
	- Computers in the test group apply the updates
	- Admins can test the results before allowing other computers to apply the updates
	- Servers with the same roles can be put into the same group where they can receive relevant updates at the same time

### Patch Management
- **What are the five stages in Patch Management?**
	- Receive Microsoft Security Release Communications
	- Evaluate Risk
	- Evaluate Mitigation
	- Deploy Updates
	- Monitor Systems

#### Receive Microsoft Security Release Communications
- **Description:**
	- Microsoft sends out a notification if there is an issue affecting customers' security
	- If security changes are needed, security update is released
	- Urgent updates are released immediately
- **Patch Tuesday**
	- Security updates and corresponding security bulletin normally released on the second Tuesday of every month
- **Exploit Wednesday**
	- Day after Patch Tuesday where exploits may appear in the wild as many exploitation events are seen shortly after a release of a patch
- **What are some ways to receive information about updates from Microsoft?**
	- Email
	- RSS
	- Twitter
	- Security Update Portal


#### Evaluate Risk
- **What are some questions an administrator should ask when evaluating a risk?**
	- Does this vulnerability apply to the organisation?
	- Does the vulnerability represent a risk high to the organisation?
- **What are the costs of deploying a security update?**
	- Cost of testing the updates
	- Costs of deploying the updates
	- Supporting costs in case of any negative result after the update

##### Severity Ratings
| Rating    | Description                                                                                                                                                                   |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Critical  | Vulnerability whose exploitation could enable propagation of an Internet worm with little or no user action                                                                   |
| Important | Vulnerability whose exploitation could result in compromise of confidentiality, integrity or availability of users' data or integrity or availability of processing resources |
| Moderate  | Vulnerability whose exploitation is mitigated to significant degree by factors e.g. default configuration, auditing or difficulty of exploitation                             |
| Low       | Vulnerability whose exploitation is extremely difficult or whose impact is minimal                                                                                            |

#### Evaluate Mitigation
- **Description:**
	- Short-term security measures that can be applied while admins are evaluating security updates
- **Examples:**
	- Adjusting the firewall policies
	- Restrict a port only to a specific subnet instead of the whole network

#### Deploy Updates
> 1. Plan the Deplyment
> 2. Determine whether security update is available for download
> 3. Obtain the required update files
> 4. Create the update package
> 5. Test the package
> 6. Test the update
> 7. Roll out the deployment

- **Explain how to deploy an update.**
	- <u>Plan the deployment</u>
		- Determine which updates need to be rolled out quickly and which ones can be subjected to a more thorough testing process
		- Have a deployment schedule
	- <u>Determine whether the security update is available for download</u>
		- If there are no security updates available, Microsoft advises appropriate actions to take to protect computer systems
	- <u>Obtain the required update files</u>
		- Security update files can be obtained from several sources:
			- Microsoft Security Guide
			- Microsoft Deployment Tools
			- Microsoft Download Centre
			- Microsoft Update Catalog Service
	- <u>Create the update package</u>
		- If security updates need to be customised
	- <u>Test the package</u>
		- Ensures that:
			- The business-critical systems will continue to run successfully after the security update has been deployed
			- The package can be uninstalled or rolled back
			- The system can be restarted properly
			- The update is effective
	- <u>Test the update</u>
		- **Test Environment**
			- Test lab with computers simulating the actual environment
			- Extra overhead incurred
		- **Pilot Environment**
			- Test on selected production computers
			- Authentic
			- Test the deployment plan
			- Extra risk incurred
	- <u>Roll out the deployment</u>
		- Carry out the deployment of the update to the computers that need it
		- Compliant to the Standard Patch Deployment Timeline

#### Monitor Systems
- **Description:**
	- Determines which systems successfully deployed the update and which systems did not
- **What are some possible reasons why an update is not successfully deployed?**
	- Computer is offline
	- Computer is being rebuilt or reimaged
	- Computer has insufficient disk space
	- Computer is not communication with the update server
	- Required update client software is not running on the computer
	- Computer missing some dependent software

### Post-Deployment Review
- **Explain how to conduct a post-deployment review.**
	- Review organisation's performance during the incident
	- Discuss changes to service windows
	- Assess the total incident damage and cost if there are any
	- Update existing baseline for environment

### Common Approaches to Fix Windows Update Errors
- **Describe some methods to fix common Windows Update errors.**

| Method                        | Description                                                                                  |
| ----------------------------- | -------------------------------------------------------------------------------------------- |
| Check disk storage            | System may not have sufficient disk storage to support download and installation requirement |
| Windows Update Catalog        | Download specific update package from Windows Update Catalog website                         |
| Windows Update Troubleshooter | Free tools from Microsoft which can fix most of the common Windows Update errors             |

## Lecture 6 - IP Security
### IPSec Concepts
- **Definition of IPSec:**
	- Set of protocols used to ensure private, secure communications over IP networks using cryptographic security services
- **What are the design principles of IPSec?**
	- Protect the contents of IP packets
	- Provide packet filtering
	- Enforce trusted communication
	- Secure communication of information travelling the network
	- Option for IPv4 implementation
- **What are some cyberattacks IPSec protects against?**
	- Source Spoofing
	- Replay Attacks
	- Denial of Service (DoS)

### IPSec Control Elements
- **What are three main security elements of IPSec?**
	- <u>Internet Key Exchange (IKE)</u>
		- Protocol for exchanging encryption keys
	- <u>Authentication Header (AH)</u>
		- Provides an authenticity guarantee for packets
	- <u>Encapsulating Security Payload (ESP)</u>
		- Provides confidentiality through encryption

#### IKE Module
- **Phase 1**
	- Initial security negotiation
	- Based on the authentication methods defined in IPSec rule
- **Phase 2**
	- Determining the secret keying material
	- Secure network communication
	- Related to the Filter Action setting of associated IPSec rule

### IPSec Implementation
- **How does IPSec communication works between two computers?**
	- Computers first negotiate using the IKE module and authenticate between the sender and receiver
	- Extra hashing scheme will help ensure data integrity at packet header
	- Data encrypted with integrity check at NIC of sending computer as it is formatted into an IP packet
- **Description of IPSec Security Policy:**
	- Establish through the Group Policy in the Active Directory
	- Configured through the IP Security Policies MMC snap-in
- **What is an advantage of using the Windows Firewall Advanced Security Rule?**
	- Provides more IKE authentication options and AES encryption support

### IPSec Trade-Offs
- **What are some things IPSec has an effect on?**
	- Time needed to establish IPSec connection
	- Time needed to filter and encrypt packet
	- Increased packet size
	- Network inspection technologies used in routers, firewalls, intrusion detection systems (IDS) may not work on IPSec packets
	- Application compatibility with other platforms
	- Effect on Active Directory and domain controller connections

### Planning an IPSec Deployment
- **What is the configuration of IPSec based on?**
	- The way IPSec is used
	- Types of client operating system in the network
	- Types of network devices in the network
- **In what scenarios where IPSec is not recommended?**
	- Securing communication between domain members and domain controllers





## Tutorial Revision Questions
### Lecture 4
