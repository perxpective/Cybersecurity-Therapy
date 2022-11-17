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
secret ley.
```