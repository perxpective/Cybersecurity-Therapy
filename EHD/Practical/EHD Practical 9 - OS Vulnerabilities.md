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
> Server Message Block (SMB) or CIFS (Common Internet File System) can be used to share resources betw

**On Kali VM**
