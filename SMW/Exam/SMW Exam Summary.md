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
		- **Reasons:**
			- Reduces network performance
			- Configuration of IPSec policies are complicated
	- Securing all traffic in a network
		- **Reasons:**
			- Reduces network performance
			- Multicast and broadcast traffic is unsupported
			- Network tools that need to inspect packet headers may not work

#### IPSec Security Solutions
| Concern                                                                | Solution                                                                                                                                                                |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Attacks using specific protocols or ports or Denial of Service attacks | Use IPSec traffic blocking, packet filtering or policy filter lists allowing only traffic from trusted sources over specified protocols to specific addresses and ports |
| Eavesdropping or sniffing                                              | Use the Encapsulating Security Payload (ESP) protocol to encrypt data with 3DES or DES                                                                                  |
| Identity spoofing                                                      | Use Kerberos, public key certificates or pre-shared key authentication to verify the identity of the computer                                                           |
| Modification of data                                                   | Use cryptographic checksum that incorporates secret key to provide data integrity                                                                                       |

#### Proper Usage of IPSec
- Packet filtering such as using IPSec with routing and Remote Access service to permit or block inbound or outbound traffic
- Secure host-to-host traffic on specific paths
- Secure traffic to servers
- Combine LT2P and IPSec for securing VPN connections
- Implementing site-to-site or gateway-to-gateway tunnelling
- **Recommendations based on network devices**
	- In simple networks, one IPSec policy can be designed with multiple rules
	 - In larger networks, many different IPSec policies can be designed
- **What are some factors the increase the number of policies required?**
	- Computer roles
	- Sensitivity of data travelling over the network
	- Computer OS
	- Domain relationships and memberships
	- Number of applications that require IPSec

#### Elements of a Rule
- **Five configurable elements of each rule:**
	- Connection Type (LAN, Remote, All)
	- Mode (Transport or Tunnel)
	- Filter List
	- Host-to-Host Authentication Method (used by IKE Phase 1)
	- Filter Action (AH or ESP)
		- Negotiated in IKE Phase 2 and carried out the agreed scheme in actual traffic

#### Deciding what IPSec Mode to Use
| Transport Mode                                                                                    | Tunnel Mode                                                                                                        |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Used to secure communications within a network and it can be server-to-server or server-to-client | Used to secure communications between networks                                                                     |
| IPSec provides end-to-end policy                                                                  | Primarily used for interoperability with gateways or end systems that do not support L2TP site-to-site connections |

- **In summary:**
	- IPSec protection caters to systems in LAN
	- Use transport mode by default
	- Use tunnel mode if connections involve WANs

### IPSec Filters
- Specification in the IPSec rule that is used to match IP packets
- Filters are grouped together in a systemwide filter list
- In the IPSec rule properties setting, systemwide filter list will be available for the choice of the filter
- Packets which match a filter will be applied with the associated filter actions e.g. permit, block or negotiate security
- **Caveat**
	- System configured with IPSec may not apply the expected security scheme because the filter is set wrongly
	- When the network traffic does not match the IPSec, it will not be blocked but it will just pass through
- Filter list identifies traffic based on its source, destination and protocol
- **What types of traffic do filter lists identify on Windows 2003 and Windows 2008**
	- ICMP traffic
	- IP traffic
- **What are some examples of filter actions on Windows 2003 and Windows 2008**
	- Permit
	- Request Security
	- Require Security
- **How can IPSec policies be managed:**
	- Creating new policies and define the rules for the policy as required
	- Create the set of filter lists and filter actions, create the policies and add rules combining the filter lists with filter actions

### Authentication Methods for IPSec
- **What are the available authentication methods for IPSec?**
	- Kerberos v5
	- Certificates (requires PKI)
	- Pre-shared Key

> - Authentication is done using the Diffie-Hellman asymmetric key
> - IKE Phase 1 is invoked for initial authentication
> - More than one method can be selected with designated priority level

#### Kerberos v5
- **Description:**
	- Default authentication method for Windows Server 2000 or later
	- Based on mutual authentication
- **When should Kerberos be used?**
	- When all clients can authenticate using Kerberos

> Method that requires the least administrative method

#### Certificates
- **Description**
	- Method of granting access to users based on their unique identification
- **When are certificates used?**
	- Used in situations including access to corporate resources, external business partner communications or computers that do not run Kerberos v5

#### Pre-Shared Key
- **When should pre-shared keys be used?**
	- When other methods are not viable

### Configuring IPSec Policies Between Networks and Hosts
| Security Requirement                                                                                        | Authentication Method  |
| ----------------------------------------------------------------------------------------------------------- | ---------------------- |
| Communication within a Windows 2000 or Server 2003 or between trusted Windows 2000 or 2003 domains          | Kerberos V5            |
| Communication outside the domain or across the Internet where Kerberos V5 is not available but CA access is | Public Key Certificate |
| Communication with computers that neither support Kerberos V5 nor have access to a CA                       | Pre-shared key         | 

#### Filter Action
- **When will filter actions trigger?**
	- When incoming or outgoing connections match the filter
- **What are the available types of filter actions?**
	- Permit
	- Block
	- Negotiate Security (IKE Phase 2)

#### Encryption Levels
- **Two categories of encryption**
	- Symmetric key encryption
	- Public key encryption

#### Hashing
- **What are the types of hashing algorithms?**
	- <u>Secure Hash Algorithm (SHA)</u>
		- Uses 160-bit encryption key
		- Most secure method
	- <u>Message Digest 5 (MD5)</u>
		- Uses 128-bit encryption key
		- Lower performance than SHA
- **Purpose of Hashing:**
	- Support Authentication Header (AH) traffic

#### Encryption
- **What are the types of encryption methods used?**
	- <u>Data Encryption Method (DES)</u>
		- Uses 56-bit key
		- Not very secure
	- <u>Triple Data Encryption Method (3DES)</u>
		- 168-bit key
		- Provides medium to high security to networks

### IPSec Protocols
| Requirement                                                                                  | Protocol   | Solution                                                                                                                                                          |
| -------------------------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Data and header need to be authenticated and protected from modification but remain readable | AH         | Use in situations where data is not confidential but must be authenticated or where network intrusion detection or firewall filtering requires traffic inspection |
| Only data needs to be protected so its unreadable but IP addressing can be left unprotected  | ESP        | Use when data must be kept confidential such as file sharing, database traffic or internal web applications that have not been adequately secured                 |
| Both the header and data need to be protected while data is encrypted                        | AH and ESP | Use for the highest security and if possible, use ESP alone instead                                                                                               |

#### IPSec Packets
- **AH Transport Mode**
![](https://i.imgur.com/ICxKYpV.png)

**ESP Transport Mode**
![](https://i.imgur.com/78ZapBF.png)

- **Reasons for using tunnel mode:**
	- Tunnel mode uses double encapsulation
	- Suitable for protecting traffic between network systems like untrusted medium on the Internet
- **What are the differences between AH tunnel mode and ESP tunnel mode?**

| AH Tunnel Mode                                                                                  | ESP Tunnel Mode                                                                                                     |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Encapsulate IP packet by placing an AH header between internal IP header and external IP header | IP packet is the first encapsulated with an ESP header then the result is encapsulated with an additional IP header |

**AH Tunnel Mode**
![](https://i.imgur.com/syCbZbu.png)

**ESP Tunnel Mode**
![](https://i.imgur.com/suPGkMv.png)

### Deploying IPSec Policies
- **How can IPSec policies be deployed?**
	- <u>Local policy objects</u>
		- Enable IPSec for computers that are not members of a domain
	- <u>Group policy objects</u>
		- IPSec policy is propagated to any computer accounts that are affected by GPO
	- <u>Command-line tools</u>
		- `netsh` IPSec command in Windows Server 2003-2008

> IPSec configurations can be done via the Windows Defender Firewall Advanced Security Settings (WFAS)

#### Group Policy Objects
- **What are some factors to consider when selecting GPOs for IPSec policy assignments?**
	- Precedence of assignment: LSDOU
	- Persistent IPSec policy has the highest precedence though it is stored on the local computer
		- Effective and cannot be overwritten
	- IPSec policies from different OUs are never merged
	- For domain-based IPSec policy, limit the number of rules to 10 or less
	- Create and apply an IPSec policy at the domain level to provide a baseline of IPSec protection
	- Use Export and Import Policies commands in the IP Security Policy Management console to backup and restore IPSec policy objects
	- Adequately test the impact of the new IPSec policies before assigning them into the domain

#### Default IPSec Policies
- **Client (Respond Only)**
	- Secures communication only if the other computer requests for it
- **Server (Request Security)**
	- Accepts initial incoming communications that is unsecured
	- Requests for communication to be secured
	- Carries on with unsecured connection if client does not support it
- **Secure Server (Require Security)**
	- Accept initial inbound communication that is unsecured
	- Requires that all connections be secured

#### IPSec Policy Precedence
- **What should be taken note of when troubleshooting IPSec policies and their precedence?**
	- Only a single IPSeec policy can be assigned at a specific level in the Active Directory
	- IPSec policy assigned to an OU takes precedence over a domain-level policy for members of that OU
	- OU inherits the policy of its parent OU unless policy inheritance is explicitly blocked or separate policy is explicitly assigned to that OU
	- Before assigning an IPSec policy to a GPO, verify that the group policy settings required for IPSec policy
	- Use Enforce or Block Policy Inheritance carefully
- **Describe the procedure for deleting policy objects:**
	- Unassign the IPSec policy in the GPO
	- Wait 24 hours to ensure that the change is propogated
	- Delete the GPO
- **Persistent Policy:**
	- Provides maximum protection against attacks during computer start up
	- Adds or overrides local or Active Directory policy
	- Remains in effect regardless of whether other policies are applied
	- Backup security in case IPSec policy gets corrupted or if errors occur
	- Can be set using `netsh` at the local workstation

## Lecture 7 - PKI and Certificates
### Certificate Requirements
- **Purposes of certificates:**
	- Allow users or systems to prove to others that they are who they say they are
- **How are exchanged messages protected from eavesdropping attacks?**
	- Using asynchronous encryption algorithms
	- Key-pair is associated with the individual party
	- Each individual party keeps its private key a secret
	- Shares out its public key to everyone
	- Messages encrypted with public key, decrypted with corresponding private key
	- Digitally sign message with individual private key can only be verified with the corresponding public key
- **Description of PKI:**
	- Technology that includes series of features related to authentication and encryption
	- Based on a system of certificates
	- Each certificate contains public key and name of the subject
	- Allows organisation to publish, use, renew or revoke certificates and enrol clients
- **In what cases would certificates be required?**
	- Digital signatures
	- Secured email
	- HTTPS
	- SSL
	- Internet authentication
	- Software code signing
	- IPSec
	- Smart card logon
	- EFS
	- 802.1x authentication

### Certificate Authority
- **Definition:**
	- Entity that issues digital certificates to other parties
- **Root CA:**
	- Issues certificate to subordinate, immediate or issuing CAs
- **Issuing CA:**
	- Issues certificates to users or clients

#### Certificate Authority Hierarchies and Roles
- **What are the types of hierarchies that can be used for CAs?**
	- Rooted Trust Model
	- Cross-Certification Trust Model
	- Hybrid Trust Model
- **What roles can be chosen for CAs?**
	- <u>Standalone CA</u>
		- Rudimentary CA
		- Intermediate CA
	- <u>Enterprise CA</u>
		- Basic Security CA
		- Medium Security CA
		- High Security CA
- **What should be taken note of when setting up Standalone CAs?**
	- Target clients are not bound to the enterprise implementing the service
	- Appliable for offering to the general public
- **What should be taken note of when setting up Enterprise CAs?**
	- Target clients are within the enterprise
	- Suitable for internal staff and computing operations requiring the certificate services

| Type of CA      | Description                                                                                                                              |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Standalone CA   | CA that is not integrated with an existing PKI and enterprise                                                                            |
| Enterprise CA   | CA that is required to be a member of a domain or enterprise                                                                             |
| Rudimentary CA  | CA that issues certificates for the most basic user authentication without identity check                                                |
| Intermediate CA | CA that is signed by a superior CA (root or intermediate CA) and signs other CAs (intermediate or subordinate CA) on behalf of other CAs |
| Subordinate CA  | CA that is authorized by root CA to issue certificates in the root CA's name                                                             |
| Issuing CA      | CA that directly issues certificates to end users                                                                                        |

##### Rooted Trust Model
- **Description:**
	- Model in which the root CA has a self-signed certificate
	- CA issues a certificate to all direct subordinate CAs
- **What are the benefits to using this model?**
	- Can be online or offline
	- Allows flexibility in deploying and managing PKI
	- Each CA is individual within the hierarchy and independent of other CAs
	- Allows rooted trust hierarchies to be more scalable and easier to administer than other hierarchies
	- Can add a new CA to a hierarchy
- **What are the two subcategories rooted trust hierarchies fall into?**
	- Two-tier CA hierarchy
	- Three-tier CA hierarchy

> Any CA in a rooted trust hierarchy is either a root or subordinate CA but never both

- **What is the responsibility of each CA?**
	- To process requests, issue certificates, revoking certificates and publishing CRLs

![](https://i.imgur.com/hIr3Bgt.png)

##### Cross-Certificates Model
- **Definition:**
	- Model in which all CAs are self-signed
	- Trust relationships between CAs are based on cross-certificates
	- Certificates issued by one CA is trusted by computers which belong to the other CA hierarchy
	- Mutually trusted CAs issue digital certificates to each other
- **What are the advantages and disadvantages of using a cross-certificate model?**

| Advantages                       | Disadvantages                                                                                     |
| -------------------------------- | ------------------------------------------------------------------------------------------------- |
| Low cost and greater flexibility | Greater administrative overhead and increase risk of an unauthorized access to internal resources |

> Cross-certificates do not need to be bidirectional

##### Using Third-Party CAs
- **When would third-party CAs be useful?**
	- When organisations conduct most of their businesses with external customers or clients
- **What are some examples of third-party CAs?**
	- DigiCert
	- GlobalSign
	- GoDaddy
- **What are the advantages and disadvantages of using third-party CAs?**

| Advantages                                                                                                                             | Disadvantages                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Customers have greater degree of confidence when conducting secure transactions with organisations because they trust third-party CAs  | High per-certificate cost and allows less flexibility in managing certificates and auto-enrolment is not possible |
| Allows an organisation to take advantage of third-party CAs understanding of technical, legal and business issues with certificate use |                                                                                                                   |

#### Installing Certificates Authority Roles
- **What is the sequence to installing the CA roles?**
	- Root CA
	- Intermediate CA
	- Issuing CA

### Selecting Certificate Enrolment and Renewal Method
- **What is the selection of certificate enrolment and renewal method dependent on?**
	- Type of certificates to be used
	- Number and type of clients enrolled
- **What are the two methods of certificate enrolment?**
	- <u>Manual</u>
		- If admin approval is required
		- Useful for issuing and renewing computer and IPSec certificates
	- <u>Automatic</u>
		- If no approval is required, it can improve admin control over certificate
- **What are some methods for auto-enrolment?**
	- Certificate auto-enrolment and renewal
		- based on a combination of Group Policy settings and certificate templates
	- Certificate Request and Certificate Renewal Wizards
	- Web enrolment support pages
	- Smart card enrolment station

### Configuring Certificate Templates
- **Description:**
	- Windows utility to help CA admin to facilitate different types of enrolment
- **Certificate Services:**
	- Provide certificate templates to simplify requesting and issuing of certificates
	- **What does each template contain?**
		- Rules and settings that can serve single or multiple purposes
	- Provides default input requirement for different types of certificates - reduces errors and make operations more efficient
- **Where are Certificate Templates only available on?**
	- Enterprise Root CAs
	- Subordinate CAs
- **Where are Certificate Templates stored?**
	- In the Active Directory
- **Where are Certificate Templates available to?**
	- Every enterprise CA in the forest
- **What does the Certificate Templates MMC Snap-in provide administrators the capability to?**
	- Create additional templates (by duplicating and modifying existing templates)
	- Modify template properties to certificate enrolment, issuance and application
	- Allow auto-enrolment of certificates
	- Configure ACLs on certificate templates
- **How can issuance of certificate requests be controlled?**
	- Configure permissions on the template on the Security tab
	- Delete the template to prevent CA from issuing a certificate type
	- Configure the permissions on the CA
- **How to ensure security of certificate templates?**
	- Restrict permissions on CA to prevent unauthorised access
	- Configure discretionary access control list (DACL) for each template

### Configuring Archival and Recovery of Keys
- **What are two approaches to generating key pairs?**
	- <u>First Approach</u>
		- Certificate owner first creates a key pair and send public key to CA to ask for services
		- Enclose the public key into digital certificate with CA's digital signature
		- CA does not know the owner's private key
	- <u>Second Approach</u>
		- Certificate owner asks for comprehensive service from CA to generate key pair and seal public key in digital certificate

> It is possible to configure the CA to archive private keys of certificates at the time of issuance

**What are some possible key recovery methods?**
- Key Recovery Agent
- `certutil` tool
- `krt.exe`

### Deploy and Revoke Certificates
- **What are the conditions to auto-enrol certificates?**
	- Client computer must be integrated into the Active Directory
	- Users require read, enrol and auto-enrol permissions
- **What are some reasons for revoking a certificate?**
	- Certificate is compromised
	- Termination of account to whom the certificate was issued

#### Certificate Revocation Lists
- **Description:**
	- Place where revoked certificates are published in
- There is a need to invalidate or revoke a certificate before the end of its lifetime
- CRLs are valid for a limited amount of time
- PKI clients need to retrieve a new CRL periodically
- CRL location must be defined along with the access path before deploying certificates

#### Online Certificate Status Protocol (OCSP)
- **Definition:**
	- Internet protocol used for obtaining the revocation status of an X.509 digital certificate
	- Complements the operations of the CRLs (does not replace it)

##### OCSP Responder
- **Description**
	- Server that is run by the certificate issuer
	- Returns a signed response on the status of a particular issued certificate
- **What are the possible responses?**
	- Good
	- Revoked
	- Unknown
	- No response if the issuer does not implement the responder service
- **How does the OCSP Responder compare to the Certificate Revocation List (CRL)?**
	- Less burden on the client to maintain the CRLs in terms of network and storage
	- Easier to implement compared to CRLs for up-to-date checking
	- OCSP uses non-encrypted messages which may be subject to interception
	- OCSP is optional for the certificate server

### Secured Web Access
- **Explain some issues related to non-secure web access?**
	- Issue with the authentication of a remote server's identity
		- **Example:** hackers may setup phishing site to mislead clients to submit confidential information or pay for non-existent service
	- Issue of ensuring that the transferred content is not tampered with or intercepted by unauthorised parties
- **What is a possible solution to secure web access?**
	- SSL Certificates

#### SSL Certificates
- **Definition of SSL:**
	- Stands for Secure Socket Layer
	- Public key based security protocol
- **What does SSL process?**
	- Certificates for authentication
	- Encryption for message integrity and confidentiality
- **What are the requirements for establishing encrypted communications using SSL?**
	- Installation of valid server certificate
- **What are some SSL features of IIS?**
	- Server certificate
	- Client certificate
	- Digital keys
- **What are some ways to obtain certificates?**
	- Certificate Services
	- Trusted third-party CAs

##### IIS Authentication Methods
| Method                            | Security Level           |
| --------------------------------- | ------------------------ |
| Anonymous authentication          | None                     |
| Basic authentication              | Low                      |
| Forms authentication              | Low or Medium (with SSL) |
| Digest authentication             | Medium                   |
| Advanced digest authentication    | Medium                   |
| Certificate authentication        | High                     |
| Integrated Windows authentication | High                     |
| .NET Password (IIS5/IIS6)         | High                     |
| Windows Live ID (IIS7 or later)   | High                     |

#### HTTPS
- **Definition:**
	- Technology that encrypts individual messages in communications rather than establishing a secure channel
- **What port does HTTPSS communicate on?**
	- Port 443
- **Prefix of SSL-Secured URLs:**
	- `https://`

#### Web Server Configuration for SSL Certificates
- **Reasons for using SSL encryption:**
	- Encrypted transmissions significantly reduce transmission rates and server performance
	- Server certificate provide a way for users to confirm the website identity
- **What does a server certificate contain?**
	- Organisation name affiliated with server content
	- Name of organisation issuing the certificates
	- Public key used to establish an encrypted connection

#### Self-Issued Certificates
- **What are some considerations to take note of when deciding to issue own server certificates?**
	- Microsoft Certificate Services supports different certificate formats and provide auditing and logging of certificate-related activity
	- Evaluate the cost of each certificate
	- Take into account the learning curve
	- Evaluate willingness of outside vendor clients to trust your organisation as a certificate supplier

#### Publicly-Issued Certificates
- **When are publicly-issued certificates used?**
	- When user suspects self-issued certificates

> Can be obtained from the mutually trusted third-party CA

- **What is the wait time for publicly-issued certificates?**
	- Several days to several months
- **What are some general rules to follow about any type of web certificates?**
	- Each website can only have one server certificate assigned to it
	- One certificate can be assigned to multiple websites
	- Multiple IP addresses can be assigned per website
	- Multiple SSL ports can be assigned per website

#### Configuration of Client for SSL Certificates
- **What information is typically contained in a client certificate?**
	- Identity of user
	- Identify of CA
	- Public key used for establishing encrypted communication
	- Validation information e.g. expiration date and serial number
- **How to protect web content from unauthorised access?**
	- Use Basic, Digest, Integrated Windows authentication in addition to requiring a client certificate
	- Create a Windows account mapping for client certificates
- **How does Windows account mapping work?**
	- Once a client system has presented its client certificate to the web server, client system can access the server with mapped user credential
	- Provides more convenience to user but higher security risk
	- Mapping is done manually by system administrator

### Certificate Renewal
- **What factors are security and renewal requirements for certificates based on?**
	- Value of network resources protected by Ca trust chain
	- Degree of trust of certificate users
	- Amount of administrative effort willing to devote to certificate and CA renewal
	- Business value of certificate
- **What is a renewal requirement?**
	- How often to renew a key-pair and certificate

| Certificate Purpose                            | Certificate Life | Renewal Recommendation                                                  |
| ---------------------------------------------- | ---------------- | ----------------------------------------------------------------------- |
| Enterprise CA for medium security certificates | 5 years          | Renew every 3 years and renew by using a new key at least every 5 years |
| Enterprise CA for high security certificates   | 5 years          | Renew with new key at least 4 years                                     |
| Enterprise CA for external certificates        | 5 years          | Renew at least every 4 years. Renew by using a new key every 5 years    |
| Secure mail and secure browser certificates    | 1 year           | Renew by using a new key at least 2 years                               |
| Smart card certificates                        | 1 year           | Renew by using a new key at least every 2 years                         |
| Administrator certificates                     | 1 year           | Renew by using a new key at least every 2 years                         |
| Secure Web Server certificates                 | 2 years          | Renew by using a new key at least every 2 years                         |

- **What are some similar but different certificate operations?**
	- All certificates have an expiry date
	- Renew a certificate before its expiry date
	- Since each certificate contains a public key for specific application, one type of renewal is just to create and sign on a new certificate containing the same public key
	- Public key owner can generate a new key-pair and replace the old public key with the new public key while renewing the certificate
	- Finally, signer should update its key-pair
	- Once signer's key-pair changes, a new root CA certificate should also be generated
	- To keep PKI operation running smoothly, multiple root CA certificates for the same CA organisation coexist in the Trust Root Certificate Authorisation Store

## Lecture 8 - Remote Access Service
### Remote Access Overview
- **Definition of Remote Access Service Role (RAS)**
	- Enables remote access via VPN, Direct Access and Web Application Proxy
- **Definition of Virtual Private Network (VPN)**
	- Tunnel though a larger network that is restricted to designated member clients only

### VPN Implementation
- **How do VPNs work?**
	- Uses an Internet connection or internal network connections as transport medium to establish a connection with VPN server
	- Uses LAN and tunnelling protocols to encapsulate data-in-transit across public network e.g. Internet
- **What are VPN used for?**
	- Ensure that any data sent across the public network is secure
	- Create an encrypted tunnel between client and RAS server
- **Benefits of using a VPN:**
	- Users can connect to a local ISP and connect through the ISP to the local network
- **What are some use cases of VPNs?
	- Secure communications between two sites
	- Secure communications between site with remote clients
	- Allow remote client to access resources offered by site
	- Provide secure Internet connection to remote client
		- Remote client establish VPN connection to site and use gateway of the site to access the Internet
- **What is the effect after a VPN connection is established?**
	- Remote client assigned a set of local IP address, DNS and gateway
	- Remote client can access all services offered by the site as if it is connected to the LAN directly
	- By default, all outgoing traffic from the remote client will first go to VPN server via the Internet
- **How many NICs does a VPN server use for communication?**
	- Two NICs
		- One used to connect to the private network inside the organisation using private IP addressing
		- Other used to connect to external public network
- **Process:**
	- To create a tunnel, client must first connect to Internet by establishing a connection using the remote access protocol
	- Once connected to the Internet, client establishes second connection to VPN server
	- Client and VPN server agree on how data will be encapsulated and encrypted across the virtual tunnel
- **What are some things to take note of when setting up a VPN?**
	- Do not use any of the domain controllers to be a VPN server
	- VPN server is public-facing and should be in the DMZ segment
	- Use Windows Server with 2 NICs to implement a VPN server








## Tutorial Revision Questions
### Lecture 4
