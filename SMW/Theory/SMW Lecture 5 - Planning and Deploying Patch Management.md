# SMW Lecture 5 - Planning and Deploying Patch Management

###### tags: #SMW 

## Table of Contents
```toc
```

## Planning the Deployment of Service Packs and Hotfixes
- **Patch Management**
	- Method of keeping computers up to date with new software releases
- **Security Patch Management**
	- Patch management with a concentration on reducing security vulnerabilities are essential for secure IT management and operations

## How to Manage Updates
- Microsoft Update and Automatic Updates
- Windows Server Update Services (WSUS)
- Microsoft Endpoint Manager
	- Comprises of many configuration tools
- Microsoft System Centre Configuration Manager
	- including software deployment management

### Microsoft Update and Automatic Updates
- For consumers and small businesses with fewer than **50 computers**
- Updates can be installed with minimal or no user interaction
- Uses internet connection to search for downloads from Microsoft's update website
- Does not need to understand the technical details of the security update
- Microsoft cautions that users should ensure they do not have applications that can be affected by the updates
- **Price:** free for licensed users

### Windows Server Update Services (WSUS)
- For medium or large businesses
- Administrators can manage update settings and control the distribution of updates
- Administrators can test updates on selected computers before deploying to the rest of the network
- Updates can be downloaded once from the Microsoft Update website and stored on the local server to free up internet bandwidth
- Does not support deployment of non-Microsoft updates
- **Price:** free for licensed users
- **Advantages:**
	- Sysadmins can control the updates to be applied
	- Clients can be configured to get updates from a local WSUS server instead of downloading them from Microsoft's site - reduces network traffic
	- Means to provide updates to computers that do not have Internet access
- **Limitation:**
	- Does not support updates from Microsoft

![](https://i.imgur.com/fTVRSVE.png)

> - Diagram depicts how a local WSUS server obtains Windows Update files
> - Gets them from the common Microsoft Update Services server from the Internet
> - Local WSUS server acts as an agent to maintain a curated update repository to provide enterprise level control to distribute these updates accordingly

### Microsoft Endpoint Manager
- Supports management and distribution of Microsoft and non-Microsoft software updates and applications
- Supports various types of endpoints on Windows and non-Windows platforms
- Has advanced administrator control features
- **Price:** charges apply

### Security Update Guide
- Formally known as the Security Bulletin
- Contains detailed guidance and information about the security update and the vulnerability
- Supporting search and filter features to locate specific entries

### Security Technical Security Notifications
- A few free of charge notification services for sign-up users
- <u>Security Update Email Alerts</u>
	- provide new or major revision Microsoft product security content
- <u>Security Advisories Alerts</u>
	- helps administrators plan for the coming security updates

## WSUS Server
- <u>Hardware Requirements:</u>
	- assuming that WSUS clients are in sync with the server every 8 hours for rollup of 30,000 clients
	- **Processor:** 1.4GHz, x64 (2GHz or faster is recommended)
	- **Memory:** additional 2GB of RAM
	- **Available disk space:** 40GB
- <u>Software Requirements:</u>
	- Must be running on IIS with a few other Windows components

## WSUS Features
- Administrators must approve updates before WSUS clients can install them
- WSUS clients can be controlled by Group Policy to connect to WSUS server
- WSUS server can maintain update status of all clients

## WSUS Operations
### Configuring the WSUS Server
- WSUS server needs Internet access to Microsoft Update server to get information about security updates **(synchronization)**
- Initial synchronization may take awhile depending on the selection choices

### Performing Software Update Services
- WSUS has two logs for tracking events
	- Synchronization
	- Approval
- **Synchronization Log Information**
	- Time of the last and next scheduled synchronization
	- Success and failure notification
	- Update packages that have been downloaded or updates since the last or failed synchronization
	- Whether synchronization was manual or automatic
- **Approval Log**
	- Keeps track of the content that has been approved or not approved

### Content Synchronization
- During synchronization, new security updates can be handled via two methods:
	- Automatically approve new versions of previous approved updates
	- Do not automatically approve new versions of approved updates
- In a testing environment, the second options is better
	- otherwise, testers may overlook and skip the testing of the new updates

### WSUS Policy Options for Clients
![](https://i.imgur.com/NZdwE4s.png)

### WSUS Computer Groups
- WSUS Clients can be placed into computer groups
- Sample usage: some clients can be put into a test computer group
	- Administrator approve new security updates for the test group
	- Computers in the test group apply the updates
	- Administrators test the results before allowing other computers to apply the updates
- Sample usage: servers with the same roles can be put into the same group
	- They can receive relevant updates at the same time
	
## Patch Management
![](https://i.imgur.com/KqPPgqW.png)

### Managing Updates Through Stages
- Receive Microsoft Security Release Communications
- Evaluate Risk
- Evaluate Mitigation
- Deploy Updates
- Monitor Systems

### Receive Microsoft Security Release Communications
- Microsoft sends out a notification if there is an issue affecting customers' security
- If security changes are needed, security update is released
- <u>Patch Tuesday</u>
	- Security updates and the corresponding security bulletin normally released on the second Tuesday and sometimes fourth of the month
- <u>Exploit Wednesday</u>
	- This term was coined as many exploitation events were seen shortly after the release of a patch
- Since 2015, Microsoft release security updates to home PCs, tablets and phones as soon as they are ready while enterprise customers will stay on the monthly update cycle
- Urgent updates are released immediately
- There are several ways to receive information about updates from Microsoft:
	- Email (Security Notification Service Comprehensive Edition)
	- RSS (Comprehensive Alerts)
	- Twitter
	- Security Update Portal

### Evaluate Risk
- <u>Questions administrators should ask:</u>
	- Does the vulnerability apply to the organisation?
	- Does the vulnerability represent a risk high to the organisation
- Deployment of a security update has a cost:
	- Cost of testing the updates
	- Costs of deploying the updates
	- Supports costs in case of any negative result after the update

#### Severity Ratings
| Rating    | Description                                                                                                                                                                   |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Critical  | Vulnerability whose exploitation could enable propagation of an Internet worm with little or no user action                                                                   |
| Important | Vulnerability whose exploitation could result in compromise of confidentiality, integrity or availability of users' data or integrity or availability of processing resources |
| Moderate  | Vulnerability whose exploitation is mitigated to significant degree by factors e.g. default configuration, auditing or difficulty of exploitation                             |
| Low       | Vulnerability whose exploitation is extremely difficult or whose impact is minimal                                                                                            |

### Evaluate Mitigation
- While administrators are evaluating security updates, some short-term security control can be applied
- For example, adjust the firewall policies or restrict a port only to a specific subnet instead of the whole network
- Microsoft may provide some suggested mitigation or workarounds in their security advisories if the security update cannot be applied immediately
- Such mitigations and workarounds are meant for short-term use and do not replace security updates

### Deploy Updates
There are six steps to deploy an update:
- <u>Plan the deployment</u>
	- Determine which updates need to be rolled out quickly and which ones can be subjected to a more thorough testing process
	- Have a deployment schedule
- <u>Determine whether the security update is available for download</u>
	- If there is no security update available, Microsoft advises appropriate actions to take to protect the computer systems
- <u>Obtain the required update files</u>
	- Security update files can be obtained from several sources:
		- Microsoft Security Guide
		- Microsoft Deployment Tools (Microsoft/Windows Update, WSUS, Endpoint Manager)
		- Microsoft Download Center
		- Microsoft Update Catalog Service
- <u>Create the update package</u>
	- If security updates need to be customized
- <u>Test the package</u>
	- To ensure that business-critical systems will continue to run successfully after the security update has been deployed
	- To ensure that package can be uninstalled or there is a way to rollback
	- To ensure the system can be restarted properly
	- To ensure that the update is effective
- <u>Testing update</u>
	- **Test Environment**
		- Test lab with computers mirroring the actual environment
		- Extra overhead incurred
	- **Pilot Environment**
		- Test on selected production computers
		- Authentic
		- Test the deployment plan
		- Extra risk incurred
- <u>Rolling out the deployment</u>
	- Carry out the deployment of the update to the computers that need it
	- Compliant to the Standard Patch Deployment Timeline

### Monitor Systems
- Determine which systems successfully deployed the update and which systems did not
- **Possible reasons why update was not successfully deployed**
	- Computer is offline
	- Computer is being rebuilt or reimaged
	- Computer has insufficient disk space
	- Computer is not communicating with the update server
	- Required update client software is not running on the computer
	- The computer missing some dependent software
- Need to resolve the problem and get update applied

## Post-Deployment Review
- Conducted after the deployment
- Review includes the following steps:
	- Review organisation's performance during incident
	- Discuss changes to service windows
	- Assess the total incident damage and cost if there are any
	- Update the existing baseline for your environment

## Common Approaches to Fix Windows Update Errors
- **Check disk storage**
	- System may not have sufficient disk storage to support download and installation requirement
- **Windows Update Catalog**
	- Download specific update package from windows update catalog website
- **Windows Update Troubleshooter**
	- Free tools from Microsoft which can fix most of the common Windows update errors