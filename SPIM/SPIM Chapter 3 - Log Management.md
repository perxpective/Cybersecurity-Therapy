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
- The log and audit policies that govern are favourite targets of hackers
	- Rogue sys