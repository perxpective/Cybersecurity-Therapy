# EHD Practical 8 - Virtual Private Network

###### tags: #EHD 

## Table of Contents
```toc
```

## Setting up VPN Server and VPN Client with Static Key
**On Win10 VM Server**
1. On the bottom left corner, click the Windows icon and select **All Apps**
2. Look for OpenVPN and right-click on "Generate a static OpenVPN key" and choose "Run as administrator"
3. Static key has been generated and saved in `C:\Program Files\OpenVPN\config\key.txt`
4. Copy generated `key.txt` to shared folder
5. Enter the following contents:
```
dev tun
ifconfig 10.8.0.1 10.8.0.2
secret key.txt
```
6. Save the file as `server.ovpn` in `C:\Program Files\OpenVPN\config` folder

**On Win10 VM Client**
1. Access shared folder from Win10 server and copy `key.txt` over to `C:\Program Files\OpenVPN\config`
2. Close shared folder window
3. Start Notepad as Administrator
4. Enter the following contents:
```
dev tun
remote Win10-Server-IP
ifconfig 10.8.0.2 10.8.0.1
secret key.txt
```
5. Save the file as `client.ovpn` in `C:\Program Files\OpenVPN\config`

## Connecting to OpenVPN
**On Win10 VM Server**
1. On the bottom left corner, click the Windows icon and choose **All apps**
2. Look for OpenVPN and run OpenVPN GUI
3. Right-click on OpenVPN GUI icon and choose Connect
4. If a Windows Firewall popup appears asking to allow OpenVPN to communicate on private networks, click "Allow Access" so that Windows Firewall allows connections to OpenVPN
5. Run Windows Firewall with Advanced Security and click **Inbound Rules** to see the following rules added to allow connections to OpenVPN for Private profiles and block OpenVPN for Public profiles
6. On Inbound Rules, disable the rule "File Sharing and Printer Sharing (SMB-In)" and enable the rule for Public profile
7. When the Win10 client tries to access the shared folder, it will not be able to do so over default private connections but it has to go through OpenVPN connection

**On Win10 VM Client**
1. In the bottom left corner, click on the Windows icon and choose All apps. Look for OpenVPN and run OpenVPN GUI. An OpenVPN GUI icon will appear in the System tray of the Taskbar.
2. Right-click on the OpenVPN GUI icon and choose Connect.
3. If a Windows Firewall popup appears asking if you want to allow OpenVPN to communicate on private networks, click “Allow access” so that Windows Firewall will allow connections to the OpenVPN. (you can always make changes to the Windows Firewall later)

**On Both Win10 VMs (Server and Client)**
- When the connection is successful, the OpenVPN GUI icon in the system tray will turn green
- Use `ipconfig` to see VPN IP address (either 10.8.0.1 or 10.8.0.2)

## Capturing Network Packets Through VPN
