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