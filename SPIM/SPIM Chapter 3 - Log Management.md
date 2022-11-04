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

### Application Log
- Contains events logged by applications or programs
- Database program might record a file error in the application log
- Program developers decide which events to log

### Security Log
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

### Applications and Service Logs
- Stores events from a single application or component rather than events that have systemwide impact

### Event Properties
| Property Name    | Description                                                                                                                                                            |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Source           | Software that logged the event                                                                                                                                         |
| Event ID         | Number identifying the event type                                                                                                                                      |
| Level            | Information, Warning, Error, Critical Success Audit, Failure Audit (indicates exercise of a user right has succeeded or failed in security log)                        |
| User             | Name of user on whose behalf the event occurred<br>Client ID if the event was actually caused by the server process or primary ID if impersonation is not taking place |
| Operational Code | Contains numeric value that identifies the activity or point within active that the application was performing when it raised the event                                |
| Log              | Name of log where the event was recorded                                                                                                                               |
| Task Category    | Subcomponent or activity of event publisher                                                                                                                            |
| Keyword          | A set of categories or tags that can be used to filter or search for events                                                                                            |
| Computer         | Name of the computer on which the event occurred                                                                                                                       |
| Date and Time    | Date and time that the event was logged                                                                                                                                |

### Location of Logs
**Default locations:**
- `%SystemRoot%\System32\Winevt\Logs\Application.evtx`
- `%SystemRoot%\System32\Winevt\Logs\Security.evtx`
- `%SystemRoot%\System32\Winevt\Logs\System.evtx`

> Default locations can be changed using regedit or EventViewer

## Linux Operating System
- Usually packaged as different Linux distributions:
	- Debian, Ubuntu, Linux Mint, Fedora, Arch Linux, Red Hat Enterprise Linux and SUSE Linux Enterprise Server
	- Includes the Linux kernel supporting utilities and libraries and various application software for intended use

### Linux Log Management
- Most Linux applications use `syslog` or `rsyslog`
- Log files usually stored in `/var/log` directory
- Configuration file for **`syslog`** is `/etc/syslog.conf` and **`rsyslog`** is `/etc/rsyslog.conf`

> - **rsyslog** implements basic syslog protocol and extends it with content-based filtering capabilities, flexible configuration options and adds important features e.g. using TCP for transport

#### Syslog
![](https://i.imgur.com/2YcxpUq.png)

#### Rsyslog
![](https://i.imgur.com/WL9DbBk.png)

##### Rsyslog Rules
- Consist of two columns:
	- **Column 1:** list the facilities and severities of messages
	- **Column 2:** the files to which they should be logged to
- Severity level:
	- Emergencies, alerts, critical, errors, warnings, notifications, informational, debugging
- **Rules:**
	- Facility/priority-based filters
	- Facility refers to subsystem that produces specific syslog message e.g. `mail, auth, authpriv, cron, daemon, kern, lpr, news, syslog, user, uucp, local0-local7 etc.`
	- Priority `debug, info, notice, warn, err, crit, alert, emerg`
	- **Examples:**
		- `kern.*` - selects all kernel syslog messages with any priority
		- `mail.crit` - selects all mail syslog messages with priority `crit` and higher
		- `cron.!info, !debug` - selects all `cron` syslog messages except those with `info` or `debug` priority
- **Property-based filters:**
```powershell
# :<property>, [!]<compare_operation>, "<string>"
# Selects syslog messages that contain the string "error" in message.txt
:msg,contains,"error"
```
- **Expression-based filters:**
```powershell
# Example
$msg startswith 'DEVNAME'
```

##### Rsyslog Actions
- Saving syslog messages to log files
```powershell
# Examples

# Save syslog messages to log files
cron.* /var/log/cron.log

# Forwards messages to 192.168.0.1 via UDP Protocol
*.* @192.168.0.1

# Forwards messages to example.com usiing port 18 and TCP Protocol
*.* @@example.com:18
```

### Linux Auditing
- Linux kernel traps auditable events and writes them to buffers where they are processed by the `auditd` daemon
- e.g. Pluggable Authentication Module (PAM) reports login related events to audit log
- Admin can control what event and activity are audited by `/etc/audit/audit.rules` and `auditctl` command

### Linux Log Files
- Common Linux log files and default locations:
	- `/var/log/messages` > General message and system related objects
	- `/var/log/auth.log` > Authentication logs
	- `/var/log/kern.log` > Kernel logs
	- `/var/log/cron.log` > `Crond` logs
	- `/var/log/mailog` > Mail server logs
	- `/var/log/qmail` > Qmail log directory
	- `/var/log/httpd` > Apache access and error logs directory
	- `/var/log/lighttpd` > `Lighttpd` access and error logs
	- `/var/log/boot.log` > System boot log
	- `/var/log/mysqld.log` > MySQL database server log file
	- `/var/log/secure` or `/var/log/auth.log` > Authentication log
	- `/var/log/utmp` or `/var/log/wtmp` > Login records fiile
	- `/var/log/yum.log` > Yum command log file

### Internet Information Services (IIS)
- Extensible web server created by Microsoft for use with the Windows NT family
- Supports HTTP, HTTPS, FTP, FTPS, SMTP and NNTP
- Versions:
	- IIS 6.0 (Windows Server 2003)
	- IIS 7.0 (Windows Server 2008)
	- IIS 7.5 (Windows Server 2008 R2)
	- IIS 8.0 (Windows Server 2012)
	- IIS 8.5 (Windows Server 2012 R2)

#### IIS Logs
- Logging can be set to log per site or per entire server
- Log formats:
	- **IIS** - fixed ASCII text-based format and not customizable
	- **W3C** - most widely used, default log format, customizable
	- **NCSA** - default log format for Apache Web Server, ASCII text-based, not customizable
- **Configurable using:**
	- IIS Manager (UI)
	- Appcmd

#### W3C Log Format
- Default location: `%systemdrive%\inetpub\logs\logfiles\W3SVC1`
- Number after W3DVC designates the site ID of the website
- **Log rotation:**
	- Log file can be created hourly, daily, weekly or monthly or based on maximum
	- Use local server time or Coordinated Universal Time (UTC) for file naming and rollover

#### IIS Log Naming
| Log Interval | W3C Extended   | NCSA           | IIS            |
| ------------ | -------------- | -------------- | -------------- |
| Hourly       | exyymmddhh.log | ncyymmddhh.log | lnyymmddhh.log |
| Daily        | exyymmdd.log   | ncyymmdd.log   | lnyymmdd.log   |
| Weekly       | exyymmww.log   | ncyymmww.log   | lnyymmww.log   |
| Monthly      | exyymm.log     | ncyymm.log     | lnyymm.log     |
| Size         | extendnn.log   | ncsann.log     | lnetsvnn.log   |

#### W3C Log Fields

| Field                              | Description                                                                                         |
| ---------------------------------- | --------------------------------------------------------------------------------------------------- |
| Date (date)                        | Date on which the request occurred                                                                  |
| Time (time)                        | Time in UTC at which the request occurred                                                           |
| Client IP Address (c-ip)           | IP address of the client that made the request                                                      |
| Username (cs-username)             | Name of the authenticated user that accessed the server (Anonymous users are indicated by a hyphen) |
| Service Name (s-sitename)          | The site instance number that fulfilled the request                                                 |
| Server Name (s-computername)       | Name of the server on which the log file entry was generated                                        |
| Server IP Address (s-ip)           | IP address of server on which the log file entry was generated                                      |
| Server Port (s-port)               | The server port number that is configured for the service                                           |
| Method (cs-method)                 | The requested action                                                                                |
| URI Stem (cs-uri-stem)             | Universal Resource Identifier, or target of the action                                              |
| URI Query (cs-url-query)           | The query, if any, that the client was trying to perform (only necessary for dynamic pages)         |
| Protocol Stats (sc-status)         | HTTP or FTP status code                                                                             |
| Protocol Sub-status (sc-substatus) | HTTP or FTP sub-status code                                                                         |
| Win32 Status (sc-win32-status)     | Windows status code                                                                                 |
| Bytes Sent (sc-bytes)              | Number of bytes that server received                                                                |
| Bytes Received (cs-bytes)          | Number of bytes that server received                                                                |
| Time Taken (time-taken)            | Time that action took in milliseconds                                                               |
| Protocol Version (cs-version)      | Protocol version, HTTP or FTP that the client used                                                  |
| Host (cs-host)                     | Hostname (if any)                                                                                   |
| User Agent (cs(UserAgent))         | Browser type that client used                                                                       |
| Cookie (cs(Cookie))                | Content of cookie sent or received (if any)                                                         |
| Referrer                           | Site that user last visited. Site provided a link to the current state                              |

**Sample:**
```
# Software: Microsoft Internet Information Services 6.0
# Version: 1.0 #Date: 2009-06-11 05:12:03 #Fields: date time
s-sitename s-ip cs-method cs-uri-stem cs-uri-query s-port
cs-username c-ip cs(User-Agent) sc-status sc-substatus scwin32-
status 2009-06-11 05:12:02 W3SVC1893743816
192.168.1.109 GET / – 4677 – 192.168.1.109 Mozilla/4.0
(compatible;+MSIE+4.01;+Windows+NT;+MS+Search+5.0+Robot)
401 2 2148074254 2009-06-11 05:12:02 W3SVC1893743816
192.168.1.109 GET / – 4677 – 192.168.1.109 Mozilla/4.0+
(compatible;+MSIE+4.01;+Windows+NT;+MS+Search+5.0+Robot)
401 2 2148074254 - See more at:
http://www.surfray.com/blog/2009/08/11/iis-log-fileformats-
overview/#sthash.GaXCsZkQ.dpuf
```

### Apache HTTP Server
- Most popular web servers
- Supports variety of features, many implemented as compiled modules which extend the core functionality ranging from server-side programming language support to authentication schemes
	- Common language interfaces support Perl, Python, TCL and PHP
	- Popular authentication modules include `mod_access`, `mod_auth`, `mod_digest`, `mod_auth_digest`
	- Other features include: SSL, TLS, proxy module, URL rewriter, custom log files and filtering support

#### Server Logs
**Types of logs:**

| Log    | Description                                                                                                                                          |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Error  | - diagnostic information and record any errors that it encounters in processing requests<br> - Default name: error_log (unix) or error.log (windows) |
| Access | - records all HTTP requests processed by the server                                                                                                  |

#### Access Logs
- Location and content of access log are controlled by the CustomLog directive
- **Common log format:**
	- Typical configuration for the access log might look as follows:
	
```
LogFormat "%h %l %u %t \"%r\" %>s %b" common
CustomLog logs/access_log common
```

- **Combined log format:**
```
LogFormat "%h %l %u %t \"%r\" %>s %b \"%{Referer}i\" \"%{User-agent}i\""
combined
CustomLog log/access_log combined
```

- **Forensic log**
	- `mod_log_forensic` provides for forensic logging of client requests
	- Logging is done before and after processing a request
		- Hence, forensics log contains two log lines for each request
	- Forensic logger is very strict with no customizations
		- Can be an invaluable debugging and security tool

### Sendmail
> Email handling program on Unix/Linux

![](https://i.imgur.com/YZ0MhyT.png)

#### Sendmail Log
- Sendmail uses `syslog(3)` facility to log its activities
- Syslog facility used is "mail"
- Log message contents depends on Sendmail version
- General format of a Sendmail message log line is:
```
<date> <host> sendmail[pid]: <qid>: <message>
```
- Most messages are in the `name=value` pair
- Line is logged per message received and per delivery attempt

### Terminology
**User Agents:**
- Application run directly by user
- Used to compose and sent outgoing messages and to display, file and print messages arriving in a user's mailbox

**Transfer Agents:**
- Mail Transfer Agents (MTAs) used to transfer messages between machines
- User Agents give the message to the Transfer Agent who may pass it onto another Transfer Agent or others
- Transfer Agents are responsible for properly routing messages to destination
- Sendmail is an example of MTA

**Delivery Agents:**
- Delivery Agents are used to place a message into a user's mailbox
- When message arrives at its destination, final transfer agent will give the message to the appropriate delivery  agent who will add the message to the user's mailbox

## Active Directory
- **Active Directory Domain Services (AD DS)** is Microsoft's implementation of a directory service that provides centralised authentication and authorization services
- Centrally stores and manages security principals e.g. users, groups and computers and offers centralised and secure access to network resources
- Active Directory makes use of Lightweight Directory Access Protocol (LDAP) versions 2 and 3 (Microsoft's version of Kerberos and DNS)

### AD Logs
| Log                   | Description                                                                                                                                                                  |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Directory Service Log | Contains events logged by Windows Active Directory service <br> **Example:** connection problems between server and global catalog are recorded in the directory service log |
| Security Log          | Security audit logs, e.g. logon events and directory access/changes                                                                                                                                                                             |

### AD Auditing Log
- Auditing of directory access and modifications must be enabled
- Audit events are logged to the security event log
- **Categories:**
	- Directory Service Access
	- Directory Service Changes
	- Directory Service Replication
	- Detailed Directory Service Replication

## NIDS Alert Logs (Snort)
![](https://i.imgur.com/SgFjSsB.png)

## DNS Logs
![](https://i.imgur.com/cZA0CpV.png)

- One of the root DNS servers has its IP address changed, but this DNS server produced the above syslog message still has the old information in its configuration file

## Log Formats
- **Text logs:**
	- W3C Extended log file format (ELF), Apache access log, Cisco SDEE/CIDEE, ArcSight common event format, Syslog, IDMEF (XML-based format)
- **Binary logs:**
	- Windows event log: EVT file in `c:\Windows\System32\Config\`
	- Compressed logs: security by obscurity
	- Relational database
- **Open format:**
	- Documented as ISO, ANSI, Internet standard or in an RFC reference
- **Proprietary format**

## Log Requirements
### Log Message Formatting
- **Username (Who)**
	- For user or administrator activities
	- Include name of identity provider if available
- **Object (What)**
	- Affected system component
	- Examples: User account, file
- **Status (What)**
	- Action succeeded, failed or deferred
- **System/Application/Component (Where)**
	- Relevant application context
	- Examples: Initiator, target systems
- **Source (Where)**
	- For network connectivity or distributed application operation
	- IP address or hostname
	- Related components - destination, source port, destination port
- **Timestamp and Time Zone (When)**
	- Time zone essential for distributed applications
	- High volume system can also use a transaction ID
- **Reason (Why)**
	- Does not require security and audit personnel to dig for hidden reason
- **Action (How)**
	- Provide nature of the event
- **Priority**
	- Different companies can have different policies on information availability/confidentiality
- **Group Related Messages (Session ID)**:
	- Group related messages across multiple threads and processes
- **Process ID (pid) and Thread ID (tid)**
	- Correlate a running application with its log records when multiple applications write to a shared log file
- **Activity Measurement**
	- Detect attempts to transfer a larger-than-expected batch of data

### Bad Habits in Logging
| Bad Habit                                   | Explanation                                                                                                                                                                                                                                                               |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Missing timestamp and time zone             | Without this information, it is hard to know when the log actually occurred which can hurt investigative procedures, data searching etc.                                                                                                                                  |
| Magic or secret numbers                     | Magic or secret numbers appear quite often in log messages as many times there is no documentation to back up the number leading to misinformation on the log reviewer part and frustration                                                                               |
| Vague or no description                     | Log entries need to be clear, concise and comprehendible as vague or missing descriptions not only make it difficult for humans and automated tools to decipher a message, but it can waste valuable time when investigating systems outages or potential security issues |
| No Source/Destination IPs, Hostnames, Ports | For systems that are client-server, source and destination IPs and port information needs to be included in the log entry                                                                                                                                                 |
| No unique message identifier                | Each log message must have a unique identifier as having a way to uniquely describe a message has value for searching and other applications on the log message                                                                                                           |
| No unique message type identifier           | To solve this, concatenate together common parts of a log message. This differs from a unique ID                                                                                                                                                                          |

### Criteria for Good Logging
- What will happen next
- What else happened that should be cared about
- What should be done about it
- Where to get more info
- How certain to be that the above really happened
- What is affected

## Log Management
### Log Collection Planning
- Identify exact needs
- Architecture
- Policy definition
- Scalability
- Software selection

### Log Analysis Goals
- Varies depending on business needs - **security and compliance**
- Past bad things
- Future bad things
- Never before seen things

### Policy Definition
- Logging policy
	- Adequate logging
	- Log aggregation and retention
	- Log protection
	- Log review

![](https://i.imgur.com/mocPmVk.png)

### Security Host Logs
- Host logs produced by OS components
- Various network services logs
- Logs of applications running on the system
- Host logs from applications with security mission running on a host
	- Related to attacks, intrusions, compromises, infections
	- False alarms
- **Host intrusion detection and prevention:**
	- Detect and block a wide variety of network, OS and application attacks
	- HIPS block attacks based on signatures, dynamic rules or other mechanisms
	- <u>Events recorded are related to:</u>
		- Reconnaissance or probe detected
		- Changes to executable files

### Security Related Network Logs
- Network logs generated by network infrastructures (by routers and switches)
- <u>Network infrastructure logs:</u>
	- Logins and logouts
	- Connection established to the service
	- Bytes transferred in and out
	- Reboots
	- Configuration changes

### Selecting Log Sources
- Establish a repeatable process for evaluating and selecting systems and devices for logging
- **Criticality:**
	- Assign criticality level to a device
	- <u>Examples:</u>
		- Firewall more critical than workstation
		- DNS server is less critical than credit processing server
- **Validation:**
	- Get stakeholders to verify together that the source is indeed a critical asset

![](https://i.imgur.com/QPZwyGD.png)

### Logging Policy On Log Source Selection
- Collect log records from external firewalls and IDS/IPS systems
- Collect log records from every firewall, IPS, server and desktop in the network
- Review policy every 3-6 months

### Architecture
#### Basic Log Server Deployment
![](https://i.imgur.com/DtgQ3CF.png)

#### Log Server and Log Collector Deployment
![](https://i.imgur.com/1H3VXw0.png)

- Distribute log collectors in strategic points in network
- Log server acts as central place for reviewing and analysing logs
- Log collectors only back up logs temporarily

#### Logging Policy on Data Collection
- Log message should tell what happened and why it happened
- State:
	- Program variable
	- Return values
	- Stack information
- Context:
	- Supporting information describing why the log message is written

#### OS Logs
- Authentication (Linux syslogs, Remote User Authentication with SSH daemon)
![](https://i.imgur.com/sUVjXhQ.png)

- Service start-up, shutdown and status change (Solaris syslog, Sendmail daemon starting up)
![](https://i.imgur.com/GfvgvP3.png)

- Service crash (due to crash or kill command)
![](https://i.imgur.com/pZErB6w.png)

- Miscellaneous status message (Linux syslog of a time synchronisation daemon (NTPD))
![](https://i.imgur.com/vIjwtdk.png)

- OS Logs are relevant to security
	- <u>Useful for:</u>
		- Intrusion detection
		- Incident response

#### Network Daemon Logs
- Connection established to the service
![](https://i.imgur.com/eLACd4a.png)

- Connection failed to server
![](https://i.imgur.com/NsVDXLs.png)

- Connection was established but access was not allowed
![](https://i.imgur.com/lVkdgnP.png)

- Various failure messages
![](https://i.imgur.com/xaCv8yH.png)

- Various status messages
![](https://i.imgur.com/jWVezsO.png)

> Network daemons present the most common entryways into the system remotely and many of the attacks are targeted against them

#### Application Logs
- Application user activity
- Privileged user activity
- Routine but critical activity
- Reconfiguration

#### HIDS & HIPS
- **Example:** Dragon HIDS
	- Nessus vulnerability scanner probe detects by watching the FTP logs
![](https://i.imgur.com/GAz2nLN.png)

- Authorisation or authentication failed
![](https://i.imgur.com/rv8xlcV.png)

### Log Rotation
- An active log file moved to an archive copy
- New empty file created for an application to begin writing to
- **Two basic types of mechanisms**
	- Log rotation scripts
	- Application itself handles log rotation duties
		- Handled by custom-written application code
		- Built-in features of a third-party logging library
- Application does not need to know that log rotation has occurred
- **Log Rotation Schemes:**
	- Hourly, daily, weekly
	- Size based (10MB, etc.)
	- Size and time-based
		- Log file is archived based on time but each log file is also capped at some size

### Logging Policy on Log Retention/Storage
- Log storage, accessibility and log destruction
- Never use a syslog server as a log retention system
- Storage size per day
	- Log records (in bytes) per second - 86400
	- General rule of thumb is to add 25% to log retention capacity needs
	- Distributed storage

### High Level Concerns on Planning
- **Accuracy**
- Free from defects or misleading information
- Reduce false positives
- IDS to consult a vulnerability database
- IDS to implement policy scheme whereby user and group profiles are used to create acceptable network usage of individuals
- Timestamps
- Different vendors use different formats
- ISO 8601 standard
- Format `YYYY-MM-DDTHH:MM:SS.SSS +/-H`
- **Integrity**
- Authenticate client and server, encrypt data
- Send data in clear, but use dedicated network
- Digital signature
**Confidence**
- Priority or severity
- Take input from many disjointed areas and deriving a more mature and accurate fact from the set of all inputs

