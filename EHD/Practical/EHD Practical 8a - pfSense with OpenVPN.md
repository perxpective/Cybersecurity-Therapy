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
20. Check 