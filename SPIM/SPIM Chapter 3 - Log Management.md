# SPIM Chapter 3 - Log Management

###### tags: #SPIM 

## Table of Contents
```toc
```

## Server Operating Systems
| Type    | Examples                                 |
| ------- | ---------------------------------------- |
| Windows | Windows Server 2012, Windows Server 2008 |
| Unix    | IBM AIX, HP UX, Solaris, OS X            |
| Linux   | Redhat Enterprise Linux, SUSE, Ubuntu    |
| Others  | z/OS (IBM)                               |

## Windows Server Logging
![](https://i.imgur.com/u3s1Zhc.png)

## Application Log
- Contains events logged by applications or programs
- Database program might record a file error in the application log
- Program developers decide which events to log

## Security Log
- Contains events such as valid and invalid login attempts and events related to resource use e.g. creating, opening or deleting files or other objects
- Administrators can specify what events are recorded in the security log
	- **Example:** if login auditing is enabled, attempts to login to the system are recorded as specified in the audit policy
- One of the primary tools used by administrators to detect and investigate attempted and successful unauthorized activity and to troubleshoot problems
- The log and audit policies that govern are favourite targets of hackers and rogue system administrators looking to cover their tracks before and after committing unauthorizing activity
- If audit policy is set to record logins, successful login results in the user and computer name being logged together with the username logged into

> - Depending on the Windows version and the method of login, IP address may or may not be recorded
> - For example, Windows Server 2000 does not log IP addresses for successful logins but Windows Server 2003 includes this capability

- **Category of events that can be logged:**
	- Account logon events
	- Account management
	- Directory service access
	- Logon events
	- Object access
	- Policy changes
	- Privilege use
	- Process tracking
	- System events
- Contains events logged by Windows system components
	- **Example:** failure of a driver or other system components to load during start-up is recorded in system log
	- Event types logged by system component are predetermined by Windows

## Applications and Service Logs
- Stores events from a single application or component rather than events that have systemwide impact