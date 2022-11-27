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

## 