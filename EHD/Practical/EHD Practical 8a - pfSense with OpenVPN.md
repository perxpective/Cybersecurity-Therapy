# pfSense with OpenVPN

###### tags: #EHD 

## Table of Contents
```toc
```

## Using pfSense
**On InternalClient1 VM**
1. Login to pfSense with username `admin` and password `pfsense`
2. Go to the Interfaces menu and select WAN

![](https://i.imgur.com/4cGNdot.png)

3. Scroll down to the Reserved Network section and uncheck the box "Block private networks and loopback addresses"

> This is because the Win10 image represents the system in the External Network and the Win10 image has a private IP address

4. From the Firewall menu, select Rules and click the WAN interface

![](https://i.imgur.com/GZQCaSH.png)

5. Check if there is a WAN rule that allows incoming ICMP packets
6. If there is no WAN rule allowing ICMP packets, add a new WAN rule to do so

## Adding a WAN Rule to Allow Incoming ICMP Packets
**On InternalClient1 VM**
1. Browse to the pfSense Web Configurator and click Rules on the Firewall menu
2. Click on the WAN tab
3. At the bottom of the page, click on the green button that will add a rule to the end of the list
4. Under Edit Firewall Rules, for Protocol, select ICMP and for ICMP Subtypes, select "any"

![](https://i.imgur.com/nukzy5H.png)

5. Under Extra Options, for Description, enter "Allow ICMP"
6. Scroll to the bottom and click Save and Apply Changes

## Setting Up the OpenVPN Server on the pfSense Firewall
**On InternalClient1 VM**
1. Browse to the pfSense Web Configurator and click OpenVPN

![](https://i.imgur.com/HpL9pvn.png)

2. Click on the Wizards tab
3. For the Authentication Backend Type, Type of Server, use the default "Local User Access"
4. Set up a Certificate Authority that will be used to generate certificates for the VPN Server and Users
5. For Descriptive Name, use `OpenVPN_CA`
6. For Country Code, type "SG"
7. For State and Province, type "Singapore"
8. For City, type "Singapore"
9. For Organisation, type any organisation name
10. Click "Add new CA"

![](https://i.imgur.com/LjhUfM8.png)

11. For Descriptive Name, type "OpenVPN_Server" and leave the default values for the rest of the fields
12. Click on "Create new Certificate"
13. For Interface, check that it is set to WAN
14. For Description, type "OpenVPN for Staff"
15. For Tunnel Network, use "192.168.7.0/24"

> This is the private network that will be set up when the remote user connects to the VPN server
> 

16. For Local Network, type in the subnet of the Internal Network
17. For the rest of the fields, configure the type of encryption used
18. Click Next
19. Next, configure the firewall rules for the VPN server
20. Check the two boxes for the Firewall Rule and OpenVPN to allow remote clients to connect to VPN server and access the Internal Network

![](https://i.imgur.com/OC78fzx.png)

21. Click Next and Finish
22. Check that the Firewall rules have been created
23. From the Firewall menu, click on Rules and click on the WAN tab
24. Check that a new WAN rule has been added for the OpenVPN Server
25. Under Firewall Rules, click on the OpenVPN tab and check that a new OpenVPN rule has been added


## Setting Up the User and User Certificate
**On InternetClient1 VM**
1. In the pfSense Web Configurator, go to the System menu and click User Manager

![](https://i.imgur.com/CONEqbJ.png)

2. Click on the green Add button to add a new user
3. For username, type the username of the InternalClient1
4. Enter and confirm your password used in InternalClient1
5. For Full Name, type any username
6. Check the box to "Click to create a user certificate"

![](https://i.imgur.com/KbwiRJD.png)

7. Under "Create Certificate for User", for Descriptive Name, type any username
8. Check that Certificate Authority is OpenVPN_CA
9. Click Save

## Install OpenVPN Client Export Package
**On InternalClient1 VM**
1. On the pfSense Web Configurator, go to the System menu and click Package Manager
2. Go to the VPN menu and select OpenVPN
3. Click on the Client Export tab
4. Check that the Remote Access Server is the OpenVPN server
5. Scroll down to the OpenVPN clients section
6. Click on "Current Windows Installer" and save the OpenVPN client certificate installation to any folder on InternalClient1

> This OpenVPN Client installation file contains the OpenVPN for client software, the connection configuration for the OpenVPN server and the user certificate

7. The OpenVPN client installation for the user from InternalClient1 to the Win10 VM

**On Win10 VM**
1. Double-click on the OpenVPN client file to install it with default options
2. If there is a message about installing TAP-Windows, click Install

## Connecting to InternalNetwork through OpenVPN
**On Win10 VM**
1. On the left-hand corner, click on the Windows icon and choose All apps
2. Look for OpenVPN and run the OpenVPN GUI
3. Right-click on the OpenVPN GUI and choose Connect
4. Login as user `lim` and the password set previously
5. When connection is successful, the OpenVPN GUI icon in the System Tray will turn green
6. Use `ifconfig` to see VPN IP address
7. When 