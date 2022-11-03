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

| Field | Description |
| ----- | ----------- |
| Date  | d            |
